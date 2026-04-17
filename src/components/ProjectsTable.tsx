import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Project } from "./ProjectCard";

export function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground">Projeto</th>
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground hidden sm:table-cell">Cliente</th>
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground hidden md:table-cell">Tecnologias</th>
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground">Data</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <motion.tr
                key={project.id}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="border-b border-border/30 last:border-0 group"
              >
                <td className="px-6 py-4">
                  <Link to="/projetos/$projectId" params={{ projectId: project.id }} className="block">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{project.semester}</p>
                  </Link>
                </td>
                <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{project.client || "—"}</td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{project.year || "—"}</td>
                <td className="px-6 py-4">
                  <Link
                    to="/projetos/$projectId"
                    params={{ projectId: project.id }}
                    className="text-primary hover:text-primary/80 text-xs font-medium transition-colors"
                  >
                    Ver →
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
