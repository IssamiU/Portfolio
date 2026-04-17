export type Repo = {
  name: string;
  description: string;
  language: string;
  updatedAt: string;
  url: string;
  provider: "github" | "gitlab";
  stars?: number;
  featured?: boolean;
};

export async function fetchGithubRepos(username: string): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const data = await res.json();
    return (data as any[]).map((r) => ({
      name: r.name,
      description: r.description ?? "",
      language: r.language ?? "—",
      updatedAt: r.updated_at,
      url: r.html_url,
      provider: "github" as const,
      stars: r.stargazers_count,
    }));
  } catch (e) {
    console.error("GitHub fetch failed", e);
    return [];
  }
}

export async function fetchGitlabRepos(username: string): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://gitlab.com/api/v4/users/${encodeURIComponent(username)}/projects?per_page=100&order_by=last_activity_at`,
    );
    if (!res.ok) throw new Error(`GitLab ${res.status}`);
    const data = await res.json();
    return (data as any[]).map((r) => ({
      name: r.path,
      description: r.description ?? "",
      language: "—",
      updatedAt: r.last_activity_at,
      url: r.web_url,
      provider: "gitlab" as const,
      stars: r.star_count,
    }));
  } catch (e) {
    console.error("GitLab fetch failed", e);
    return [];
  }
}

export async function fetchAllRepos(
  githubUser: string,
  gitlabUser: string,
): Promise<Repo[]> {
  const [gh, gl] = await Promise.all([
    fetchGithubRepos(githubUser),
    fetchGitlabRepos(gitlabUser),
  ]);
  return [...gh, ...gl].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}

export function computeLanguageStats(repos: Repo[]): { language: string; count: number }[] {
  const map = new Map<string, number>();
  for (const r of repos) {
    if (!r.language || r.language === "—") continue;
    map.set(r.language, (map.get(r.language) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}
