import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, publishedProjects } from "@/content/projects";
import { CaseView } from "@/components/case/CaseView";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline.es,
  };
}

export default async function ProjectPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = publishedProjects.findIndex((p) => p.slug === slug);
  const candidate = publishedProjects[(index + 1) % publishedProjects.length];
  const next = candidate && candidate.slug !== slug ? candidate : undefined;

  return (
    <>
      <Header compact />
      <CaseView project={project} next={next} />
      <Footer />
    </>
  );
}
