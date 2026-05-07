import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Code2, Cpu } from "lucide-react";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { experiences, projects } from "../data/portfolio";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiência — Issami Umeoka" },
      {
        name: "description",
        content:
          "Trajetória profissional e experiências de Issami Umeoka como desenvolvedor.",
      },
      { property: "og:title", content: "Experiência — Issami Umeoka" },
      {
        property: "og:description",
        content:
          "Trajetória profissional e experiências de Issami Umeoka como desenvolvedor.",
      },
    ],
  }),
  component: ExperienciaPage,
});

function ExperienciaPage() {
  const currentExperience = experiences[0];

  const allExperienceTechs = Array.from(
    new Set(experiences.flatMap((exp) => exp.technologies))
  );

  const mainTechs = allExperienceTechs.slice(0, 3).join(", ");

  function getRelatedProjects(technologies: string[]) {
    return projects
      .map((project) => {
        const relatedTechs = project.technologies.filter((tech) =>
          technologies.includes(tech)
        );

        return {
          ...project,
          relatedTechs,
        };
      })
      .filter((project) => project.relatedTechs.length > 0)
      .sort((a, b) => b.relatedTechs.length - a.relatedTechs.length);
  }

  const summaryCards = [
    {
      title: "Experiências",
      value: `${experiences.length}+`,
      icon: Briefcase,
    },
    {
      title: "Projetos",
      value: `${projects.length}+`,
      icon: FolderGit2,
    },
    {
      title: "Tecnologias",
      value: `${allExperienceTechs.length}+`,
      icon: Code2,
    },
    {
      title: "Stack atual",
      value: mainTechs || currentExperience?.role || "Em evolução",
      icon: Cpu,
    },
  ];

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">
            Trajetória profissional
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text">
            Experiência
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Minha trajetória reúne experiências práticas, projetos acadêmicos e
            desenvolvimento de soluções envolvendo software, integração de
            sistemas e tecnologias aplicadas.
          </p>
        </div>

        <FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {summaryCards.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="glass relative overflow-hidden rounded-2xl border border-border/60 p-5 text-center"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

                  <div className="relative z-10 flex flex-col items-center">
                    <Icon className="mb-3 h-6 w-6 text-primary" />

                    <h3 className="text-xl sm:text-2xl font-bold gradient-text break-words">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeInView>

        {experiences.length === 0 ? (
          <FadeInView>
            <div className="glass-strong rounded-2xl p-10 sm:p-14 text-center max-w-2xl mx-auto">
              <motion.img
                src="/assets/images/gato.png"
                alt="Gato"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-30 h-30 mb-5 mx-auto"
              />

              <h2 className="font-display text-2xl font-bold gradient-text mb-3">
                Em busca da primeira oportunidade
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Atualmente buscando minha primeira oportunidade na área de
                desenvolvimento. Tenho me dedicado a projetos acadêmicos, estudos
                contínuos e construção de portfólio para chegar preparado nessa
                nova etapa.
              </p>
            </div>
          </FadeInView>
                ) : (
                  <div className="relative">
                    <div className="space-y-16">
                      {experiences.map((exp, i) => {
                        const relatedProjects = getRelatedProjects(exp.technologies);
                        const isLast = i === experiences.length - 1;

                        return (
                          <motion.div
                            key={`${exp.id}-${i}`}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative flex justify-center"
                          >
                            {!isLast && (
                              <div className="pointer-events-none absolute left-1/2 top-full z-0 hidden h-16 w-[5px] -translate-x-1/2 overflow-hidden rounded-full bg-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.35)] sm:block">
                                <div className="absolute inset-0 bg-primary/20" />

                                <motion.div
                                  animate={{ y: ["-100%", "160%"] }}
                                  transition={{
                                    duration: 2.4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.25,
                                  }}
                                  className="absolute left-0 top-0 h-10 w-full bg-gradient-to-b from-transparent via-primary to-transparent blur-[2px]"
                                />

                                <motion.div
                                  animate={{ y: ["-160%", "160%"] }}
                                  transition={{
                                    duration: 3.6,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.25 + 0.8,
                                  }}
                                  className="absolute left-0 top-0 h-8 w-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-70 blur-[2px]"
                                />
                              </div>
                            )}

                            <div className="relative z-20 w-full max-w-3xl rounded-[2rem] border border-primary/20 bg-background/70 p-[1px] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:border-primary/40">
                              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/20 opacity-50 blur-xl" />

                              <div className="relative overflow-visible rounded-[2rem] border border-white/10 bg-card/80 p-6 sm:p-8">
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

                                <div className="relative z-10">
                                  {i === 0 && (
                                    <div className="mb-5">
                                      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-green-400">
                                        Experiência atual
                                      </span>
                                    </div>
                                  )}

                                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                      <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                                        {exp.type ?? "Experiência"}
                                      </p>

                                      <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                                        {exp.project}
                                      </h3>

                                      <p className="mt-2 text-sm font-mono text-primary">
                                        {exp.role}
                                      </p>
                                    </div>

                                    {exp.duration && (
                                      <span className="w-fit min-w-[170px] max-w-full shrink-0 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-center text-xs font-mono leading-relaxed text-primary whitespace-nowrap">
                                        {exp.duration}
                                      </span>
                                    )}
                                  </div>

                                  {(exp.company || exp.location) && (
                                    <p className="mt-4 text-sm text-muted-foreground">
                                      {exp.company}
                                      {exp.company && exp.location ? " · " : ""}
                                      {exp.location}
                                    </p>
                                  )}

                                  <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                    {exp.impact}
                                  </p>

                                  <div className="mt-6 flex flex-wrap gap-2">
                                    {exp.technologies.map((t) => (
                                      <motion.span
                                        key={t}
                                        whileHover={{ y: -2, scale: 1.05 }}
                                        className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-[10px] font-mono text-foreground/80"
                                      >
                                        {t}
                                      </motion.span>
                                    ))}
                                  </div>

                                  {relatedProjects.length > 0 && (
                                    <div className="mt-8">
                                      <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                                        Projetos relacionados
                                      </p>

                                      <div className="flex flex-wrap gap-3">
                                        {relatedProjects.slice(0, 3).map((project) => (
                                          <div key={project.id} className="group relative">
                                            <Link
                                              to="/projetos"
                                              className="block rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono text-primary transition-all hover:scale-105 hover:bg-primary/20"
                                            >
                                              {project.title}
                                            </Link>

                                            <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 hidden w-64 -translate-x-1/2 rounded-xl border border-border bg-background/95 p-3 text-left shadow-xl backdrop-blur-xl group-hover:block">
                                              <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                                                Tecnologias em comum
                                              </p>

                                              <div className="flex flex-wrap gap-1.5">
                                                {project.relatedTechs.map((tech) => (
                                                  <span
                                                    key={tech}
                                                    className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary"
                                                  >
                                                    {tech}
                                                  </span>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}

        <FadeInView delay={0.25}>
          <div className="glass mt-16 rounded-2xl p-8 text-center sm:p-12">
            <h2 className="mb-4 font-display text-2xl font-bold gradient-text">
              Vamos trabalhar juntos?
            </h2>

            <p className="mx-auto mb-6 max-w-md text-muted-foreground">
              Estou sempre aberto a novas oportunidades e colaborações.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contato"
                className="glow-primary inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
              >
                Entre em contato
              </Link>

              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:scale-105"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </FadeInView>
      </div>
    </PageTransition>
  );
}