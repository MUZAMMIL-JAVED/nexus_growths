import { useState, type FormEvent } from "react";
import { ArrowRight, Send } from "lucide-react";
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
  const [form, setForm] = useState<ContactFormData>(initialForm);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 p-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
          <Send className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          Message Received
        </h3>
        <p className="text-sm text-slate-600">
          We&apos;ll be in touch within 24 hours to schedule your architecture
          audit.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputClass}
          placeholder="Your Company Ltd."
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Operational Challenge
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Describe the friction points in your current operations..."
        />
      </div>

      <Button type="submit" variant="gradient" className="group w-full py-3">
        Submit Audit Request
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Button>
    </form>
  );
}
