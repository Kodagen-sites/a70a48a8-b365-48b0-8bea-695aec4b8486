import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t hairline bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <div className="font-display text-lg uppercase tracking-[0.12em] text-contrast">
              {siteConfig.company.name}
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-contrast/65">
              {siteConfig.company.description}
            </p>
            <div className="flex gap-3 pt-2">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border hairline text-contrast/70 transition-colors hover:text-contrast"
                >
                  <span className="text-xs font-bold uppercase">{name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-contrast/45">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-contrast/70">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-contrast">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-contrast/45">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-contrast/70">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-contrast">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{siteConfig.company.location}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-contrast/45">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-contrast/70">
              <li><Link href="/privacy" className="hover:text-contrast">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-contrast">Terms</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-contrast/40">
          {siteConfig.disclaimer}
        </p>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t hairline pt-8 font-mono text-xs text-contrast/40 md:flex-row">
          <div>
            © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
          </div>
          <div>{siteConfig.company.location}</div>
        </div>
      </div>
    </footer>
  );
}
