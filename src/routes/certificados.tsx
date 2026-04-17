import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { certificates } from "../data/portfolio";
import { motion } from "framer-motion";

export const Route = createFileRoute("/certificados")({
  head: () => ({
    meta: [
      { title: "Certificados — Issami Umeoka" },
      { name: "description", content: "Certificações e cursos concluídos por Issami Umeoka." },
      { property: "og:title", content: "Certificados — Issami Umeoka" },
      { property: "og:description", content: "Certificações e cursos concluídos por Issami Umeoka." },
    ],
  }),
  component: CertificadosPage,
});

function CertificadosPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            Conquistas
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text">
            Certificados
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Certificações e cursos que complementam minha formação acadêmica.
          </p>
        </div>

        <div className="space-y-6">
          {certificates.map((cert, i) => (
            <FadeInView key={cert.id} delay={i * 0.1}>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-8 space-y-4 cursor-pointer transition-all hover:border hover:border-primary/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-primary mt-1">{cert.issuer}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {cert.hours && (
                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                          {cert.hours}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                </motion.div>
              </a>
            </FadeInView>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              Em breve novos certificados serão adicionados.
            </p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}