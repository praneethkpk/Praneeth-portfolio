"use client";

import { useEffect, useState } from "react";
import { GitBranch, Star, GitFork, ExternalLink, Code2, RefreshCw } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { socialLinks } from "@/lib/constants";

interface RepoData {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const fallbackRepos: RepoData[] = [
  {
    id: 1,
    name: "task-manager-backend",
    description: "High-performance Spring Boot REST API featuring JWT authentication, role-based access control, and Docker deployment.",
    html_url: `${socialLinks.github}/task-manager-backend`,
    stargazers_count: 5,
    forks_count: 2,
    language: "Java",
    updated_at: "2026-07-28",
  },
  {
    id: 2,
    name: "banking-ui-automation",
    description: "End-to-end BDD automation framework using Java, Selenium WebDriver, TestNG, and Cucumber Page Object Model.",
    html_url: `${socialLinks.github}/banking-ui-automation`,
    stargazers_count: 4,
    forks_count: 1,
    language: "Java",
    updated_at: "2026-07-20",
  },
  {
    id: 3,
    name: "rest-assured-api-tests",
    description: "REST API testing suite with REST Assured, Postman payload validation, and automated JSON assertions.",
    html_url: `${socialLinks.github}/rest-assured-api-tests`,
    stargazers_count: 3,
    forks_count: 1,
    language: "Java",
    updated_at: "2026-07-15",
  },
];

export function GithubActivitySection() {
  const [repos, setRepos] = useState<RepoData[]>(fallbackRepos);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchGithubRepos() {
      try {
        const res = await fetch("https://api.github.com/users/praneethkpk/repos?sort=updated&per_page=6");
        if (res.ok) {
          const data: RepoData[] = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data.slice(0, 3));
          }
        }
      } catch {
        // Silently fallback to structured mock data if API rate-limited
      } finally {
        setLoading(false);
      }
    }
    fetchGithubRepos();
  }, []);

  return (
    <section id="github" className="py-20 md:py-xl relative">
      <div className="max-w-container-max mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
                <GitBranch className="w-3.5 h-3.5" />
                Live Open Source Data
              </div>
              <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight leading-tight">
                GitHub Repositories & Activity
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-xl">
                Open-source code, automated testing frameworks, and backend repositories.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant/30 hover:border-primary/50 text-xs font-mono text-primary hover:bg-primary/10 transition-colors"
            >
              <span>View All Repos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Reveal>
        </div>

        {/* Repos Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <StaggerItem key={repo.id}>
              <div className="glass-panel glass-border-gradient p-6 rounded-2xl h-full flex flex-col justify-between group hover:border-primary/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold truncate">
                      <Code2 className="w-4 h-4 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors p-1"
                      title="Open on GitHub"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">
                    {repo.description || "No description provided."}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between text-xs font-mono text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span>{repo.language || "Java"}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-primary" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
