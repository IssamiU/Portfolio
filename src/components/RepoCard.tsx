import { motion } from "framer-motion";
import type { Repo } from "../lib/repos";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-5 flex flex-col gap-3 group transition-colors hover:border-primary/40"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
          {repo.name}
        </h3>
        <span
          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
            repo.provider === "github"
              ? "bg-foreground/5 text-foreground border-foreground/20"
              : "bg-accent/10 text-accent border-accent/30"
          }`}
        >
          {repo.provider}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
        {repo.description || "Sem descrição"}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-2 border-t border-border/50">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {repo.language}
        </span>
        <span className="font-mono">{formatDate(repo.updatedAt)}</span>
      </div>
    </motion.a>
  );
}
