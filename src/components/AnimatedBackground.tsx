import { useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

/**
 * Fundo animado consistente em todas as telas, com leves variações por rota
 * para dar identidade sem quebrar a unidade visual.
 */
export function AnimatedBackground() {
  const { pathname } = useLocation();

  // Pequenas variações por rota
  const variant = pathname.startsWith("/projetos")
    ? "projects"
    : pathname.startsWith("/sobre")
    ? "about"
    : pathname.startsWith("/certificados")
    ? "certificates"
    : pathname.startsWith("/contato")
    ? "contact"
    : "home";

  const orbA = {
    home: { color: "oklch(0.72 0.19 195 / 18%)", x: -160, y: -160 },
    projects: { color: "oklch(0.65 0.20 280 / 16%)", x: -120, y: -200 },
    about: { color: "oklch(0.72 0.19 195 / 14%)", x: -200, y: -100 },
    certificates: { color: "oklch(0.70 0.18 150 / 14%)", x: -180, y: -160 },
    contact: { color: "oklch(0.65 0.20 280 / 16%)", x: -140, y: -180 },
  }[variant];

  const orbB = {
    home: { color: "oklch(0.65 0.20 280 / 14%)" },
    projects: { color: "oklch(0.72 0.19 195 / 14%)" },
    about: { color: "oklch(0.65 0.20 280 / 14%)" },
    certificates: { color: "oklch(0.75 0.15 60 / 12%)" },
    contact: { color: "oklch(0.72 0.19 195 / 14%)" },
  }[variant];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-70" />

      {/* Gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-float animate-pulse-glow"
        style={{
          top: orbA.y,
          left: orbA.x,
          background: `radial-gradient(circle, ${orbA.color}, transparent 70%)`,
        }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full animate-float-delayed animate-pulse-glow"
        style={{ background: `radial-gradient(circle, ${orbB.color}, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full animate-float animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, ${orbA.color}, transparent 70%)`,
          animationDelay: "4s",
        }}
      />

      {/* Floating shapes — discretas */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-2 h-2 rounded-full bg-primary/40"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[60%] left-[8%] w-1.5 h-1.5 rounded-full bg-accent/50"
        animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-[40%] right-[25%] w-1 h-1 rounded-full bg-primary/40"
        animate={{ y: [0, 20, 0], x: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}
