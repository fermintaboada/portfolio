"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null);

const STORAGE_KEY = "ft-theme";

/**
 * Se ejecuta antes de pintar para que no haya un destello del tema
 * equivocado. Va inline en el <head>.
 */
export const themeScript = `(function(){try{var s=localStorage.getItem("${STORAGE_KEY}");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=s==="light"||s==="dark"?s:(d?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") setTheme(current);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* sin persistencia, el cambio vale para esta visita */
      }
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return ctx;
}
