"use client";

import { useLang } from "@/lib/i18n";
import { footerNote, site } from "@/content/site";

export function Footer() {
  const { tl } = useLang();
  const notes = tl(footerNote);

  return (
    <footer className="border-t border-rule py-10">
      <div className="shell flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-mono text-[12px] text-ink-3">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="max-w-sm space-y-1 sm:text-right">
          {notes.map((note) => (
            <p key={note} className="font-mono text-[12px] leading-relaxed text-ink-3">
              {note}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
