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

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true" focusable="false">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Sol lleno con rayos: inequívoco en cualquier tamaño, sin depender de una animación a medio camino para leerse. */
export function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10 1.8v2.1M10 16.1v2.1M18.2 10h-2.1M3.9 10H1.8M15.6 4.4l-1.5 1.5M5.9 14.1l-1.5 1.5M15.6 15.6l-1.5-1.5M5.9 5.9 4.4 4.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Luna en creciente, sólida: la forma que se reconoce de un vistazo, sin ambigüedad con un círculo cualquiera. */
export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.5 12.9A7.6 7.6 0 0 1 7.1 2.5a.6.6 0 0 0-.75-.78A8.2 8.2 0 1 0 18.25 13.65a.6.6 0 0 0-.75-.75Z" />
    </svg>
  );
}

/** Insignia de WhatsApp: el paquete de logos no trae la marca, se resuelve con el mismo lenguaje que LinkedIn. */
export function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="9" fill="#25D366" />
      <path
        fill="#fff"
        d="M10.02 4.4a5.58 5.58 0 0 0-4.77 8.46l-.62 2.74 2.82-.6a5.58 5.58 0 1 0 2.57-10.6Zm3.28 7.94c-.14.38-.8.72-1.1.76-.28.04-.64.06-1.03-.07a9 9 0 0 1-1.11-.41 6.9 6.9 0 0 1-2.6-2.3c-.27-.37-.55-.8-.63-1.28-.07-.44.05-.72.18-.9.11-.15.25-.25.36-.34.1-.08.18-.14.24-.24.07-.1.1-.19.05-.34-.05-.15-.44-1.06-.6-1.44-.15-.37-.31-.32-.43-.32h-.36c-.13 0-.33.05-.5.24-.17.19-.65.63-.65 1.55 0 .91.67 1.79.76 1.92.09.12 1.32 2.13 3.28 2.9.46.19.81.3 1.09.38.46.14.87.12 1.2.07.36-.05 1.13-.46 1.29-.9.16-.44.16-.82.11-.9-.05-.08-.17-.13-.35-.22Z"
      />
    </svg>
  );
}
