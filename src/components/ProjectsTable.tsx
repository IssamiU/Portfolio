import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Project } from "./ProjectCard";

export function ProjectsTable({ projects }: { projects: Project[] }) {
  const navigate = useNavigate();

  function goToProject(projectId: string) {
    navigate({
      to: "/projetos/$projectId",
      params: { projectId },
    });
  }

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground">
                Projeto
              </th>
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground hidden sm:table-cell">
                Cliente
              </th>
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground hidden md:table-cell">
                Tecnologias
              </th>
              <th className="text-left px-6 py-4 font-display font-semibold text-foreground">
                Data
              </th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <motion.tr
                key={project.id}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="border-b border-border/30 last:border-0 group cursor-pointer"
                onClick={() => goToProject(project.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goToProject(project.id);
                  }
                }}
                tabIndex={0}
                role="link"
                aria-label={`Abrir projeto ${project.title}`}
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {project.semester}
                  </p>
                </td>

                <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">
                  {project.client || "—"}
                </td>

                <td className="px-6 py-4 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                      >
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

                <td className="px-6 py-4 text-muted-foreground font-mono text-xs">
                  {project.year || "—"}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}