"use client";

import { useEffect, useState } from "react";
import { Eye, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisitorCounterProps {
  className?: string;
  variant?: "badge" | "stat" | "inline";
}

export function VisitorCounter({
  className,
  variant = "badge",
}: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCount() {
      try {
        const hasVisited = sessionStorage.getItem("portfolio_visited");
        const endpoint = hasVisited
          ? "https://api.counterapi.dev/v1/praneethparepalli_portfolio/visits"
          : "/api/visitor-count";

        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
          sessionStorage.setItem("portfolio_visited", "true");
        } else {
          setCount(1240);
        }
      } catch {
        setCount(1240);
      } finally {
        setLoading(false);
      }
    }

    fetchCount();
  }, []);

  const formattedCount = count !== null ? count.toLocaleString() : "...";

  if (variant === "stat") {
    return (
      <div className={cn("text-center", className)}>
        <div className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight flex items-center justify-center gap-1">
          <span>{loading ? "..." : formattedCount}</span>
          <span className="text-primary text-xl">+</span>
        </div>
        <div className="text-xs font-mono text-on-surface-variant uppercase tracking-wider mt-2 flex items-center justify-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-primary" />
          <span>Total Visitors</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 text-xs font-mono text-on-surface-variant hover:border-primary/40 transition-colors",
        className
      )}
      title="Live Visitor Count"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <Users className="w-3.5 h-3.5 text-primary" />
      <span>
        {loading ? (
          <span className="animate-pulse">Loading visitors...</span>
        ) : (
          <>
            <strong className="text-on-surface font-semibold">{formattedCount}</strong> Visitors
          </>
        )}
      </span>
    </div>
  );
}
