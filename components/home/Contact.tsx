"use client";

import { useLang } from "@/lib/i18n";
import { contact, site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

/** Enlace con subrayado que se dibuja al pasar por encima. */
function DrawLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group relative inline-block font-mono text-[13px] uppercase tracking-[0.12em] text-ink-2 transition-colors duration-200 hover:text-ink"
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-correction transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-x-100"
      />
    </a>
  );
}

export function Contact() {
  const { t } = useLang();
  const links = [
    { href: `mailto:${site.email}`, label: "Email" },
    site.github ? { href: site.github, label: "GitHub" } : null,
    site.linkedin ? { href: site.linkedin, label: "LinkedIn" } : null,
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <section id="contacto" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <p className="label">{t(contact.eyebrow)}</p>
          <h2 className="font-display-tight mt-3 max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-tight text-ink">
            {t(contact.title)}
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-2">
            {t(contact.body)}
          </p>
          <p className="mt-4 max-w-lg border-l-2 border-correction pl-4 text-[14px] leading-relaxed text-ink-3">
            {t(contact.note)}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-block font-display-tight text-[clamp(1.6rem,5vw,3.2rem)] font-bold leading-none text-ink transition-transform duration-200 ease-[var(--ease-out)] active:scale-[0.99]"
          >
            <span className="relative">
              {site.email}
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 bg-correction transition-transform duration-[420ms] ease-[var(--ease-out)] group-hover:scale-x-100"
              />
            </span>
          </a>
        </Reveal>

        {/* El CV va aparte de los enlaces: es la acción que alguien
            evaluando el perfil viene a buscar, no un destino más. */}
        <Reveal delay={0.11} className="mt-10">
          <a
            href={contact.cvHref}
            download
            className="inline-flex items-center gap-2.5 rounded-sm border border-rule-strong bg-paper-raised px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-[transform,border-color] duration-200 ease-[var(--ease-out)] hover:border-correction active:scale-[0.97]"
          >
            {t(contact.cvLabel)}
            <span aria-hidden="true">↓</span>
          </a>
        </Reveal>

        <Reveal delay={0.16} className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          {links.map((link) => (
            <DrawLink key={link.label} href={link.href}>
              {link.label}
            </DrawLink>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
