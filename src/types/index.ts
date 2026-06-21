import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface CapabilityPillar {
  id: string;
  span: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string | null;
  linkedin: string | null;
  tags: string[];
  skillGroups?: { label: string; items: string[] }[];
  badge?: string;
  featured?: boolean;
  placeholder?: boolean;
  /** CSS object-position for face framing inside the circle */
  imagePosition?: string;
  /** Scale factor to zoom crop for better face centering */
  imageScale?: number;
}
