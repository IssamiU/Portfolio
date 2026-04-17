import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export interface Project {
  id: string;
  title: string;
  semester: string;
  description: string;
  technologies: string[];
  role: string;
  client?: string;
  year?: string;
  /** ISO date string (YYYY-MM-DD) usado para ordenação */
  date?: string;
  overview?: string;
  impact?: string;
  repoUrl?: string;
  // Mídia (todos opcionais — layout se adapta)
  thumbnail?: string;
  banner?: string;
  images?: string[];
  video?: string;
  pdf?: string;
  // Campos extras (preparado para expansão futura)
  status?: string;
  duration?: string;
  team?: string[];
  links?: { label: string; url: string }[];
  challenges?: string;
  testimonials?: { author: string; role?: string; text: string }[];
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projetos/$projectId"
      params={{ projectId: project.id }}
      className="block h-full"
    >
      <motion.div
        whileHover={{ y: -4 }}
        className="glass rounded-2xl overflow-hidden group flex flex-col h-full cursor-pointer"
      >
        {/* Thumbnail / placeholder */}
        <div className="h-48 relative overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="text-center z-10">
                <span className="font-display text-2xl font-bold gradient-text">
                  {project.semester}
                </span>
                {project.year && (
                  <p className="text-xs text-muted-foreground mt-1 font-mono">
                    {project.year}
                  </p>
                )}
              </div>
            </div>
          )}

          {project.status && (
            <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-background/70 text-primary border border-primary/30 backdrop-blur">
              {project.status}
            </span>
          )}
        </div>

        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.client && (
              <p className="text-xs text-primary/70 font-mono mt-1">
                Cliente: {project.client}
              </p>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}