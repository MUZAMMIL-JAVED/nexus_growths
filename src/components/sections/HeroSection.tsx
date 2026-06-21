import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Button, Container, TrustBar, WorkflowPreview } from "../ui";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-card relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20"
        >
          <div className="hero-cloud hero-cloud-left" />
          <div className="hero-cloud hero-cloud-right" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 uppercase"
            >
              AI Automation · Web & Mobile Development
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-5 text-3xl leading-[1.12] font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              Let&apos;s Build an Automation System That Actually Runs Your
              Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Tell us what you want to automate or build — we&apos;ll architect
              intelligent n8n pipelines, full-stack web platforms, and mobile
              apps that eliminate manual work and scale your revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button href="#capabilities" variant="secondary" className="px-7 py-3">
                Explore Our Services
              </Button>
              <Button href="#contact" variant="gradient" className="px-7 py-3">
                Book a Free Architecture Audit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <TrustBar />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8"
        >
          <WorkflowPreview />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-500"
        >
          {siteConfig.keywords.map((word) => (
            <span key={word} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
              {word}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
