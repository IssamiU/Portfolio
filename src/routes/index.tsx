import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { personalInfo, skills, projects } from "../data/portfolio";
import { SkillBadge } from "../components/SkillBadge";
import { ProjectCarousel } from "../components/ProjectCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Issami Umeoka — Desenvolvedor de Software" },
      { name: "description", content: "Portfólio de Issami Umeoka, Desenvolvedor de Software Multiplataforma." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 sm:py-32 lg:py-40 text-center overflow-hidden">
        {/* Spinning orbit rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full border border-primary/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] rounded-full border border-accent/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-primary/60 blur-[2px]"
            animate={{
              x: [250, 0, -250, 0, 250],
              y: [0, 250, 0, -250, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Avatar glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 z-10"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="text-4xl sm:text-5xl font-display font-bold gradient-text">IU</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-mono text-primary tracking-widest uppercase mb-4 z-10"
        >
          Bem-vindo ao meu portfólio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl z-10"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl z-10"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 z-10"
        >
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 glow-primary"
          >
            Ver Projetos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:scale-105"
          >
            Contato
          </Link>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:scale-105"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar CV
          </a>
        </motion.div>
      </section>

      {/* Project Carousel */}
      <FadeInView>
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">Destaques</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text">Projetos Recentes</h2>
          </div>
          <ProjectCarousel projects={projects} />
        </section>
      </FadeInView>

      {/* Skills preview */}
      <FadeInView>
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
          <h2 className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8">
            Tecnologias & Ferramentas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <SkillBadge {...skill} />
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInView>

      {/* Quick about */}
      <FadeInView>
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
          <div className="glass rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 gradient-text">Sobre Mim</h2>
            <p className="text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
            <Link
              to="/sobre"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Saiba mais
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeInView>
    </PageTransition>
  );
}
