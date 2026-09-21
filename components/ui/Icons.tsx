/**
 * Iconos genéricos de interfaz y el monograma de LinkedIn.
 *
 * LinkedIn no tiene logo en la versión instalada de simple-icons, así
 * que se resuelve con una insignia "in" en el mismo lenguaje visual que
 * las píldoras de tecnología: mono, borde, sin inventar una marca que
 * no está disponible.
 */

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.2 5.3 10 10.4l6.8-5.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="18" height="18" rx="3" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M6.9 8.2H4.4v7.1h2.5V8.2ZM5.65 7.1c.85 0 1.38-.56 1.38-1.27-.02-.72-.53-1.27-1.36-1.27-.83 0-1.38.55-1.38 1.27 0 .7.53 1.27 1.34 1.27h.02ZM8.35 15.3h2.5v-3.97c0-.21.02-.42.08-.58.17-.42.56-.86 1.22-.86.86 0 1.2.65 1.2 1.61v3.8h2.5v-4.08c0-2.3-1.23-3.38-2.86-3.38-1.34 0-1.93.74-2.27 1.25h.02V8.2h-2.5c.03.7 0 7.1 0 7.1Z"
      />
    </svg>
  );
}

export function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true" focusable="false">
      <path d="M8 2v8.2M4.6 7.4 8 10.8l3.4-3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 12.2v.9c0 .77.63 1.4 1.4 1.4h8.2c.77 0 1.4-.63 1.4-1.4v-.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true" focusable="false">
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
