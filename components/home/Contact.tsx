"use client";

import { useLang } from "@/lib/i18n";
import { contact, site } from "@/content/site";
import { TechIcon } from "@/components/ui/TechIcon";
import { MailIcon, LinkedInMark, ArrowUpRightIcon, DownloadIcon } from "@/components/ui/Icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

/** Fila de contacto directo: icono, etiqueta, valor y flecha — como
    una línea de ficha, no como un botón. */
function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-4 border-t border-rule py-4 transition-colors duration-200 first:border-t-0"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-rule bg-paper-raised text-ink-2">
        {icon}
      </span>
      <span className="label w-16 shrink-0 sm:w-20">{label}</span>
      <span className="flex-1 truncate text-[14px] text-ink transition-colors duration-200 group-hover:text-correction">
        {value}
      </span>
      <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-ink-3 transition-[transform,color] duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-correction" />
    </a>
  );
}

export function Contact() {
  const { t } = useLang();

  const rows = [
    {
      icon: <MailIcon className="h-[14px] w-[14px]" />,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    site.github
      ? {
          icon: <TechIcon slug="github" className="h-[14px] w-[14px]" />,
          label: "GitHub",
          value: site.github.replace("https://", ""),
          href: site.github,
        }
      : null,
    site.linkedin
      ? {
          icon: <LinkedInMark className="h-[14px] w-[14px]" />,
          label: "LinkedIn",
          value: site.linkedin.replace("https://www.linkedin.com/in/", "").replace(/\/$/, ""),
          href: site.linkedin,
        }
      : null,
  ].filter(Boolean) as { icon: React.ReactNode; label: string; value: string; href: string }[];

  return (
    <section id="contacto" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell">
        <SectionHead number="05" eyebrow={t(contact.eyebrow)} title={t(contact.title)} />

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Izquierda: el llamado grande a escribir, y por qué. */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-md text-[15px] leading-relaxed text-ink-2">{t(contact.body)}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href={`mailto:${site.email}`}
                className="group mt-6 inline-block font-display-tight text-[clamp(1.5rem,4.4vw,2.8rem)] font-bold leading-none text-ink transition-transform duration-200 ease-[var(--ease-out)] active:scale-[0.99]"
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

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-lg border-l-2 border-correction pl-4 text-[14px] leading-relaxed text-ink-3">
                {t(contact.note)}
              </p>
            </Reveal>

            {/* El CV va aparte de los links: es la acción que alguien
                evaluando el perfil viene a buscar. */}
            <Reveal delay={0.1} className="mt-8">
              <a
                href={t(contact.cvHref)}
                download
                className="inline-flex items-center gap-2.5 rounded-sm border border-rule-strong bg-paper-raised px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-[transform,border-color] duration-200 ease-[var(--ease-out)] hover:border-correction active:scale-[0.97]"
              >
                <DownloadIcon className="h-[13px] w-[13px]" />
                {t(contact.cvLabel)}
              </a>
            </Reveal>
          </div>

          {/* Derecha: los datos directos, en filas — la misma ficha que
              el resto del sitio usa para presentar información. */}
          <RevealGroup className="lg:col-span-5" stagger={0.06}>
            <p className="label border-b border-rule pb-3">
              {t({ es: "Contacto directo", en: "Direct contact" })}
            </p>
            {rows.map((row) => (
              <RevealItem key={row.label}>
                <ContactRow {...row} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
