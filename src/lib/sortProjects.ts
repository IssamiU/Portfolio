import type { Project } from "../components/ProjectCard";

export function sortProjects(list: Project[]): Project[] {
  const collator = new Intl.Collator("pt-BR", { sensitivity: "base" });
  return [...list].sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    if (db !== da) return db - da;

    const t = collator.compare(a.title, b.title);
    if (t !== 0) return t;

    const c = collator.compare(a.client ?? "", b.client ?? "");
    if (c !== 0) return c;

    const techA = [...a.technologies].sort(collator.compare).join(",");
    const techB = [...b.technologies].sort(collator.compare).join(",");
    return collator.compare(techA, techB);
  });
}
