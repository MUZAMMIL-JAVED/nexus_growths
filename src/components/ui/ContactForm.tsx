import { useState, type FormEvent } from "react";
import { ArrowRight, Send, Loader2, AlertCircle } from "lucide-react";
import type { ContactFormData } from "../../types";
import { Button } from "./Button";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState<ContactFormData>(initialForm);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
          <Send className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          Got it — we'll be in touch!
        </h3>
        <p className="text-sm text-slate-600">
          Expect a reply within 24 hours. We'll go through what you need and
          figure out the best next step together.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 hover:border-slate-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/60"
    >
      {/* Subtle top accent line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600 rounded-t-2xl" />

      {errorMessage && (
        <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            disabled={isSubmitting}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="e.g. Sarah Ahmed"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            disabled={isSubmitting}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="company" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
          Company or Project
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">Optional</span>
        </label>
        <input
          id="company"
          type="text"
          disabled={isSubmitting}
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputClass}
          placeholder="Your business, brand, or personal project name"
        />
      </div>

      <div className="mb-7">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
          What do you need?
        </label>
        <textarea
          id="message"
          required
          rows={4}
          disabled={isSubmitting}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Describe your idea, project, or what's on your mind — no jargon needed!"
        />
      </div>

      <Button
        type="submit"
        variant="gradient"
        className="group w-full py-3.5 text-base font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-xs text-slate-400">
        We reply within 24 hours · No spam, ever
      </p>
    </form>
  );
}

