import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { personalInfo, skills, projects, certificates } from "../data/portfolio";
import { SkillBadge } from "../components/SkillBadge";
import { motion } from "framer-motion";
import { Code, FolderGit2, ScrollText, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mim — Issami Umeoka" },
      {
        name: "description",
        content: "Conheça mais sobre Issami Umeoka, suas habilidades e formação.",
      },
      { property: "og:title", content: "Sobre Mim — Issami Umeoka" },
      {
        property: "og:description",
        content: "Conheça mais sobre Issami Umeoka, suas habilidades e formação.",
      },
    ],
  }),
  component: SobrePage,
});

const timeline = [
  {
    year: "2025 — 2027",
    title: "Desenvolvimento de Software Multiplataforma",
    place: "Fatec São José dos Campos",
    status: "Em andamento",
    description:
      "Formação tecnológica superior com foco em desenvolvimento multiplataforma, abrangendo web, mobile e backend.",
  },
  {
    year: "2021 — 2023",
    title: "Técnico em Informática",
    place: "Senac São José dos Campos",
    status: "Concluído",
    description:
      "Formação técnica em programação, desenvolvimento web, engenharia de software e banco de dados.",
  },
];

const stats = [
  { label: "Projetos", value: `${projects.length}+`, icon: FolderGit2 },
  { label: "Tecnologias", value: `${skills.length}+`, icon: Code },
  { label: "Certificados", value: `${certificates.length}+`, icon: ScrollText },
  { label: "Formação", value: `${timeline.length}x`, icon: GraduationCap },
];

function SobrePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Quem sou eu
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text">
            Sobre Mim
          </h1>
        </div>

        <FadeInView>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-start">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-4">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="text-3xl font-display font-bold gradient-text">
                    IU
                  </span>
                </div>
              </div>

              <h2 className="font-display text-xl font-bold text-foreground">
                {personalInfo.name}
              </h2>
              <p className="text-sm text-primary font-mono mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {personalInfo.location}
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Baixar Currículo
              </a>
            </motion.div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <h2 className="font-display text-xl font-bold mb-4 gradient-text">
                  Quem eu sou
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="font-display text-xl font-bold mb-4 gradient-text">
                  Minhas qualidades
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.traits}
                </p>
              </div>

              <div className="glass rounded-2xl p-8 border-l-4 border-primary/50">
                <h2 className="font-display text-xl font-bold mb-4 gradient-text">
                  Objetivo
                </h2>
                <p className="text-foreground leading-relaxed font-medium">
                  {personalInfo.goal}
                </p>
              </div>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <p className="mt-2 text-2xl font-display font-bold gradient-text">
                    {stat.value}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </FadeInView>

        <FadeInView delay={0.15}>
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-8 gradient-text">
              Trajetória
            </h2>

            <div className="relative space-y-0">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  <div className="glass rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-primary px-2 py-1 rounded-full bg-primary/10 w-fit">
                        {item.status}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {item.place} · {item.year}
                    </p>

                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-8 gradient-text">
              Habilidades Técnicas
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <SkillBadge {...skill} />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.25}>
          <div className="mt-16 glass rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl font-bold mb-4 gradient-text">
              Vamos trabalhar juntos?
            </h2>

            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 glow-primary"
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