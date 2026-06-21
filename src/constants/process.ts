import { Compass, PenTool, Rocket, TrendingUp } from "lucide-react";
import type { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery",
    description:
      "Deep-dive audit of your operational stack, friction points, and growth bottlenecks. We map the architecture before writing a single line of code.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Architect",
    description:
      "Precision system design — n8n pipeline blueprints, dashboard wireframes, and integration schemas engineered for your specific B2B context.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description:
      "Production-grade deployment with operational telemetry, error handling, and documentation. Zero-downtime handoff to your team.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description:
      "Continuous optimization loops, retention automation, and infrastructure scaling as your operations and revenue compound.",
  },
];
