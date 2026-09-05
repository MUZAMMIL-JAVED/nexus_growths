import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 hover:border-slate-800 shadow-sm",
  gradient:
    "btn-gradient text-white border border-transparent shadow-md hover:shadow-lg hover:brightness-105",
  secondary:
    "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm",
  ghost:
    "bg-transparent text-slate-600 border border-transparent hover:text-slate-900 hover:bg-slate-100",
};

export function Button({
  children,
  href,
  to,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200",
    variants[variant],
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
