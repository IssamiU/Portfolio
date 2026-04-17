import { useMemo } from "react";
import { useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const { pathname } = useLocation();

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

  const particles = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      size: 4 + (i % 4) * 2,
      top: `${8 + ((i * 13) % 80)}%`,
      left: `${5 + ((i * 17) % 90)}%`,
      duration: 3.5 + (i % 5) * 1.1,
      delay: (i % 6) * 0.5,
      xOffset: i % 2 === 0 ? 18 : -18,
      yOffset: i % 3 === 0 ? 36 : -30,
      opacityMax: 0.35 + (i % 4) * 0.12,
      scaleMax: 1.3 + (i % 3) * 0.15,
      colorClass:
        i % 3 === 0
          ? "bg-primary/45"
          : i % 3 === 1
            ? "bg-accent/45"
            : "bg-white/25",
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-pattern opacity-70" />

      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full blur-2xl animate-pulse-glow"
        style={{
          top: orbA.y,
          left: orbA.x,
          background: `radial-gradient(circle, ${orbA.color}, transparent 70%)`,
        }}
        animate={{
          x: [0, 45, -20, 0],
          y: [0, 35, -25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[20%] -right-32 w-[430px] h-[430px] rounded-full blur-2xl animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, ${orbB.color}, transparent 70%)`,
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.06, 0.95, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute -bottom-44 left-1/3 w-[620px] h-[620px] rounded-full blur-2xl animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, ${orbA.color}, transparent 70%)`,
        }}
        animate={{
          x: [0, 30, -35, 0],
          y: [0, -25, 25, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-[65%] right-[12%] w-[220px] h-[220px] rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle, ${orbB.color}, transparent 72%)`,
        }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 18, -16, 0],
          opacity: [0.3, 0.5, 0.25, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[12%] left-[35%] w-[180px] h-[180px] rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle, ${orbA.color}, transparent 72%)`,
        }}
        animate={{
          x: [0, 14, -18, 0],
          y: [0, -16, 18, 0],
          opacity: [0.2, 0.4, 0.25, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.colorClass} blur-[1px]`}
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, particle.yOffset, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.15, particle.opacityMax, 0.15],
            scale: [1, particle.scaleMax, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute top-[18%] right-[18%] w-3 h-3 rounded-full bg-primary/40 blur-[2px]"
        animate={{
          y: [0, 32, 0],
          x: [0, 14, 0],
          opacity: [0.25, 0.8, 0.25],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[58%] left-[10%] w-2.5 h-2.5 rounded-full bg-accent/50 blur-[2px]"
        animate={{
          y: [0, -28, 0],
          x: [0, 12, 0],
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />

      <motion.div
        className="absolute top-[42%] right-[28%] w-2 h-2 rounded-full bg-white/30 blur-[2px]"
        animate={{
          y: [0, 24, 0],
          x: [0, -10, 0],
          opacity: [0.15, 0.55, 0.15],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />
    </div>
  );
}