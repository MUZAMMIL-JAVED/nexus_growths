import { motion } from "framer-motion";
import {
  capabilityExtras,
  capabilityPillars,
  capabilityStats,
} from "../../constants/capabilities";
import { Card, Container, SectionHeading, Tag } from "../ui";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Full-Stack Solutions for Modern Businesses"
          description="AI automation is our flagship — backed by dedicated web and mobile teams ready to build your complete digital infrastructure."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {capabilityPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={pillar.span}
            >
              <Card
                spotlight
                className={`relative z-0 h-full ${pillar.featured ? "ring-2 ring-teal-200" : ""}`}
              >
                <div className="relative z-10">
                  {pillar.featured && (
                    <span className="mb-3 inline-block rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700">
                      Flagship Service
                    </span>
                  )}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-teal-50">
                    <pillar.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 md:col-span-3"
          >
            <Card>
              <div className="grid gap-6 sm:grid-cols-3">
                {capabilityStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 sm:border-r sm:border-slate-200 sm:last:border-r-0 sm:pr-6 sm:last:pr-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-teal-50">
                      <stat.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-gradient-brand text-xl font-extrabold sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {capabilityExtras.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-5"
          >
            {capabilityExtras.map((item) => (
              <Card key={item.title} spotlight>
                <div className="relative z-10 flex gap-4">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <h4 className="mb-1 font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
