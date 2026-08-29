import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Hero } from "@/components/home/Hero";
import { WorkIndex } from "@/components/home/WorkIndex";
import { Principles } from "@/components/home/Principles";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WorkIndex />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
