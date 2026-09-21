import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Hero } from "@/components/home/Hero";
import { Profile } from "@/components/home/Profile";
import { Stack } from "@/components/home/Stack";
import { WorkIndex } from "@/components/home/WorkIndex";
import { Now } from "@/components/home/Now";
import { Contact } from "@/components/home/Contact";

/**
 * Las seis secciones, en el orden de docs/rediseno/PLAN.md §4:
 * 00 inicio · 01 perfil · 02 stack · 03 proyectos · 04 ahora · 05 contacto.
 * Principles se retira: sus cinco criterios ya viven como decisiones
 * dentro de cada caso, y repetirlos acá era lo que más inflaba el texto
 * sin agregar nada nuevo.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Profile />
        <Stack />
        <WorkIndex />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
