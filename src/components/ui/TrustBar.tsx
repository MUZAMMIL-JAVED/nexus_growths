import { teamMembers } from "../../constants/team";
import { siteConfig } from "../../config/site";
import { cn } from "../../lib/cn";

export function TrustBar({ className }: { className?: string }) {
  const avatars = teamMembers.filter((m) => m.image);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5",
        className
      )}
    >
      <div className="flex items-center pl-2">
        {avatars.map((member, i) => (
          <div
            key={member.id}
            className="relative -ml-3 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm first:ml-0"
            style={{ zIndex: avatars.length - i }}
          >
            <img
              src={member.image!}
              alt={member.name}
              className="h-full w-full object-cover"
              style={{
                objectPosition: member.imagePosition ?? "center center",
                transform: member.imageScale
                  ? `scale(${member.imageScale})`
                  : undefined,
              }}
            />
          </div>
        ))}
      </div>
      <p className="max-w-md text-center text-sm leading-relaxed text-slate-600 sm:text-left">
        <span className="font-semibold text-slate-800">
          {siteConfig.stats.teamSize}
        </span>
        {" · "}
        <span className="font-semibold text-slate-800">
          {siteConfig.stats.projectsDelivered}
        </span>
        {" · "}
        {siteConfig.stats.clients}
      </p>
    </div>
  );
}
