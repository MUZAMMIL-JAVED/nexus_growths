import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  MapPin,
  Shield,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";
import { getProjectDetail } from "../constants/projectDetails";
import { Header, Footer } from "../components/layout";
import { Button, Card, Container, ImageCarousel, Tag, TimelineCards } from "../components/ui";
import { cn } from "../lib/cn";

const sectionFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.45 },
};

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectDetail(projectId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <main className="pt-[70px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white py-10 md:py-14">
          <div className="hero-cloud hero-cloud-left opacity-60" />
          <div className="hero-cloud hero-cloud-right opacity-60" />
          <Container className="relative z-10">
            <Link
              to="/#work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                  Case Study
                </p>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                  {project.name}
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  {project.tagline}
                </p>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.links.playStore && (
                    <Button
                      href={project.links.playStore}
                      variant="gradient"
                      className="px-5 py-2.5"
                    >
                      <Smartphone className="h-4 w-4" />
                      Google Play
                    </Button>
                  )}
                  {project.links.appStore && (
                    <Button
                      href={project.links.appStore}
                      variant="secondary"
                      className="px-5 py-2.5"
                    >
                      <Smartphone className="h-4 w-4" />
                      App Store
                    </Button>
                  )}
                  {project.links.website && (
                    <Button href={project.links.website} variant="secondary">
                      Visit Website
                    </Button>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
              >
                <ImageCarousel images={project.images} alt={project.name} />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="bg-slate-50 py-10 md:py-12">
          <Container>
            <motion.div {...sectionFade} className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                Platform
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Four Services, One Seamless App
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {project.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  {...sectionFade}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Card className="h-full p-6" spotlight>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-teal-50">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Problem & Solution */}
        <section className="bg-white py-10 md:py-12">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <motion.div {...sectionFade}>
                <Card className="h-full border-red-100 bg-red-50/30 p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-red-500" />
                    <h2 className="text-xl font-bold text-slate-900">
                      {project.problem.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {project.problem.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 md:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div {...sectionFade} transition={{ duration: 0.45, delay: 0.08 }}>
                <Card className="h-full border-teal-100 bg-teal-50/30 p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-600" />
                    <h2 className="text-xl font-bold text-slate-900">
                      {project.solution.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {project.solution.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 md:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Tech Stack */}
        <section className="bg-slate-50 py-10 md:py-12">
          <Container>
            <motion.div {...sectionFade} className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                Technology
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Tech Stack
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {project.techStack.map((group, i) => (
                <motion.div
                  key={group.category}
                  {...sectionFade}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Card className="p-6">
                    <h3 className="mb-4 text-sm font-semibold tracking-wider text-slate-900 uppercase">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Architecture */}
        <section className="bg-white py-10 md:py-12">
          <Container>
            <motion.div {...sectionFade} className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                Architecture
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                MVVM, Built for Scale
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                A layered architecture on both iOS and Android keeps features
                modular, testable, and ready for multi-city expansion.
              </p>
            </motion.div>

            <TimelineCards
              columns={project.architecture.length >= 4 ? 4 : 2}
              defaultIcon={Layers}
              items={project.architecture.map((layer, i) => ({
                number: String(i + 1).padStart(2, "0"),
                title: layer.title,
                description: layer.description,
              }))}
            />
          </Container>
        </section>

        {/* User Flows */}
        <section className="bg-slate-50 py-10 md:py-12">
          <Container>
            <motion.div {...sectionFade} className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                User Journey
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                End-to-End Booking Flow
              </h2>
            </motion.div>

            <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {project.flows.map((flow, i) => (
                <motion.div
                  key={flow.step}
                  {...sectionFade}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Card className="h-full p-6">
                    <span className="text-gradient-brand mb-3 block font-mono text-sm font-bold">
                      {flow.step}
                    </span>
                    <div className="mb-2 flex items-center gap-2">
                      <Workflow className="h-4 w-4 text-teal-600" />
                      <h3 className="font-semibold text-slate-900">
                        {flow.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {flow.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Development Approach */}
        <section className="bg-white py-10 md:py-12">
          <Container>
            <motion.div {...sectionFade} className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                Engineering
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Reactive & Proactive Development
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {project.developmentApproach.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...sectionFade}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Card className="h-full p-6" spotlight>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Features + Gallery */}
        <section className="bg-slate-50 py-10 md:py-12">
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div {...sectionFade}>
                <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                  Key Features
                </p>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Built for Convenience & Reliability
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-600 md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...sectionFade} transition={{ duration: 0.45, delay: 0.1 }}>
                <p className="mb-4 text-sm font-semibold tracking-widest text-teal-600 uppercase">
                  App Screens
                </p>
                <ImageCarousel images={project.images} alt={project.name} />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-white py-10 md:py-12">
          <Container>
            <motion.div
              {...sectionFade}
              className={cn(
                "flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center",
                "sm:px-10 sm:py-12"
              )}
            >
              <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
                Want something like this built?
              </h2>
              <p className="mb-6 max-w-lg text-slate-600">
                We design and ship native mobile apps with the same rigor —
                MVVM architecture, reactive state, and backends built for real
                users.
              </p>
              <Button to="/#contact" variant="gradient">
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
