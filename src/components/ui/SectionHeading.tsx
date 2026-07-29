import { cn } from "../../lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="mb-3 text-sm font-semibold tracking-widest text-teal-600 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-slate-600 leading-relaxed md:text-lg",
            align === "center" && "mx-auto max-w-2xl xl:max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
