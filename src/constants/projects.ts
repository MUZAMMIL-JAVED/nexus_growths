export interface Project {
  id: string;
  name: string;
  tagline: string;
  url: string;
  category: "mobile" | "web";
}

export const projects: Project[] = [
  // ── Mobile Apps ──────────────────────────────────────────────
  {
    id: "versus",
    name: "Versus Sports Simulator",
    tagline: "Head-to-head sports prediction engine on Android.",
    url: "https://play.google.com/store/apps/details?id=com.compughter.ratings",
    category: "mobile",
  },
  {
    id: "fussball",
    name: "Fussball Europa",
    tagline: "European football scores, stats & live tables.",
    url: "https://play.google.com/store/apps/details?id=barca99com.androidapp",
    category: "mobile",
  },
  {
    id: "ticketdraws",
    name: "Ticket Draws",
    tagline: "Free lottery draws — win without spending a cent.",
    url: "https://play.google.com/store/apps/details?id=com.growmoredevs.thefreelottery",
    category: "mobile",
  },
  {
    id: "whisperr",
    name: "Whisperr",
    tagline: "Live voice translation that speaks your language.",
    url: "https://play.google.com/store/apps/details?id=com.whisperr.whisperr",
    category: "mobile",
  },
  // ── Web Apps ─────────────────────────────────────────────────
  {
    id: "goodfin",
    name: "Goodfin",
    tagline: "Smart personal finance, built for real decisions.",
    url: "https://www.goodfin.com/",
    category: "web",
  },
  {
    id: "govbuddy",
    name: "GovBuddy",
    tagline: "Navigate government processes without the headache.",
    url: "https://www.govbuddy.com/",
    category: "web",
  },
  {
    id: "jobdockets",
    name: "Jobdockets",
    tagline: "Field service management that keeps crews on track.",
    url: "https://jobdockets.com/",
    category: "web",
  },
];
