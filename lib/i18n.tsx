"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

/** Un texto en los dos idiomas. El español es la fuente; el inglés, la traducción. */
export type L = { es: string; en: string };
/** Una lista de textos en los dos idiomas. */
export type LL = { es: string[]; en: string[] };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (v: L) => string;
  tl: (v: LL) => string[];
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ft-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {
      /* almacenamiento bloqueado: se queda en español */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* sin persistencia, pero el cambio de idioma igual funciona */
    }
  }, []);

  const t = useCallback((v: L) => v[lang], [lang]);
  const tl = useCallback((v: LL) => v[lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, tl }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LangProvider>");
  return ctx;
}
