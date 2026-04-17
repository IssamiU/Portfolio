import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { Project } from "./ProjectCard";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const project = projects[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? -15 : 15,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* 3D perspective wrapper */}
      <div className="relative overflow-hidden rounded-2xl" style={{ perspective: "1200px" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Link
              to="/projetos/$projectId"
              params={{ projectId: project.id }}
              className="block group"
            >
              <div className="glass-strong rounded-2xl overflow-hidden">
                {/* Gradient header */}
                <div className="h-40 sm:h-52 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 relative flex items-center justify-center">
                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute top-4 right-6 w-16 h-16 rounded-full bg-primary/10 blur-xl"
                    animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-8 w-12 h-12 rounded-full bg-accent/10 blur-xl"
                    animate={{ y: [0, 10, 0], scale: [1, 0.9, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="text-center z-10">
                    <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">{project.semester}</span>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors px-4">
                      {project.title}
                    </h3>
                    {project.client && (
                      <p className="mt-1 text-sm text-muted-foreground">Cliente: {project.client}</p>
                    )}
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 sm:p-8">
                  <p className="text-muted-foreground leading-relaxed line-clamp-2 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
          aria-label="Anterior"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir para projeto ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
          aria-label="Próximo"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
