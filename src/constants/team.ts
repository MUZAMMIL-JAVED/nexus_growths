import type { TeamMember } from "../types";

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "Muzammil Javed",
    role: "Founder · AI Automation & Full-Stack Engineer",
    bio: "Leads NexusGrowths and architects intelligent n8n pipelines, LLM agent systems, and scalable full-stack infrastructures — turning manual B2B operations into autonomous growth engines.",
    image: "/team/muzammil-javed.png",
    imagePosition: "center 18%",
    imageScale: 1.12,
    linkedin: "https://www.linkedin.com/in/muzammil-javed-655297203/",
    badge: "Founder",
    tags: ["AI Automation", "n8n", "LLM Agents", "Full-Stack", "Systems Design"],
    skillGroups: [
      { label: "Automation & AI", items: ["n8n", "LLM Agents", "Workflow Design"] },
      { label: "Engineering", items: ["Full-Stack", "Backend", "Infrastructure"] },
    ],
    featured: true,
  },
  {
    id: "fullstack-ai",
    name: "Hasnain Ali",
    role: "Full-Stack Engineer & AI Developer",
    bio: "Builds production-grade web platforms, mobile apps, and AI-powered backends — from FastAPI and Django APIs to React/Next.js frontends and LangChain RAG systems with vector search.",
    image: "/team/hasnain-ali.png",
    imagePosition: "center center",
    imageScale: 1.2,
    linkedin: "https://www.linkedin.com/in/hasnain-ali-fullstack-ai/",
    badge: "Full-Stack & AI Lead",
    tags: [
      "Python",
      "FastAPI",
      "Django",
      "React",
      "Next.js",
      "React Native",
      "LangChain",
      "PyTorch",
    ],
    skillGroups: [
      {
        label: "Backend & AI",
        items: ["Python", "FastAPI", "Django", "LangChain", "RAG", "Pinecone", "PyTorch"],
      },
      {
        label: "Frontend & Mobile",
        items: ["React", "Next.js", "React Native", "Redux", "Zustand"],
      },
    ],
  },
  {
    id: "mobile-lead",
    name: "M. Salman",
    role: "Mobile Application Developer",
    bio: "Android specialist with 3+ years shipping native and Flutter apps — Jetpack Compose UIs, Clean Architecture, Firebase & Supabase backends, and end-to-end Play Store releases.",
    image: "/team/m-salman.png",
    imagePosition: "center 12%",
    imageScale: 1.45,
    linkedin: "https://www.linkedin.com/in/muhammad-salman-5672a0203/",
    badge: "Mobile Lead",
    tags: [
      "Kotlin",
      "Flutter",
      "Jetpack Compose",
      "MVVM",
      "Firebase",
      "Supabase",
      "REST APIs",
      "Play Store",
    ],
    skillGroups: [
      {
        label: "Mobile",
        items: ["Native Android", "Flutter", "Jetpack Compose", "Material Design 3"],
      },
      {
        label: "Architecture",
        items: ["MVVM", "Clean Architecture", "Coroutines", "Hilt", "Room"],
      },
      {
        label: "Cloud & Release",
        items: ["Firebase", "Supabase", "FCM", "Retrofit", "Play Store"],
      },
    ],
  },
];
