import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Hero } from "@/components/home/Hero";
import { Profile } from "@/components/home/Profile";
import { Stack } from "@/components/home/Stack";
import { WorkIndex } from "@/components/home/WorkIndex";
import { Now } from "@/components/home/Now";
import { Contact } from "@/components/home/Contact";

/**
 * Las seis secciones, ordenadas por lo que un reclutador busca primero:
 * 00 inicio · 01 proyectos · 02 stack · 03 perfil · 04 ahora · 05 contacto.
 * La prueba de trabajo va antes que la trayectoria; el stack queda en el
 * medio, ya respaldado por los proyectos que se acaban de ver.
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
        <WorkIndex />
        <Stack />
        <Profile />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
