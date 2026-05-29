"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-md border-b hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="font-display text-base tracking-[0.12em] uppercase text-contrast"
          >
            {siteConfig.company.name}
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {siteConfig.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-contrast/70 transition-colors hover:text-contrast"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-contrast px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bg transition-all hover:brightness-125"
            >
              {siteConfig.cta.primary}
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-contrast md:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-bg md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-base uppercase tracking-[0.12em] text-contrast">
                {siteConfig.company.name}
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-contrast">
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-6 pt-12">
              {siteConfig.nav.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-contrast"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
