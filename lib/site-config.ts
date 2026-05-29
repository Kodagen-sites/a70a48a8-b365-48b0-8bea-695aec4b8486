// ============================================================
// site-config.ts — single source of truth for Cerebra AI
//
// Asset references: section stills + OG live in content/asset-manifest.json
// (Supabase CDN URLs, written by scripts/generate-images.ts). The hero is a
// scroll-scrubbed frame sequence — frame metadata lives in
// content/frames-manifest.json (written by gen:frames). Never hardcode a
// local /-path for generated images; index the manifest by slot.
// ============================================================

export const siteConfig = {
  company: {
    name: "Cerebra AI",
    tagline: "Investing intelligence, amplified",
    description:
      "Cerebra AI is an investing intelligence platform that turns market noise into clear, AI-driven signals — built for individual investors who want an institutional edge.",
    email: "hello@cerebra.ai",
    phone: "+1 (415) 555-0142",
    location: "San Francisco, CA",
  },

  // Used by the shipped legal pages (optional-chained there).
  contact: {
    email: "hello@cerebra.ai",
    location: "San Francisco, CA",
  },

  brand: {
    primary: "#3A3D45",
    accent: "#9CA0A8",
    bg: "#FBFBFA",
    surface: "#EAEAEA",
    contrast: "#3A3D45",
  },

  typography: {
    display: "Archivo Black",
    body: "Inter",
    mono: "ui-monospace",
  },

  seo: {
    siteUrl: "https://cerebra.ai",
    locale: "en_US",
    htmlLang: "en",
    defaultTitle: "Cerebra AI — Investing intelligence, amplified",
    defaultDescription:
      "AI-powered investing intelligence for individual investors. Real-time signals, predictive forecasting, portfolio risk analysis, and custom alerts in one platform.",
    twitterHandle: "@cerebra_ai",
  },

  social: {
    linkedin: "https://linkedin.com/company/cerebra-ai",
    twitter: "https://twitter.com/cerebra_ai",
  },

  // Anchor-scroll navigation (single-page landing).
  nav: [
    { href: "#platform", label: "Platform" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#intelligence", label: "Intelligence" },
    { href: "#contact", label: "Contact" },
  ],

  hero: {
    eyebrow: "AI investing intelligence",
    h1: [
      { text: "Read the market", accent: false },
      { text: "the way the", accent: false },
      { text: "machines do.", accent: true },
    ],
    sub: "Cerebra AI distills millions of data points into the signals that matter — so you invest with conviction, not guesswork.",
  },

  cta: {
    primary: "Contact sales",
    secondary: "See the platform",
  },

  // -- Capabilities (the headline section) ----------------------
  capabilitiesHeading: "Everything you need to invest with an edge",
  capabilitiesIntro:
    "One platform, the full intelligence stack — and the freedom to build signals that are uniquely yours.",
  capabilities: [
    {
      name: "Real-time signal engine",
      slug: "signals",
      description:
        "AI scans global markets around the clock and surfaces actionable buy, hold, and trim signals the moment conditions shift.",
    },
    {
      name: "Predictive forecasting",
      slug: "forecasting",
      description:
        "Probabilistic price and scenario models show you the range of likely outcomes — not a single false-precision number.",
    },
    {
      name: "Portfolio intelligence",
      slug: "portfolio",
      description:
        "Continuous risk, exposure, and correlation analysis across everything you hold, with plain-language explanations.",
    },
    {
      name: "Sentiment & news AI",
      slug: "sentiment",
      description:
        "Natural-language models read filings, earnings calls, news, and social chatter so you catch the story before the price moves.",
    },
    {
      name: "Risk guardrails",
      slug: "guardrails",
      description:
        "Automated drawdown alerts and concentration warnings keep your downside in view before it becomes a problem.",
    },
    {
      name: "Custom signals",
      slug: "custom-signals",
      description:
        "Compose your own AI-driven screens and alerts from any factor, indicator, or data feed — no code required.",
    },
  ] as Array<{ name: string; slug: string; description: string }>,

  // -- Intelligence pillars (how it works / why it's different) -
  intelligenceHeading: "Institutional-grade intelligence, made personal",
  intelligence: [
    {
      step: 1,
      title: "Ingest",
      description:
        "Millions of price ticks, filings, and headlines flow in continuously across 150+ markets.",
    },
    {
      step: 2,
      title: "Reason",
      description:
        "Cerebra's models weigh momentum, fundamentals, and sentiment together — the way a full research desk would.",
    },
    {
      step: 3,
      title: "Signal",
      description:
        "Only high-conviction signals reach you, each with a clear rationale you can actually act on.",
    },
    {
      step: 4,
      title: "Adapt",
      description:
        "The system learns from outcomes and your preferences, sharpening every signal it sends you next.",
    },
  ] as Array<{ step: number; title: string; description: string }>,

  stats: [
    { value: "12M+", label: "Data points analyzed daily" },
    { value: "150+", label: "Global markets covered" },
    { value: "<200ms", label: "Median signal latency" },
    { value: "24/7", label: "Always-on monitoring" },
  ] as Array<{ value: string; label: string }>,

  manifesto:
    "Markets reward information and punish noise. Cerebra AI was built to put the information edge of an institutional desk into the hands of every individual investor.",

  about:
    "Founded in San Francisco, Cerebra AI is on a mission to close the intelligence gap between Wall Street and everyone else. We pair frontier machine learning with a relentless focus on clarity — because a signal you don't understand is a signal you can't trust.",

  contactBlock: {
    heading: "Bring institutional intelligence to your portfolio",
    description:
      "Talk to our team about access, data coverage, and how Cerebra AI fits the way you invest.",
  },

  disclaimer:
    "Cerebra AI provides informational analysis only and does not offer personalized investment advice. Investing involves risk, including possible loss of principal.",

  scrollHero: {
    archetype: "G" as const,
    styleId: "S11",
    renderMode: "scrub-cinematic" as const,
    assetMode: "live-generate" as const,
    imageUrl: "",
    // Overwritten by gen:frames (extract-frames.sh writes the real count).
    frameCount: 192,
    scrollDistance: 4,
  },
} as const;

export type SiteConfig = typeof siteConfig;
