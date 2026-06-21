import { motion } from "framer-motion";
import { processSteps } from "../../constants/process";
import { Container, SectionHeading } from "../ui";

export function ProcessSection() {
  return (
    <section id="process" className="bg-slate-50 py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A Frictionless Partnership Method"
          description="From first audit to autonomous operations — a structured engagement model built for enterprise velocity and precision."
        />

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-teal-300 to-transparent lg:block" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
            >
              <span className="text-gradient-brand mb-4 block font-mono text-sm font-bold">
                {step.number}
              </span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 transition-all group-hover:from-blue-100 group-hover:to-teal-100">
                <step.icon className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
