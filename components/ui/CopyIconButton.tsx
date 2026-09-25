"use client";

import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { useCopyToClipboard } from "@/lib/useCopyToClipboard";
import { contact } from "@/content/site";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * El ícono de mail no puede "ir a ningún lado" como el resto (mailto:
 * depende de que el visitante tenga un cliente configurado, y en el
 * navegador de quien evalúa el perfil eso casi nunca pasa — el clic
 * no hacía nada visible). Copiar la dirección sí es una acción que
 * funciona siempre, con un aviso propio en vez de un alert nativo.
 */
export function CopyIconButton({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  const { t } = useLang();
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => copy(value)}
        aria-label={label}
        title={label}
        className="grid h-8 w-8 place-items-center rounded-full border border-rule bg-paper-raised transition-[transform,border-color] duration-150 ease-[var(--ease-out)] hover:border-rule-strong active:scale-[0.94]"
      >
        {icon}
      </button>
      <AnimatePresence>
        {copied && (
          <motion.span
            role="status"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-ink px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-paper shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]"
          >
            {t(contact.emailCopied)}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
