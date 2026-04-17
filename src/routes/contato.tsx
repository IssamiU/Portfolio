import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { personalInfo } from "../data/portfolio";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Issami Umeoka" },
      { name: "description", content: "Entre em contato com Issami Umeoka." },
      { property: "og:title", content: "Contato — Issami Umeoka" },
      { property: "og:description", content: "Entre em contato com Issami Umeoka." },
    ],
  }),
  component: ContatoPage,
});

const contactLinks = [
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    handle: "in/issami-umeoka",
    description: "Conecte-se profissionalmente",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    handle: "@IssamiU",
    description: "Veja meus repositórios",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    href: `mailto:${personalInfo.email}`,
    handle: personalInfo.email,
    description: "Inicie uma conversa",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

function ContatoPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">Vamos conversar</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text">Contato</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Interessado em trabalhar junto? Entre em contato por qualquer uma das plataformas abaixo.
          </p>
        </div>

        <FadeInView>
          <div className="glass rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display font-semibold text-foreground">{personalInfo.location}</p>
              <p className="text-sm text-muted-foreground mt-0.5">Disponível para trabalho remoto e presencial na região</p>
            </div>
          </div>
        </FadeInView>

        {/* Boxes uniformes (mesmo tamanho, alinhados) */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, i) => (
            <FadeInView key={link.label} delay={i * 0.1}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-2xl p-6 h-full min-h-[220px] flex flex-col items-center justify-between text-center group cursor-pointer hover:glow-primary transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary">
                  {link.icon}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                  <p className="text-xs font-mono text-primary/80 mt-1 break-all">{link.handle}</p>
                </div>
                <span className="text-xs font-medium text-primary inline-flex items-center gap-1">
                  Acessar
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </motion.a>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3}>
          <div className="mt-16 text-center glass rounded-2xl p-10 sm:p-14">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 gradient-text">
              Pronto para criar algo incrível?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Estou disponível para projetos freelance, estágios e oportunidades de emprego.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 glow-primary"
              >
                Enviar E-mail
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-8 py-3.5 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:scale-105"
              >
                Baixar Currículo
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </PageTransition>
  );
}
