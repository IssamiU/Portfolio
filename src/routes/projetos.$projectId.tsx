import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { MediaCarousel, buildProjectMedia } from "../components/MediaCarousel";
import { projects } from "../data/portfolio";
import { sortProjects } from "../lib/sortProjects";
import { motion } from "framer-motion";

export const Route = createFileRoute("/projetos/$projectId")({
  head: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    const ogImage = project?.banner ?? project?.thumbnail;
    return {
      meta: [
        { title: project ? `${project.title} — Issami Umeoka` : "Projeto não encontrado" },
        { name: "description", content: project?.description ?? "" },
        { property: "og:title", content: project?.title ?? "" },
        { property: "og:description", content: project?.description ?? "" },
        ...(ogImage
          ? [
              { property: "og:image", content: ogImage },
              { name: "twitter:image", content: ogImage },
            ]
          : []),
      ],
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-display gradient-text">Projeto não encontrado</h1>
        <p className="mt-2 text-muted-foreground">
          O projeto que você procura não existe ou foi removido.
        </p>
        <Link
          to="/projetos"
          className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium"
        >
          ← Voltar aos projetos
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground">Erro ao carregar projeto</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
});

function ProjectDetailPage() {
  const project: import("../components/ProjectCard").Project = Route.useLoaderData();

  const { prev, next } = useMemo(() => {
    const sorted = sortProjects(projects);
    const idx = sorted.findIndex((p) => p.id === project.id);
    return {
      prev: idx > 0 ? sorted[idx - 1] : null,
      next: idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : null,
    };
  }, [project.id]);

  const media = useMemo(() => buildProjectMedia(project), [project]);

  // Info rápida em linha (estilo referência: CLIENTE / PAPEL / TECNOLOGIA / ANO)
  const quickInfo: { label: string; value: string }[] = [
    { label: "Cliente", value: project.client ?? "—" },
    { label: "Papel", value: project.role },
    {
      label: "Tecnologias",
      value:
        project.technologies.slice(0, 2).join(" & ") +
        (project.technologies.length > 2 ? ` +${project.technologies.length - 2}` : ""),
    },
    { label: "Ano", value: project.year ?? "—" },
  ];

  return (
    <PageTransition>
      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Voltar */}
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <span aria-hidden>←</span> Voltar aos projetos
        </Link>

        {/* Título XL — estilo referência */}
        <FadeInView>
          <h1 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-primary text-[clamp(2.5rem,9vw,7rem)]">
            {project.title}
          </h1>
        </FadeInView>

        {/* Linha divisória + info grid em uppercase */}
        <FadeInView delay={0.05}>
          <div className="mt-12 border-t border-border/60 pt-8">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8">
              {quickInfo.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {item.label}
                  </dt>
                  <dd className="text-sm sm:text-base font-display font-semibold uppercase tracking-wide text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeInView>

        {/* Mídia principal — carrossel unificado */}
        {media.length > 0 ? (
          <FadeInView delay={0.1}>
            <div className="mt-14">
              <MediaCarousel items={media} title={project.title} />
            </div>
          </FadeInView>
        ) : (
          <FadeInView delay={0.1}>
            <div className="mt-14 aspect-video rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 border border-border/40 flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(800px circle at 30% 30%, oklch(0.72 0.19 195 / 18%), transparent 60%)",
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <span className="font-display text-3xl gradient-text relative z-10">
                {project.semester}
              </span>
            </div>
          </FadeInView>
        )}

        {/* Visão Geral + Meu Impacto — layout 2 colunas (label / texto) */}
        <div className="mt-20 space-y-16">
          {project.overview && (
            <FadeInView delay={0.05}>
              <DetailRow label="Visão geral">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </DetailRow>
            </FadeInView>
          )}

          <FadeInView delay={0.1}>
            <DetailRow label="Sobre o projeto">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </DetailRow>
          </FadeInView>

          {project.impact && (
            <FadeInView delay={0.15}>
              <DetailRow label="Meu impacto">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.impact}
                </p>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2.5 rounded-full border-2 border-primary px-6 py-3 text-xs font-mono uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-[1.02]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Ver repositório
                  </a>
                )}
              </DetailRow>
            </FadeInView>
          )}

          {project.challenges && (
            <FadeInView delay={0.18}>
              <DetailRow label="Desafios e soluções">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </DetailRow>
            </FadeInView>
          )}

          {/* Stack completa */}
          <FadeInView delay={0.2}>
            <DetailRow label="Stack completa">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </DetailRow>
          </FadeInView>

          {/* Equipe / metadados extras */}
          {(project.team?.length || project.status || project.duration) && (
            <FadeInView delay={0.22}>
              <DetailRow label="Detalhes">
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  {project.status && (
                    <Meta k="Status" v={project.status} />
                  )}
                  {project.duration && (
                    <Meta k="Duração" v={project.duration} />
                  )}
                  {project.semester && (
                    <Meta k="Semestre" v={project.semester} />
                  )}
                  {project.team && project.team.length > 0 && (
                    <div className="sm:col-span-2">
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Equipe
                      </p>
                      <ul className="text-foreground space-y-1">
                        {project.team.map((m) => (
                          <li key={m}>· {m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </DetailRow>
            </FadeInView>
          )}

          {/* Links extras */}
          {project.links && project.links.length > 0 && (
            <FadeInView delay={0.24}>
              <DetailRow label="Links">
                <div className="flex flex-wrap gap-3">
                  {project.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-wider text-foreground hover:border-primary/50 hover:text-primary transition-all"
                    >
                      🔗 {l.label}
                    </a>
                  ))}
                </div>
              </DetailRow>
            </FadeInView>
          )}

          {/* Depoimentos */}
          {project.testimonials && project.testimonials.length > 0 && (
            <FadeInView delay={0.26}>
              <DetailRow label="Depoimentos">
                <div className="space-y-6">
                  {project.testimonials.map((t, i) => (
                    <blockquote
                      key={i}
                      className="border-l-2 border-primary/40 pl-5 text-muted-foreground italic"
                    >
                      "{t.text}"
                      <footer className="not-italic text-xs mt-2 text-foreground">
                        — {t.author}
                        {t.role && (
                          <span className="text-muted-foreground"> · {t.role}</span>
                        )}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </DetailRow>
            </FadeInView>
          )}
        </div>

        {/* Prev / Next nav */}
        <FadeInView delay={0.3}>
          <div className="mt-24 pt-10 border-t border-border/60 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to="/projetos/$projectId"
                params={{ projectId: prev.id }}
                className="group rounded-2xl p-5 border border-border/60 hover:border-primary/50 transition-all"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  ← Anterior
                </p>
                <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to="/projetos/$projectId"
                params={{ projectId: next.id }}
                className="group rounded-2xl p-5 border border-border/60 hover:border-primary/50 transition-all text-right"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Próximo →
                </p>
                <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </FadeInView>
      </article>
    </PageTransition>
  );
}

/** Linha de detalhe estilo editorial: label uppercase à esquerda, conteúdo à direita */
function DetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
      <h2 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-primary md:pt-1">
        {label}
      </h2>
      <div className="max-w-3xl">{children}</div>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">
        {k}
      </p>
      <p className="text-foreground font-medium">{v}</p>
    </div>
  );
}
