"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import { MagneticButton, TextReveal, FadeUp } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";
import { heroFrames } from "@/lib/assets";

export default function ScrubHero() {
  const [progress, setProgress] = useState(0);
  const { eyebrow, h1, sub } = siteConfig.hero;

  // Overlay copy holds through the first third of the scrub, then yields
  // to the footage as the visitor scrolls deeper.
  const copyOpacity = progress < 0.32 ? 1 : Math.max(0, 1 - (progress - 0.32) * 4);
  const hintOpacity = Math.max(0, 1 - progress * 12);

  return (
    <section id="top" className="relative">
      <ScrollCanvas
        frameCount={heroFrames.frameCount}
        pattern={heroFrames.pattern}
        scrollDistance={siteConfig.scrollHero.scrollDistance}
        loadingLabel={siteConfig.company.name}
        loadingVariant="L2"
        onProgress={setProgress}
      >
        {/* Legibility wash — keeps charcoal type readable over pearl footage */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/10 to-bg/70" />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: copyOpacity,
            transform: `translateY(${(1 - copyOpacity) * -40}px)`,
          }}
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.38em] text-contrast/70">
              {eyebrow}
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>

          <TextReveal
            as="h1"
            stagger={0.06}
            className="max-w-5xl font-display text-[13vw] leading-[0.92] tracking-tight text-contrast sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {h1.map((l) => l.text).join(" ")}
          </TextReveal>

          <FadeUp delay={0.35}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-contrast/70 md:text-lg">
              {sub}
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="pointer-events-auto mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <MagneticButton
                as="a"
                href="#contact"
                className="min-h-[48px] rounded-full bg-contrast px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-bg transition-all hover:brightness-125"
              >
                {siteConfig.cta.primary}
              </MagneticButton>
              <a
                href="#platform"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border hairline bg-bg/40 px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-contrast backdrop-blur-sm transition-colors hover:bg-bg/70"
              >
                {siteConfig.cta.secondary}
              </a>
            </div>
          </FadeUp>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-contrast/45"
          style={{ opacity: hintOpacity }}
        >
          Scroll ↓
        </div>
      </ScrollCanvas>

      {/* Clean pin-release spacer before the next section */}
      <div className="h-px bg-transparent" />
    </section>
  );
}
