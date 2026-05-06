import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/reveal";
import { ArrowLeft, ArrowRight, Check, Upload, X } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request an Estimate — Westchester Luxury Interiors" },
      { name: "description", content: "Request a private estimate from Westchester Luxury Interiors. Share photos, drawings, or measurements and a principal will respond within two business days." },
      { property: "og:title", content: "Request an Estimate" },
      { property: "og:description", content: "Tell us about your project — photos, inspiration, and drawings welcome." },
    ],
  }),
  component: Page,
});

const PROJECT_TYPES = ["Kitchen", "Bath", "Whole Home", "Custom Millwork", "Built-Ins / Library", "Radiator / AC Covers", "Commercial Buildout", "Hospitality", "School / Institutional", "Other"] as const;
const SECTORS = ["Residential", "Commercial"] as const;
const BUDGETS = ["Under $100k", "$100k–$250k", "$250k–$500k", "$500k–$1M", "$1M+", "Not sure yet"] as const;
const TIMELINES = ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just exploring"] as const;

const step1Schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  location: z.string().trim().min(2, "Project location is required").max(120),
});

const step2Schema = z.object({
  sector: z.enum(SECTORS, { message: "Select residential or commercial" }),
  projectType: z.enum(PROJECT_TYPES, { message: "Select a project type" }),
  budget: z.enum(BUDGETS, { message: "Select a budget range" }),
  timeline: z.enum(TIMELINES, { message: "Select a timeline" }),
});

type FormData = {
  name: string; email: string; phone: string; location: string;
  sector: string; projectType: string; budget: string; timeline: string;
  message: string;
  files: { name: string; size: number }[];
};

const initial: FormData = {
  name: "", email: "", phone: "", location: "",
  sector: "", projectType: "", budget: "", timeline: "",
  message: "", files: [],
};

