import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { experiences } from "../data/portfolio";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiência — Issami Umeoka" },
      { name: "description", content: "Trajetória profissional e experiências de Issami Umeoka como desenvolvedor." },
      { property: "og:title", content: "Experiência — Issami Umeoka" },
      { property: "og:description", content: "Trajetória profissional e experiências de Issami Umeoka como desenvolvedor." },
    ],
  }),
  component: ExperienciaPage,
});

function ExperienciaPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">Trajetória profissional</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text">
            Experiência
          </h1>
        </div>

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
                Atualmente buscando minha primeira oportunidade na área de desenvolvimento.
                Tenho me dedicado a projetos acadêmicos, estudos contínuos e construção de portfólio
                para chegar preparado nessa nova etapa.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/projetos"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 glow-primary"
                >
                  Ver projetos
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:scale-105"
                >
                  Vamos conversar
                </Link>
              </div>
            </div>
          </FadeInView>
        ) : (
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent sm:-translate-x-px" />
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-12 sm:pl-0 sm:w-1/2 pb-10 ${
                  i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:ml-auto"
                }`}
              >
                <div
                  className={`absolute top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background ${
                    "left-2.5 sm:left-auto " +
                    (i % 2 === 0 ? "sm:right-[-6px]" : "sm:left-[-6px]")
                  }`}
                />
                <div className="glass rounded-xl p-6">
                  <h3 className="font-display font-semibold text-foreground">{exp.project}</h3>
                  <p className="text-sm text-primary font-mono mt-1">{exp.role}</p>
                  {exp.company && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.company}
                      {exp.duration ? ` · ${exp.duration}` : ""}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{exp.impact}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
