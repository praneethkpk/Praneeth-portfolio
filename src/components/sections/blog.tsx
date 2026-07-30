"use client";

import { useState } from "react";
import { BookOpen, Clock, ArrowRight, X, Tag, Sparkles } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export interface BlogPost {
  id: string;
  title: string;
  category: "Architecture" | "Spring Boot" | "Security" | "DevOps" | "Testing";
  readTime: string;
  date: string;
  excerpt: string;
  featured?: boolean;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "architecting-resilient-api-tests",
    title: "Architecting Resilient API Tests with REST Assured & Spring",
    category: "Architecture",
    readTime: "8 min read",
    date: "Jul 2026",
    featured: true,
    excerpt:
      "A comprehensive deep-dive into building a robust, maintainable API testing framework capable of handling complex state management, data generation, and concurrent execution in enterprise environments.",
    content: [
      "In modern enterprise microservices, API testing cannot be an afterthought. Relying solely on manual Postman collections leads to flaky builds and regression bugs sneaking into production.",
      "By combining REST Assured with Spring Boot's dependency injection and TestNG execution listeners, we can construct an automated framework that handles dynamic token injection, database state teardown, and parallel thread safety.",
      "Key patterns covered: 1) Builder pattern for request specification templates. 2) Jackson ObjectMapper for strict POJO serialization. 3) Database cleaning listeners using Spring Data JPA.",
    ],
  },
  {
    id: "optimizing-spring-boot-startup",
    title: "Optimizing Spring Boot Startup Time for Serverless",
    category: "Spring Boot",
    readTime: "5 min read",
    date: "Jun 2026",
    excerpt: "Techniques for utilizing GraalVM Native Image and Spring AOT to achieve sub-second cold starts.",
    content: [
      "Traditional JVM applications carry a memory footprint and cold-start penalty that can hinder serverless deployments on AWS Lambda or Google Cloud Run.",
      "With Spring Boot 3 and GraalVM Native Image compilation, Java applications compile directly to ahead-of-time (AOT) machine code, reducing startup times from 3.5 seconds to under 80 milliseconds.",
    ],
  },
  {
    id: "stateless-security-jwt",
    title: "Stateless Security: Mastering JWT in Microservices",
    category: "Security",
    readTime: "6 min read",
    date: "May 2026",
    excerpt: "Implementing robust authentication and authorization flows across distributed systems without shared session state.",
    content: [
      "Session-based authentication scales poorly when horizontally scaling microservices. JSON Web Tokens (JWT) provide a stateless, cryptographic mechanism for identity verification.",
      "This post walks through implementing custom `OncePerRequestFilter` in Spring Security 6, parsing claims, and handling token expiration with refresh token rotation.",
    ],
  },
  {
    id: "docker-multi-stage-builds",
    title: "Docker Multi-Stage Builds for Java Developers",
    category: "DevOps",
    readTime: "4 min read",
    date: "Apr 2026",
    excerpt: "Keep your production images lean and secure by separating the build environment from the runtime environment.",
    content: [
      "Shipped full JDK images to production creates bloat (800MB+) and increases security attack vectors.",
      "Using Docker multi-stage builds allows compiling with Maven in stage 1, then copying only the executable JAR to a minimal Eclipse Temurin JRE Alpine runtime in stage 2 — dropping image size to under 180MB.",
    ],
  },
  {
    id: "flaky-tests-no-more",
    title: "Flaky Tests No More: Selenium Best Practices",
    category: "Testing",
    readTime: "7 min read",
    date: "Mar 2026",
    excerpt: "Advanced synchronization strategies and Page Object Model patterns for ultra-stable UI automation.",
    content: [
      "The single biggest killer of automation test suites is test flakiness caused by `Thread.sleep()` and hardcoded delays.",
      "By implementing explicit `WebDriverWait` expected conditions, custom FluentWait polling, and clean Page Object Model encasement, test suites achieve 99%+ execution stability across CI pipelines.",
    ],
  },
];

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Architecture", "Spring Boot", "Security", "DevOps", "Testing"];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 md:py-xl bg-surface-container-lowest border-y border-outline-variant/10 relative">
      <div className="max-w-container-max mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                Technical Articles
              </div>
              <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight leading-tight">
                Insights & Engineering Notes
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-xl">
                Technical deep dives into Java, Spring Boot, Security, and High-Performance Automation Testing.
              </p>
            </div>
          </Reveal>

          {/* Filter Category Tabs */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200",
                    activeCategory === cat
                      ? "bg-primary text-on-primary font-bold shadow-md"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Posts Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <StaggerItem key={post.id} className={post.featured ? "md:col-span-2" : ""}>
              <div
                onClick={() => setSelectedPost(post)}
                className="glass-panel glass-border-gradient p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between group hover:border-primary/40 cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/20 text-[11px] font-mono uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-on-surface-variant/60 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs md:text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between text-xs font-mono text-primary font-bold">
                  <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-on-surface-variant/50 font-normal">{post.date}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Modal Full Article Reader */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md animate-fade-in-up">
            <div className="glass-panel max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative border border-outline-variant/40 shadow-2xl">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 border-b border-outline-variant/15 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono uppercase">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs font-mono text-on-surface-variant/60 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface">{selectedPost.title}</h3>
                <span className="text-xs font-mono text-on-surface-variant/50">{selectedPost.date}</span>
              </div>

              <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                {selectedPost.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant/15 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 bg-primary text-on-primary rounded-xl text-xs font-mono font-bold uppercase tracking-wider"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
