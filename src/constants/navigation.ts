import type { NavLink } from "../types";

export const navLinks: NavLink[] = [
  { href: "/#capabilities", label: "Services" },
  { href: "/#team", label: "Team" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export const footerLinks = {
  capabilities: [
    "AI Automation",
    "Web Development",
    "Mobile Apps",
    "Dashboards",
  ],
  company: ["About", "Process", "Contact"],
  technologies: ["n8n", "Next.js", "LLM Agents"],
} as const;
