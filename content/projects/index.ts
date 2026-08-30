import type { Project } from "../types";
import { upscaleLab } from "./upscale-lab";
import { boletoClick } from "./boleto-click";
import { qGolf } from "./q-golf";
import { barrasNomades } from "./barras-nomades";
import { petotatts } from "./petotatts";

/**
 * Orden de aparición en el índice del home: primero los sistemas
 * full-stack, después los encargos de cliente.
 */
export const projects: Project[] = [upscaleLab, boletoClick, qGolf, barrasNomades, petotatts];

/** Sólo los que tienen contenido real. Los borradores no se publican. */
export const publishedProjects = projects.filter((p) => !p.draft);

export function getProject(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}
