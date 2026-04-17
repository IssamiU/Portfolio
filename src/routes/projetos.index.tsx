import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { projects } from "../data/portfolio";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsTable } from "../components/ProjectsTable";
import { sortProjects } from "../lib/sortProjects";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Issami Umeoka" },
      { name: "description", content: "Projetos desenvolvidos por Issami Umeoka durante sua formação acadêmica." },
      { property: "og:title", content: "Projetos — Issami Umeoka" },
      { property: "og:description", content: "Projetos desenvolvidos por Issami Umeoka." },
    ],
  }),
  component: ProjetosPage,
});

type ViewMode = "grid" | "table";

function ProjetosPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const sorted = useMemo(() => sortProjects(projects), []);

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">Meu trabalho</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text">Projetos</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Organizados automaticamente por data, nome, cliente e tecnologias.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="text-xs font-mono text-muted-foreground">
            {sorted.length} {sorted.length === 1 ? "projeto" : "projetos"} · ordenados por relevância
          </p>

          <div className="flex items-center gap-1 glass rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Visualização em grade"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`p-2 rounded-md transition-colors ${viewMode === "table" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Visualização em tabela"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((project, i) => (
              <FadeInView key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </FadeInView>
            ))}
          </div>
        ) : (
          <FadeInView>
            <ProjectsTable projects={sorted} />
          </FadeInView>
        )}
      </div>
    </PageTransition>
  );
}
