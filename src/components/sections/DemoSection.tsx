import { motion } from "framer-motion";
import { ArrowRight, Clock, Play } from "lucide-react";
import { Button, Container, SectionHeading } from "../ui";

const demoHighlights = [
  "Automated patient intake — no manual data entry",
  "WhatsApp confirmations sent instantly",
  "Real-time dashboard for clinic staff",
  "Built with n8n + Next.js in under 2 weeks",
];

export function DemoSection() {
  return (
    <section id="demo" className="relative bg-white py-6">
      <Container>
        <SectionHeading
          eyebrow="Real Client Work"
          title="See a Real Automation in Action"
          description="A 90-second walkthrough of how we optimized a telehealth clinic workflow — from booking to follow-up."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:grid-cols-5 lg:gap-10"
        >
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              Telehealth Workflow Optimization
            </h3>
            <ul className="mb-6 space-y-3">
              {demoHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-600 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="secondary" className="text-sm">
              Request Full Case Study
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="lg:col-span-2">
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-md">
              <div className="flex h-44 flex-col items-center justify-center px-4 sm:h-48">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all group-hover:border-teal-400/50 group-hover:bg-teal-500/20"
                  aria-label="Play demo video"
                >
                  <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
                </motion.button>
                <p className="mt-3 text-sm font-medium text-white">
                  Loom Walkthrough
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5" />
                  <span>90 sec · Coming soon</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-teal-400" />
                  <span className="text-xs text-slate-300">Case Study #001</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  nexusgrowths
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
