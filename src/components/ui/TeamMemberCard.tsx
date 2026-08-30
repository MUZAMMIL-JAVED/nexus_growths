import { ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import type { TeamMember } from "../../types";
import { cn } from "../../lib/cn";

interface TeamMemberCardProps {
  member: TeamMember;
  onView: (member: TeamMember) => void;
}

function Avatar({ member }: { member: TeamMember }) {
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
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 text-lg font-bold text-teal-700">
      {initials}
    </div>
  );
}

function badgeStyles(badge?: string) {
  if (badge === "Founder") return "bg-teal-100 text-teal-700";
  if (badge === "Technical Co-Founder") return "bg-slate-100 text-slate-700";
  if (badge === "Full-Stack & AI Lead") return "bg-blue-100 text-blue-700";
  if (badge === "Mobile Lead") return "bg-violet-100 text-violet-700";
  return "bg-slate-100 text-slate-600";
}

export function TeamMemberCard({ member, onView }: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        member.featured
          ? "border-teal-200 ring-2 ring-teal-100"
          : "border-slate-200 hover:border-slate-300"
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="relative shrink-0">
          {member.featured && (
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-teal-400/40 to-blue-400/40 blur-sm transition-opacity group-hover:opacity-80" />
          )}
          <div
            className={cn(
              "relative h-28 w-28 overflow-hidden rounded-full border-2 bg-slate-100 shadow-md",
              member.featured ? "border-teal-200" : "border-slate-200"
            )}
          >
            <Avatar member={member} />
          </div>
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:scale-105 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        )}
      </div>

      {member.badge && (
        <span
          className={cn(
            "mb-2 inline-block w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold",
            badgeStyles(member.badge)
          )}
        >
          {member.badge}
        </span>
      )}

      <h3 className="mb-1 text-lg font-bold text-slate-900">{member.name}</h3>
      <p className="mb-3 text-sm font-medium text-teal-700">{member.role}</p>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-4">
        {member.bio}
      </p>

      <button
        type="button"
        onClick={() => onView(member)}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200",
          member.featured
            ? "btn-gradient text-white shadow-sm hover:shadow-md hover:brightness-105"
            : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
        )}
      >
        View Profile
        <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </article>
  );
}
