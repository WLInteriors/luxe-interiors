import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/reveal";
import { ArrowLeft, ArrowRight, Check, Upload } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request a Consultation" },
      { name: "description", content: "Schedule a private consultation with Westchester Luxury Interiors. Serving Westchester, NYC, and the Tri-State area." },
      { property: "og:title", content: "Request a Consultation" },
      { property: "og:description", content: "Schedule a private consultation with our principal designers." },
    ],
  }),
  component: Page,
});

const step1Schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
});

const step2Schema = z.object({
  projectType: z.enum(["Kitchen", "Bath", "Whole Home", "Custom Millwork", "Commercial", "Other"], {
    message: "Please select a project type",
  }),
  location: z.string().trim().min(2, "Location is required").max(100),
  budget: z.enum(["$100k–$250k", "$250k–$500k", "$500k–$1M", "$1M+"], {
    message: "Please select a budget range",
  }),
});

type FormData = {
  name: string; email: string; phone: string;
  projectType: string; location: string; budget: string;
  message: string;
  fileName?: string;
};

const initial: FormData = { name: "", email: "", phone: "", projectType: "", location: "", budget: "", message: "" };

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

  const next = () => {
    if (validateStep()) setStep((s) => s + 1);
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-charcoal text-charcoal-foreground">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-white/80 mb-6">Begin a Project</p>
            <h1 className="display-serif text-[clamp(2.5rem,7vw,6rem)] max-w-4xl">
              Request an estimate.
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Tell us about your project. A principal will be in touch within two business days.
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
                  Your inquiry has been received. A member of our principal team will be in touch
                  within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
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
                    <Field label="Full Name" name="name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} />
                    <Field label="Email" name="email" type="email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} />
                    <Field label="Phone" name="phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <Select label="Project Type" name="projectType" value={data.projectType} onChange={(v) => update("projectType", v)} error={errors.projectType}
                      options={["Kitchen", "Bath", "Whole Home", "Custom Millwork", "Commercial", "Other"]} />
                    <Field label="Location (City, State)" name="location" value={data.location} onChange={(v) => update("location", v)} error={errors.location} />
                    <Select label="Budget Range" name="budget" value={data.budget} onChange={(v) => update("budget", v)} error={errors.budget}
                      options={["$100k–$250k", "$250k–$500k", "$500k–$1M", "$1M+"]} />
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
                        placeholder="Scope, timeline, inspiration..."
                        maxLength={2000}
                      />
                    </div>
                    <div>
                      <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Plans / Inspiration (optional)</label>
                      <label className="flex items-center justify-center gap-3 border border-dashed border-border px-4 py-8 cursor-pointer hover:border-gold transition-colors">
                        <Upload size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {data.fileName ?? "Upload PDF, image, or blueprint"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png,.dwg"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f && f.size > 20 * 1024 * 1024) {
                              setErrors({ file: "File must be under 20MB" });
                              return;
                            }
                            setErrors({});
                            if (f) setData((d) => ({ ...d, fileName: f.name }));
                          }}
                        />
                      </label>
                      {errors.file && <p className="text-destructive text-sm mt-2">{errors.file}</p>}
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
                    <button type="submit" className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold/90 transition-colors">
                      Submit Inquiry <ArrowRight size={14} />
                    </button>
                  )}
                </div>
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
