"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { now } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

/**
 * Mostrar u ocultar la franja de actividad de GitHub.
 *
 * Ver docs/rediseno/PLAN.md §8: la actividad pública hoy son ocho
 * eventos, todos del propio repo del portafolio, el más reciente con
 * semanas de antigüedad. El trabajo real vive en un repo privado y no
 * aparece acá, así que mostrar esto tal cual diría lo contrario de lo
 * que pasó. El componente ya está armado — sólo hace falta:
 *
 *   1. decidir si se resuelve con GraphQL + token (incluye privado), y
 *   2. poner GITHUB_TOKEN de sólo lectura como env var en Vercel,
 *
 * y recién ahí conviene encender esto.
 */
const SHOW_GITHUB_ACTIVITY = false;

type ActivityItem = {
  id: string;
  repo: string;
  type: string;
  date: string;
};

/**
 * Lee los eventos públicos de GitHub. Client-side y sin autenticar:
 * es la versión de reemplazo rápido mientras no se resuelva el token.
 * Falla en silencio — si la API no responde, la sección de texto
 * sigue funcionando sola.
 */
function useGithubActivity(username: string, enabled: boolean) {
  const [items, setItems] = useState<ActivityItem[] | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let cancelado = false;

    fetch(`https://api.github.com/users/${username}/events/public?per_page=6`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((events: { id: string; repo: { name: string }; type: string; created_at: string }[]) => {
        if (cancelado) return;
        setItems(
          events.map((e) => ({ id: e.id, repo: e.repo.name, type: e.type, date: e.created_at })),
        );
      })
      .catch(() => {
        if (!cancelado) setItems([]);
      });

    return () => {
      cancelado = true;
    };
  }, [username, enabled]);

  return items;
}

const TYPE_LABEL: Record<string, { es: string; en: string }> = {
  PushEvent: { es: "Push a", en: "Pushed to" },
  CreateEvent: { es: "Creó", en: "Created" },
  PullRequestEvent: { es: "PR en", en: "PR on" },
  IssuesEvent: { es: "Issue en", en: "Issue on" },
};

function ActivityFeed() {
  const { t, lang } = useLang();
  const items = useGithubActivity("fermintaboada", SHOW_GITHUB_ACTIVITY);

  if (!SHOW_GITHUB_ACTIVITY || items === null) return null;
  if (items.length === 0) {
    return <p className="text-[13px] text-ink-3">{t(now.activityEmpty)}</p>;
  }

  return (
    <div className="mt-8 border-t border-rule pt-6">
      <p className="label">{t(now.activityLabel)}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.id} className="flex items-baseline gap-2 font-mono text-[12px] text-ink-2">
            <span className="text-ink-3">
              {(TYPE_LABEL[item.type] ?? { es: item.type, en: item.type })[lang]}
            </span>
            <span className="text-ink">{item.repo}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[11px] text-ink-3">{t(now.activityNote)}</p>
    </div>
  );
}

export function Now() {
  const { t, tl, lang } = useLang();
  // now.updated es date-only ("2026-09-21"). new Date() lo interpreta
  // como medianoche UTC, y toLocaleDateString sin timeZone lo vuelve a
  // pasar por la hora local del navegador: en cualquier huso detrás de
  // UTC (Argentina incluida) el día se corre uno para atrás. timeZone:
  // "UTC" mantiene los dos extremos en el mismo huso.
  const fecha = new Date(now.updated).toLocaleDateString(lang === "es" ? "es-AR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <section id="ahora" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell">
        <SectionHead number="04" eyebrow={t(now.eyebrow)} title={t(now.title)} />

        <Reveal delay={0.06} className="mt-10 max-w-2xl">
          <div className="rounded-sm border border-rule bg-paper-raised p-7">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-verified motion-safe:animate-pulse"
              />
              <p className="label">
                {t(now.updatedLabel)} · {fecha}
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {tl(now.body).map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-[15px] leading-relaxed text-ink-2">
                  {paragraph}
                </p>
              ))}
            </div>

            <ActivityFeed />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
