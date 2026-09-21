import { notFound } from "next/navigation";
import { getProject, publishedProjects } from "@/content/projects";
import { CaseView } from "@/components/case/CaseView";
import { ProjectModal } from "@/components/case/ProjectModal";

/**
 * Ruta interceptada: sólo entra en juego cuando se navega a
 * /proyectos/[slug] desde dentro del sitio (el link de una tarjeta,
 * por ejemplo). Una carga directa de esa URL cae en la página real,
 * app/proyectos/[slug]/page.tsx — esta versión es exclusivamente
 * la vista expandida sobre el home.
 */
export default async function InterceptedProjectPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = publishedProjects.findIndex((p) => p.slug === slug);
  const candidate = publishedProjects[(index + 1) % publishedProjects.length];
  const next = candidate && candidate.slug !== slug ? candidate : undefined;

  return (
    <ProjectModal>
      <CaseView project={project} next={next} />
    </ProjectModal>
  );
}
