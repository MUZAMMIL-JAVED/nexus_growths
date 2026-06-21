import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </Tag>
  );
}