function Page() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const validateStep = () => {
    const schema = step === 1 ? step1Schema : step === 2 ? step2Schema : null;
    if (!schema) return true;
    const result = schema.safeParse(data);
    if (!result.success) {
      const e: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        if (iss.path[0]) e[iss.path[0] as string] = iss.message;
      });
      setErrors(e);
      return false;
    }
    setErrors({});
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => s + 1); };
  const back = () => setStep((s) => Math.max(1, s - 1));
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputsRef = useState<File[]>([])[0];
  const [realFiles, setRealFiles] = useState<File[]>([]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("payload", JSON.stringify({
        name: data.name, email: data.email, phone: data.phone, location: data.location,
        sector: data.sector, projectType: data.projectType, budget: data.budget,
        timeline: data.timeline, message: data.message,
      }));
      realFiles.forEach((f) => fd.append("files", f));
      const res = await fetch("/api/public/contact", { method: "POST", body: fd });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
    void fileInputsRef;
  };

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const nextMeta: { name: string; size: number }[] = [...data.files];
    const nextReal: File[] = [...realFiles];
    const errs: string[] = [];
    Array.from(files).forEach((f) => {
      if (f.size > 20 * 1024 * 1024) { errs.push(`${f.name} exceeds 20MB`); return; }
      if (nextMeta.length >= 8) { errs.push("Up to 8 files"); return; }
      nextMeta.push({ name: f.name, size: f.size });
      nextReal.push(f);
    });
    setErrors(errs.length ? { file: errs.join(" · ") } : {});
    setData((d) => ({ ...d, files: nextMeta }));
    setRealFiles(nextReal);
  };

  const removeFile = (i: number) => {
    setData((d) => ({ ...d, files: d.files.filter((_, idx) => idx !== i) }));
    setRealFiles((r) => r.filter((_, idx) => idx !== i));
  };

  return (
    <>
      <section id="estimate" className="pt-36 md:pt-44 pb-16 md:pb-20 bg-charcoal text-charcoal-foreground">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-white/80 mb-6">Begin a Project</p>
            <h1 className="display-serif text-[clamp(2.5rem,7vw,6rem)] max-w-4xl leading-[1.02]">
              Request an estimate.
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Tell us about your project. The more you share — inspiration images,
              existing-condition photos, architect drawings, or even rough measurements —
              the more precise our first conversation will be. A principal responds
              within two business days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_2fr]">
          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <p className="eyebrow mb-3">Studio</p>
              <address className="not-italic text-foreground leading-relaxed">
                48 Purchase Street<br />Rye, NY 10580
              </address>
            </div>
            <div>
              <p className="eyebrow mb-3">Direct</p>
              <p><a href="tel:+19145550100" className="link-gold">(914) 555-0100</a></p>
              <p><a href="mailto:studio@westchesterluxury.com" className="link-gold">studio@westchesterluxury.com</a></p>
            </div>
            <div>
              <p className="eyebrow mb-3">Hours</p>
              <p className="text-muted-foreground">Mon–Fri · 8am – 6pm<br />Saturdays by appointment</p>
            </div>

            <div className="border-t border-border pt-8">
              <p className="eyebrow mb-4">What helps us most</p>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>· Photos of the existing space</li>
                <li>· Inspiration images or saved Pinterest boards</li>
                <li>· Architect or designer drawings (PDF / DWG)</li>
                <li>· Rough measurements or floor plans</li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="bg-card border border-border p-8 md:p-12 shadow-soft">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gold/20 mx-auto flex items-center justify-center mb-6">
                  <Check className="text-gold" size={28} />
                </div>
                <h2 className="font-serif text-3xl mb-4">Thank you, {data.name.split(" ")[0]}.</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your inquiry has been received. A principal will be in touch within
                  two business days to schedule an unhurried walkthrough.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                {/* Stepper */}
                <div className="flex items-center gap-2 mb-10">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="flex-1">
                      <div className={`h-px transition-colors ${n <= step ? "bg-gold" : "bg-border"}`} />
                      <p className={`mt-3 text-[10px] tracking-[0.25em] uppercase ${n <= step ? "text-foreground" : "text-muted-foreground"}`}>
                        {n === 1 ? "Contact" : n === 2 ? "Project" : "Details"}
                      </p>
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field label="Full Name" name="name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} />
                      <Field label="Phone" name="phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} />
                    </div>
                    <Field label="Email" name="email" type="email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} />
                    <Field label="Project Location (City, State)" name="location" value={data.location} onChange={(v) => update("location", v)} error={errors.location} />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <RadioGroup
                      label="Residential or Commercial"
                      name="sector"
                      value={data.sector}
                      onChange={(v) => update("sector", v)}
                      error={errors.sector}
                      options={SECTORS as unknown as string[]}
                    />
                    <Select label="Project Type" name="projectType" value={data.projectType} onChange={(v) => update("projectType", v)} error={errors.projectType}
                      options={PROJECT_TYPES as unknown as string[]} />
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Select label="Approximate Budget" name="budget" value={data.budget} onChange={(v) => update("budget", v)} error={errors.budget}
                        options={BUDGETS as unknown as string[]} />
                      <Select label="Desired Timeline" name="timeline" value={data.timeline} onChange={(v) => update("timeline", v)} error={errors.timeline}
                        options={TIMELINES as unknown as string[]} />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Tell us about your project</label>
                      <textarea
                        rows={6}
                        value={data.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Scope, rooms, materials you love, deadlines, anything that matters…"
                        maxLength={2000}
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Helpful details: square footage, number of rooms, finish level, must-keep
                        elements, and any architects or designers already engaged.
                      </p>
                    </div>

                    <div>
                      <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3 block">
                        Photos, inspiration, drawings or measurements
                      </label>
                      <label className="flex flex-col items-center justify-center gap-3 border border-dashed border-border px-4 py-10 cursor-pointer hover:border-gold transition-colors text-center">
                        <Upload size={20} className="text-muted-foreground" />
                        <span className="text-sm text-foreground">
                          Drop files here or <span className="text-gold underline">browse</span>
                        </span>
                        <span className="text-xs text-muted-foreground max-w-sm">
                          Existing-condition photos, inspiration images, architect drawings,
                          floor plans, or hand-sketched measurements all welcome.
                          PDF · JPG · PNG · DWG · up to 20MB each, 8 files max.
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png,.dwg,.heic"
                          onChange={(e) => onFiles(e.target.files)}
                        />
                      </label>
                      {errors.file && <p className="text-destructive text-sm mt-2">{errors.file}</p>}

                      {data.files.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {data.files.map((f, i) => (
                            <li key={i} className="flex items-center justify-between gap-4 border border-border px-4 py-2 text-sm">
                              <span className="truncate">{f.name}</span>
                              <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-muted-foreground text-xs">
                                  {(f.size / 1024 / 1024).toFixed(1)} MB
                                </span>
                                <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                                  <X size={14} />
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
                  {step > 1 ? (
                    <button type="button" onClick={back} className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowLeft size={14} /> Back
                    </button>
                  ) : <span />}

                  {step < 3 ? (
                    <button type="button" onClick={next} className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-charcoal-foreground text-xs tracking-[0.25em] uppercase font-medium hover:bg-charcoal/90 transition-colors">
                      Continue <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button type="submit" disabled={submitting} className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold/90 transition-colors disabled:opacity-60">
                      {submitting ? "Sending…" : "Submit Inquiry"} <ArrowRight size={14} />
                    </button>
                  )}
                </div>
                {submitError && <p className="text-destructive text-sm mt-4 text-right">{submitError}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", value, onChange, error }: {
  label: string; name: string; type?: string; value: string; onChange: (v: string) => void; error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3 block">{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-background border px-4 py-3 text-foreground focus:outline-none transition-colors ${error ? "border-destructive" : "border-border focus:border-gold"}`}
      />
      {error && <p className="text-destructive text-sm mt-2">{error}</p>}
    </div>
  );
}

function Select({ label, name, value, onChange, error, options }: {
  label: string; name: string; value: string; onChange: (v: string) => void; error?: string; options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3 block">{label}</label>
      <select
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-background border px-4 py-3 text-foreground focus:outline-none transition-colors ${error ? "border-destructive" : "border-border focus:border-gold"}`}
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="text-destructive text-sm mt-2">{error}</p>}
    </div>
  );
}

function RadioGroup({ label, name, value, onChange, error, options }: {
  label: string; name: string; value: string; onChange: (v: string) => void; error?: string; options: string[];
}) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3">{label}</p>
      <div className="grid grid-cols-2 gap-3">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              type="button"
              key={o}
              onClick={() => onChange(o)}
              className={`px-4 py-4 border text-sm tracking-wide transition-colors ${active ? "border-gold bg-gold/10 text-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
              aria-pressed={active}
              aria-label={`${name} ${o}`}
            >
              {o}
            </button>
          );
        })}
      </div>
      {error && <p className="text-destructive text-sm mt-2">{error}</p>}
    </div>
  );
}
