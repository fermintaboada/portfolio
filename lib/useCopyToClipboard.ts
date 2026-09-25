"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Copia texto al portapapeles y avisa por un rato. La Clipboard API
 * pide contexto seguro (https o localhost) y falla en navegadores
 * viejos o iframes restringidos — el textarea oculto es el fallback
 * que funciona en cualquiera de esos casos.
 */
export function useCopyToClipboard(resetDelay = 1800) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const el = document.createElement("textarea");
        el.value = text;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
    },
    [resetDelay],
  );

  return { copied, copy };
}
