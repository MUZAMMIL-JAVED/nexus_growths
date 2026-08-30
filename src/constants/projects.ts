export interface Project {
  id: string;
  name: string;
  tagline: string;
  url: string;
  category: "mobile" | "web";
  /** Internal route for the full project detail page */
  detailPath?: string;
  /** Show a featured badge on the card */
  featured?: boolean;
  playStore?: string;
  appStore?: string;
}

export const projects: Project[] = [
  // ── Mobile Apps ──────────────────────────────────────────────
  {
    id: "courial",
    name: "Courial",
    tagline: "Premium chauffeur, valet, delivery & concierge — all in one app.",
    url: "https://play.google.com/store/apps/details?id=com.courial.user&hl=en",
    category: "mobile",
    detailPath: "/projects/courial",
    featured: true,
    playStore:
      "https://play.google.com/store/apps/details?id=com.courial.user&hl=en",
    appStore: "https://apps.apple.com/us/app/courial/id1521638262",
  },
  {
    id: "versus",
    name: "Versus Sports Simulator",
    tagline: "Sports predictions & power rankings across 13 leagues.",
    url: "https://play.google.com/store/apps/details?id=com.compughter.ratings",
    category: "mobile",
    detailPath: "/projects/versus",
    playStore:
      "https://play.google.com/store/apps/details?id=com.compughter.ratings",
    appStore:
      "https://apps.apple.com/us/app/versus-sports-simulator/id658521240",
  },
  {
    id: "fussball",
    name: "Fussball Europa",
    tagline: "European football news, transfers, and rumors — fast & free.",
    url: "https://play.google.com/store/apps/details?id=barca99com.androidapp",
    category: "mobile",
    detailPath: "/projects/fussball",
    playStore:
      "https://play.google.com/store/apps/details?id=barca99com.androidapp",
    appStore: "https://apps.apple.com/bg/app/fussball-europa/id442924872",
  },
  {
    id: "ticketdraws",
    name: "Ticket Draws",
    tagline: "Free sweepstakes — watch an ad, earn a ticket, win big.",
    url: "https://play.google.com/store/apps/details?id=com.growmoredevs.thefreelottery",
    category: "mobile",
    detailPath: "/projects/ticketdraws",
    playStore:
      "https://play.google.com/store/apps/details?id=com.growmoredevs.thefreelottery",
    appStore: "https://ticket-draws.en.softonic.com/iphone",
  },
  {
    id: "whisperr",
    name: "Whisperr",
    tagline: "Live voice translation with real-time subtitles in 100+ languages.",
    url: "https://play.google.com/store/apps/details?id=com.whisperr.whisperr",
    category: "mobile",
    detailPath: "/projects/whisperr",
    playStore:
      "https://play.google.com/store/apps/details?id=com.whisperr.whisperr",
    appStore:
      "https://apps.apple.com/us/app/live-voice-translator-whisperr/id6504528888",
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
