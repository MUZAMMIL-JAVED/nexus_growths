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
      "This is what we do best. We build n8n pipelines that connect your tools, automate repetitive tasks, and keep running 24/7 — with WhatsApp notifications, AI decision-making, and zero manual work.",
    tags: ["n8n", "LLM Agents", "WhatsApp API", "Primary Service"],
    featured: true,
  },
  {
    id: "web-dev",
    span: "col-span-1",
    icon: Globe,
    title: "Web Application Development",
    description:
      "Web apps that actually do something — SaaS products, client portals, AI-connected tools. Built end-to-end with React, Next.js, and Python.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    id: "mobile-dev",
    span: "col-span-1",
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Android and Flutter apps that look great and actually get shipped. Our mobile lead handles everything from first build to Play Store release.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    id: "control-centers",
    span: "col-span-1",
    icon: LayoutDashboard,
    title: "Custom Dashboards & Control Centers",
    description:
      "Custom dashboards that show what's actually happening in your business — live data, team metrics, and the numbers that matter to leadership.",
    tags: ["Dashboards", "Analytics", "Telemetry"],
  },
  {
    id: "scaling",
    span: "col-span-1 md:col-span-2",
    icon: HeartPulse,
    title: "Operational Scaling & Optimization",
    description:
      "Already running? We help you scale it — automating the parts that break under growth, adding retention systems, and optimizing what's already working.",
    tags: ["Medical Tech", "B2B Scale", "ROI"],
  },
];

export const capabilityStats: StatItem[] = [
  { label: "Projects Delivered", value: "140+", icon: FolderCheck },
  { label: "Pipeline Uptime", value: "99.9%", icon: Activity },
  { label: "Avg. Less Manual Work", value: "~80%", icon: Zap },
];

export const capabilityExtras = [
  {
    icon: Workflow,
    title: "n8n Production Pipelines",
    text: "Automation that recovers from errors automatically, retries failed steps, and alerts you when something needs attention.",
  },
] as const;
