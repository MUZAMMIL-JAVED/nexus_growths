import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useLenis } from "lenis/react";
import type { TeamMember } from "../../types";
import { LinkedInIcon } from "./LinkedInIcon";
import { Tag } from "./Tag";
import { cn } from "../../lib/cn";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

function badgeStyles(badge?: string) {
  if (badge === "Founder") return "bg-teal-100 text-teal-700";
  if (badge === "Technical Co-Founder") return "bg-slate-100 text-slate-700";
  if (badge === "Full-Stack & AI Lead") return "bg-blue-100 text-blue-700";
  if (badge === "Mobile Lead") return "bg-violet-100 text-violet-700";
  return "bg-slate-100 text-slate-600";
}

function ModalAvatar({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover"
        style={{
          objectPosition: member.imagePosition ?? "center center",
          transform: member.imageScale ? `scale(${member.imageScale})` : undefined,
        }}
      />
    );
  }

  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 text-2xl font-bold text-teal-700">
      {initials}
    </div>
  );
}

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!member) return;

    lenis?.stop();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [member, onClose, lenis]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!member || !container) return;

    const stopBackgroundScroll = (event: WheelEvent) => {
      event.stopPropagation();
    };

    container.addEventListener("wheel", stopBackgroundScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", stopBackgroundScroll);
    };
  }, [member]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
          data-lenis-prevent
        >
          <button
            type="button"
            aria-label="Close profile"
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
            data-lenis-prevent
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 bg-slate-50/80 px-6 py-5 sm:px-8">
              <div className="flex min-w-0 items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-md sm:h-20 sm:w-20">
                  <ModalAvatar member={member} />
                </div>
                <div className="min-w-0">
                  {member.badge && (
                    <span
                      className={cn(
                        "mb-1.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                        badgeStyles(member.badge)
                      )}
                    >
                      {member.badge}
                    </span>
                  )}
                  <h2
                    id="team-modal-title"
                    className="truncate text-lg font-bold text-slate-900 sm:text-xl"
                  >
                    {member.name}
                  </h2>
                  <p className="text-sm font-medium text-teal-700">{member.role}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={scrollRef}
              data-lenis-prevent
              className="overflow-y-auto overscroll-contain px-6 py-6 sm:px-8"
            >
              <section className="mb-8">
                <h3 className="mb-3 text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  About
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {member.bio}
                </p>
              </section>

              {member.skillGroups && member.skillGroups.length > 0 ? (
                <section className="mb-8 space-y-5">
                  <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                    Tech Stack & Skills
                  </h3>
                  {member.skillGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              ) : (
                member.tags.length > 0 && (
                  <section className="mb-8">
                    <h3 className="mb-3 text-xs font-semibold tracking-widest text-slate-400 uppercase">
                      Tech Stack & Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </section>
                )
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  View LinkedIn Profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
