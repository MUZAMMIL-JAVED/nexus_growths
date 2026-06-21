import {
  Activity,
  Bot,
  FolderCheck,
  Globe,
  HeartPulse,
  LayoutDashboard,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";
import type { CapabilityPillar, StatItem } from "../types";

export const capabilityPillars: CapabilityPillar[] = [
  {
    id: "ai-automation",
    span: "col-span-1 md:col-span-2",
    icon: Bot,
    title: "Intelligent AI Workflow Automation",
    description:
      "Our core specialty — custom n8n production pipelines, WhatsApp Business API integrations, and LLM agent deployment that replace manual work with autonomous, reliable systems.",
    tags: ["n8n", "LLM Agents", "WhatsApp API", "Primary Service"],
    featured: true,
  },
  {
    id: "web-dev",
    span: "col-span-1",
    icon: Globe,
    title: "Web Application Development",
    description:
      "Full-stack web apps built with React, Next.js, and Python backends — from SaaS platforms and client portals to AI-integrated business tools, led by our Full-Stack & AI team.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    id: "mobile-dev",
    span: "col-span-1",
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Native Android and Flutter apps with Jetpack Compose, Clean Architecture, and Play Store delivery — built by our Mobile Lead with 3+ years of production experience.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    id: "control-centers",
    span: "col-span-1",
    icon: LayoutDashboard,
    title: "Custom Dashboards & Control Centers",
    description:
      "Real-time Next.js dashboards with analytics, user intent logs, and operational telemetry — giving leadership full visibility into business performance.",
    tags: ["Dashboards", "Analytics", "Telemetry"],
  },
  {
    id: "scaling",
    span: "col-span-1 md:col-span-2",
    icon: HeartPulse,
    title: "Operational Scaling & Optimization",
    description:
      "Telehealth workflow automation, medical network retention loops, and B2B operations scaling — engineered for measurable ROI and long-term growth.",
    tags: ["Medical Tech", "B2B Scale", "ROI"],
  },
];

export const capabilityStats: StatItem[] = [
  { label: "Projects Delivered", value: "140+", icon: FolderCheck },
  { label: "Pipeline Uptime", value: "99.9%", icon: Activity },
  { label: "Manual Work Eliminated", value: "87%", icon: Zap },
];

export const capabilityExtras = [
  {
    icon: Workflow,
    title: "n8n Production Pipelines",
    text: "Battle-tested automation with error handling, retries, and full observability.",
  },
] as const;
