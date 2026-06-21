import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { useSpotlight } from "../../hooks/useSpotlight";

interface CardProps {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
}

export function Card({ children, className, spotlight = false }: CardProps) {
  const onMouseMove = useSpotlight();

  return (
    <article
      onMouseMove={spotlight ? onMouseMove : undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md",
        spotlight && "spotlight-card",
        className
      )}
    >
      {children}
    </article>
  );
}
