"use client";

import {
  FadeUp,
  StaggerChildren,
  TextReveal,
  CardTiltLayer,
  MagneticButton,
  NumberCounter,
} from "@/components/motion";
import { siteConfig } from "@/lib/site-config";
import { assetImage } from "@/lib/assets";

export default function HomeSections() {
  return (
    <>
      <PlatformSection />
      <CapabilitiesSection />
      <IntelligenceSection />
      <StatsSection />
      <ManifestoSection />
      <ContactSection />
    </>
  );
}

// ── Platform overview ───────────────────────────────────────────
function PlatformSection() {
  return (
    <section id="platform" className="section-pad border-t hairline bg-bg">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              The platform
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-4 font-display text-3xl leading-[1.05] tracking-tight text-contrast md:text-5xl"
          >
            {siteConfig.company.tagline}
          </TextReveal>
          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-contrast/70">
              {siteConfig.about}
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <a
              href="#capabilities"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-contrast underline-offset-8 hover:underline"
            >
              Explore capabilities →
            </a>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <CardTiltLayer intensity={0.2} lift={14} className="relative">
            <div className="overflow-hidden rounded-2xl border hairline bg-surface shadow-[0_30px_80px_-40px_rgba(58,61,69,0.4)]">
              <img
                src={assetImage("section-platform", "financial analytics dashboard")}
                alt="The Cerebra AI investing intelligence dashboard"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </CardTiltLayer>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Capabilities grid ───────────────────────────────────────────
function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-pad border-t hairline bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Capabilities
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-4 font-display text-3xl leading-[1.05] tracking-tight text-contrast md:text-5xl"
          >
            {siteConfig.capabilitiesHeading}
          </TextReveal>
          <FadeUp delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-contrast/70">
              {siteConfig.capabilitiesIntro}
            </p>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.07}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.capabilities.map((cap, i) => (
            <CardTiltLayer
              key={cap.slug}
              intensity={0.18}
              lift={8}
              className="h-full rounded-2xl border hairline bg-bg p-7 transition-shadow hover:shadow-[0_24px_60px_-32px_rgba(58,61,69,0.35)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-accent/30" />
              </div>
              <h3 className="font-display text-lg leading-tight text-contrast">{cap.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-contrast/65">{cap.description}</p>
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ── Intelligence pipeline ───────────────────────────────────────
function IntelligenceSection() {
  return (
    <section id="intelligence" className="section-pad border-t hairline bg-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              How it works
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-4 font-display text-3xl leading-[1.05] tracking-tight text-contrast md:text-5xl"
          >
            {siteConfig.intelligenceHeading}
          </TextReveal>
        </div>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border hairline bg-accent/20 md:grid-cols-4"
        >
          {siteConfig.intelligence.map((step) => (
            <div key={step.step} className="bg-bg p-7">
              <div className="font-mono text-sm text-accent">0{step.step}</div>
              <h3 className="mt-4 font-display text-xl text-contrast">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-contrast/65">{step.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ── Stats band ──────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { to: 12, suffix: "M+", label: "Data points analyzed daily" },
    { to: 150, suffix: "+", label: "Global markets covered" },
    { to: 200, prefix: "<", suffix: "ms", label: "Median signal latency" },
    { text: "24/7", label: "Always-on monitoring" },
  ];

  return (
    <section className="section-pad border-t hairline bg-contrast text-bg">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div>
              <div className="font-display text-4xl tracking-tight md:text-5xl">
                {"text" in s ? (
                  s.text
                ) : (
                  <NumberCounter to={s.to!} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
                )}
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bg/55">
                {s.label}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ── Manifesto ───────────────────────────────────────────────────
function ManifestoSection() {
  return (
    <section className="section-pad border-t hairline bg-surface/40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <TextReveal
          as="p"
          stagger={0.04}
          className="font-display text-2xl leading-[1.2] tracking-tight text-contrast sm:text-3xl md:text-5xl"
        >
          {siteConfig.manifesto}
        </TextReveal>
      </div>
    </section>
  );
}

// ── Contact (conversion block) ──────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="section-pad border-t hairline bg-bg">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <FadeUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Get started
          </p>
        </FadeUp>
        <TextReveal
          as="h2"
          className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-[1.05] tracking-tight text-contrast md:text-5xl"
        >
          {siteConfig.contactBlock.heading}
        </TextReveal>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-contrast/70">
            {siteConfig.contactBlock.description}
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton
              as="a"
              href={`mailto:${siteConfig.company.email}?subject=Cerebra%20AI%20—%20Sales%20enquiry`}
              className="min-h-[48px] rounded-full bg-contrast px-8 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-bg transition-all hover:brightness-125"
            >
              {siteConfig.cta.primary}
            </MagneticButton>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="inline-flex min-h-[48px] items-center justify-center font-mono text-[12px] uppercase tracking-[0.18em] text-contrast/70 underline-offset-8 hover:underline"
            >
              {siteConfig.company.email}
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-contrast/40">
            {siteConfig.company.location}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
