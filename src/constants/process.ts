import { Compass, PenTool, Rocket, TrendingUp } from "lucide-react";
import type { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery",
    description:
      "We spend time actually understanding your business — what's working, what's breaking, and where automation would save the most time. No guesswork.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Architect",
    description:
      "We design the solution before building anything — workflow diagrams, screen layouts, and a clear plan you can approve before we write a single line of code.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description:
      "We ship it, test it, and hand it over with proper documentation. Your team can use it from day one, and we stay on call for any tweaks.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description:
      "Once it's running, we help you grow it — adding new automations, improving what's there, and making sure the system scales as your business does.",
  },
];
