import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const Schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  location: z.string().trim().min(2).max(120),
  sector: z.enum(["Residential", "Commercial"]),
  projectType: z.string().trim().min(2).max(80),
  budget: z.string().trim().min(2).max(60),
  timeline: z.string().trim().min(2).max(60),
  message: z.string().trim().max(2000).optional().default(""),
});

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/heif",
  "image/webp",
  "application/acad",
  "image/vnd.dwg",
  "application/octet-stream",
]);
const MAX_FILE_BYTES = 20 * 1024 * 1024;
const MAX_FILES = 8;

function safeSegment(s: string) {
  return s.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const form = await request.formData();
          const json = form.get("payload");
          if (typeof json !== "string") {
            return Response.json({ error: "Missing payload" }, { status: 400 });
          }
          const parsed = Schema.safeParse(JSON.parse(json));
          if (!parsed.success) {
            return Response.json(
              { error: "Validation failed", issues: parsed.error.issues },
              { status: 400 },
            );
          }
          const data = parsed.data;

          const files = form.getAll("files").filter((f): f is File => f instanceof File);
          if (files.length > MAX_FILES) {
            return Response.json({ error: `Maximum ${MAX_FILES} files` }, { status: 400 });
          }

          const submissionId = crypto.randomUUID();
          const filePaths: string[] = [];

          for (const file of files) {
            if (file.size === 0) continue;
            if (file.size > MAX_FILE_BYTES) {
              return Response.json({ error: `${file.name} exceeds 20MB` }, { status: 400 });
            }
            if (file.type && !ALLOWED_TYPES.has(file.type)) {
              // allow common DWG mimes that browsers misreport
              if (!/\.(pdf|jpe?g|png|heic|heif|webp|dwg)$/i.test(file.name)) {
                return Response.json(
                  { error: `Unsupported file type: ${file.name}` },
                  { status: 400 },
                );
              }
            }
            const path = `${submissionId}/${Date.now()}-${safeSegment(file.name)}`;
            const buf = new Uint8Array(await file.arrayBuffer());
            const { error: upErr } = await supabaseAdmin.storage
              .from("contact-uploads")
              .upload(path, buf, {
                contentType: file.type || "application/octet-stream",
                upsert: false,
              });
            if (upErr) {
              console.error("upload error", upErr);
              return Response.json({ error: "Upload failed" }, { status: 500 });
            }
            filePaths.push(path);
          }

          const { error: insErr } = await supabaseAdmin.from("contact_submissions").insert({
            id: submissionId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            location: data.location,
            sector: data.sector,
            project_type: data.projectType,
            budget: data.budget,
            timeline: data.timeline,
            message: data.message || null,
            file_paths: filePaths,
          });

          if (insErr) {
            console.error("insert error", insErr);
            return Response.json({ error: "Could not save submission" }, { status: 500 });
          }

          return Response.json({ ok: true, id: submissionId });
        } catch (err) {
          console.error("contact submit error", err);
          return Response.json({ error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});
