import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageTransition, FadeInView } from "../components/PageTransition";
import { RepoCard } from "../components/RepoCard";
import { FreeTimeCard } from "../components/FreeTimeCard";
import {
  githubUsername,
  gitlabUsername,
  featuredRepos,
  stackByCategory,
  workStyle,
} from "../data/portfolio";
import { fetchAllRepos, computeLanguageStats, type Repo } from "../lib/repos";

export const Route = createFileRoute("/atividade")({
  head: () => ({
    meta: [
      { title: "Atividade — Issami Umeoka" },
      { name: "description", content: "Repositórios, stack e atividade recente de Issami Umeoka." },
      { property: "og:title", content: "Atividade — Issami Umeoka" },
      { property: "og:description", content: "Repositórios, stack e atividade recente de Issami Umeoka." },
    ],
  }),
  component: AtividadePage,
});

function AtividadePage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchAllRepos(githubUsername, gitlabUsername)
      .then((data) => {
        if (cancelled) return;
        if (data.length === 0) setError("Não foi possível carregar repositórios públicos no momento.");
        setRepos(data);
      })
      .catch(() => !cancelled && setError("Erro ao carregar repositórios."))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const featured = repos.filter((r) =>
    featuredRepos.some((f) => f.provider === r.provider && f.name.toLowerCase() === r.name.toLowerCase()),
  );
  const recent = repos.slice(0, 6);
  const langs = computeLanguageStats(repos);
  const maxLang = langs[0]?.count ?? 1;

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">Painel pessoal</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text">
            Atividade
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Repositórios, stack e o que tenho construído no meu tempo livre.
          </p>
        </div>

        {/* Featured repos */}
        {featured.length > 0 && (
          <FadeInView>
            <section className="mb-14">
              <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
                Repositórios em destaque
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((r) => (
                  <RepoCard key={`${r.provider}-${r.name}`} repo={r} />
                ))}
              </div>
            </section>
          </FadeInView>
        )}

        {/* Recent repos */}
        <FadeInView delay={0.05}>
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold gradient-text">
                Repositórios recentes
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-foreground/60" /> GitHub
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent" /> GitLab
                </span>
              </div>
            </div>

            {loading && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="glass rounded-xl p-5 h-36 animate-pulse" />
                ))}
              </div>
            )}

            {!loading && error && (
              <div className="glass rounded-xl p-8 text-center">
                <p className="text-muted-foreground">{error}</p>
                <p className="text-xs text-muted-foreground/70 mt-2">
                  Você ainda pode visitar meus perfis diretamente nas redes.
                </p>
              </div>
            )}

            {!loading && !error && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recent.map((r) => (
                  <RepoCard key={`${r.provider}-${r.name}`} repo={r} />
                ))}
              </div>
            )}
          </section>
        </FadeInView>

        {/* Languages + Free time */}
        <div className="grid gap-6 lg:grid-cols-2 mb-14">
          <FadeInView delay={0.1}>
            <div className="glass rounded-2xl p-6 sm:p-8 h-full">
              <h2 className="font-display text-xl font-bold mb-5 gradient-text">
                Linguagens mais usadas
              </h2>
              {langs.length === 0 ? (
                <p className="text-sm text-muted-foreground">Sem dados disponíveis.</p>
              ) : (
                <ul className="space-y-3">
                  {langs.map((l, i) => (
                    <li key={l.language}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground font-medium">{l.language}</span>
                        <span className="text-muted-foreground font-mono text-xs">{l.count}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(l.count / maxLang) * 100}%` }}
                          transition={{ delay: i * 0.05, duration: 0.6 }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeInView>

          <FadeInView delay={0.15}>
            <FreeTimeCard />
          </FadeInView>
        </div>

        {/* Stack by category */}
        <FadeInView delay={0.2}>
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">Stack</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stackByCategory.map((cat) => (
                <div key={cat.category} className="glass rounded-xl p-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((it) => (
                      <span
                        key={it}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Work style */}
        <FadeInView delay={0.25}>
          <section>
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">Forma de trabalho</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(workStyle).map(([key, items]) => (
                <div key={key} className="glass rounded-xl p-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3 capitalize">
                    {key}
                  </h3>
                  <ul className="space-y-1.5">
                    {items.map((i) => (
                      <li key={i} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>
      </div>
    </PageTransition>
  );
}
