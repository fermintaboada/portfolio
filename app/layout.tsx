import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { ThemeProvider, themeScript } from "@/components/chrome/Theme";
import { SmoothScroll } from "@/components/chrome/SmoothScroll";
import { site } from "@/content/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz", "wdth"],
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Desarrollador full-stack`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portafolio de Fermín Taboada: sistemas completos en producción, con cada número rastreable hasta una query verificable.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable} ${splineMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain flex min-h-full flex-col">
        <ThemeProvider>
          <LangProvider>
            <SmoothScroll />
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
