import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../constants/projects";
import type { Project } from "../../constants/projects";
import { Container, SectionHeading } from "../ui";
import {
  APP_STORE_ICON,
  GOOGLE_PLAY_ICON,
  StoreLinkButton,
} from "../ui/StoreLinks";
import { cn } from "../../lib/cn";

const categoryMeta = {
  mobile: {
    label: "Mobile Apps",
    Icon: Smartphone,
    accent: "text-blue-600",
    pill: "bg-blue-50 text-blue-700",
    border: "hover:border-blue-200",
    glow: "hover:shadow-blue-100/60",
  },
  web: {
    label: "Web Apps",
    Icon: Globe,
    accent: "text-teal-600",
    pill: "bg-teal-50 text-teal-700",
    border: "hover:border-teal-200",
    glow: "hover:shadow-teal-100/60",
  },
} as const;

const outlineButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const meta = categoryMeta[project.category];
  const Icon = meta.Icon;
  const hasDetail = Boolean(project.detailPath);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.42, delay: index * 0.07 }}
      whileHover={{ y: -3 }}
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        "transition-all duration-300 hover:shadow-md",
        meta.border,
        meta.glow
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
            project.category === "mobile" ? "bg-blue-50" : "bg-teal-50"
          )}
        >
          <Icon className={cn("h-4.5 w-4.5", meta.accent)} />
        </div>

        {project.featured && (
          <span className="rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-slate-700">
          {project.name}
        </h3>
        <p className="text-xs leading-relaxed text-slate-500">
          {project.tagline}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-2 pt-1">
        {hasDetail ? (
          <Link to={project.detailPath!} className={outlineButtonClass}>
            Explore Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={outlineButtonClass}
          >
            {project.category === "mobile" ? "View on Play Store" : "Visit Site"}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}

        <div className="flex items-center justify-between gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
              meta.pill
            )}
          >
            {project.category === "mobile" ? "Mobile App" : "Web App"}
          </span>

          {project.category === "mobile" &&
            (project.playStore || project.appStore) && (
              <div className="flex items-center gap-1.5">
                {project.appStore && (
                  <StoreLinkButton
                    href={project.appStore}
                    label={`${project.name} on the App Store`}
                    imageSrc={APP_STORE_ICON}
                  />
                )}
                {project.playStore && (
                  <StoreLinkButton
                    href={project.playStore}
                    label={`${project.name} on Google Play`}
                    imageSrc={GOOGLE_PLAY_ICON}
                    variant="play-store"
                  />
                )}
              </div>
            )}
        </div>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const mobile = projects.filter((p) => p.category === "mobile");
  const web = projects.filter((p) => p.category === "web");

  return (
    <section id="work" className="bg-slate-50 py-7">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="A Slice of our Projects"
          description="We don't list everything — just a few live products that show the range. Apps on the Play Store, platforms in production, and everything in between."
        />

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Mobile Applications
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {mobile.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-2">
            <Globe className="h-4 w-4 text-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">
              Web Applications
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {web.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + mobile.length} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
