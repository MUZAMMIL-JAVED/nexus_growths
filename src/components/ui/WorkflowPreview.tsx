import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    label: "Trigger",
    text: "Client submits a form, order, or appointment online",
  },
  {
    label: "Automate",
    text: "n8n pipeline runs — validates data, routes tasks, triggers AI agents",
  },
  {
    label: "Notify",
    text: "WhatsApp, email & Slack alerts sent to the right team instantly",
  },
  {
    label: "Sync",
    text: "CRM, dashboard & database updated in real time — no manual entry",
  },
] as const;

const RESULT = "45 min saved per workflow · Zero duplicate data · 99.9% uptime";

export function WorkflowPreview() {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleSteps >= WORKFLOW_STEPS.length) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => setVisibleSteps((v) => v + 1), 450);
    return () => clearTimeout(timer);
  }, [visibleSteps]);

  return (
    <div className="mx-auto w-full max-w-3xl text-left">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
      >
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
              What Our Automation Does — Live Example
            </span>
          </div>
          <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
            Telehealth Clinic
          </span>
        </div>

        <div className="space-y-0 p-5 sm:p-6">
          {WORKFLOW_STEPS.slice(0, visibleSteps).map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4 border-b border-slate-100 py-4 last:border-b-0"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-teal-50 text-xs font-bold text-teal-700">
                {i + 1}
              </div>
              <div>
                <p className="mb-0.5 text-xs font-semibold tracking-wide text-teal-600 uppercase">
                  {step.label}
                </p>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}

          {!done && visibleSteps < WORKFLOW_STEPS.length && (
            <div className="flex items-center gap-2 py-3 text-sm text-slate-400">
              <span className="inline-block h-4 w-4 animate-pulse rounded-full bg-teal-200" />
              Running next step…
            </div>
          )}

          {done && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 flex items-start gap-3 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <div>
                <p className="text-sm font-semibold text-teal-800">
                  Outcome for your business
                </p>
                <p className="text-sm text-teal-700">{RESULT}</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
