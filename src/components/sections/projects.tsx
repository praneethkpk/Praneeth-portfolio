"use client";

import { useState } from "react";
import { ExternalLink, Code2, ShieldCheck, Database, Cpu, ArrowRight, X, Layers, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  category: "Backend" | "Testing & Automation" | "Full Stack";
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  architecture?: {
    client?: string;
    controller?: string;
    service?: string;
    repository?: string;
    database?: string;
  };
  keyFeatures: string[];
}

export const projectsData: Project[] = [
  {
    id: "task-manager-backend",
    title: "Task Manager Application",
    category: "Full Stack",
    subtitle: "High-Performance Spring Boot & React REST API",
    description:
      "Full-stack enterprise application featuring JWT authentication, role-based access control, layered architecture, and Docker deployment.",
    longDescription:
      "A complete task management solution engineered with Spring Boot on the backend and React on the frontend. Designed following strict Service-Oriented Architecture (SOA), isolating concerns across Controller, Service, DTO, and Repository layers. Built with production-grade security including BCrypt password hashing and stateless JWT token authentication.",
    techStack: ["Java 17", "Spring Boot", "React", "MySQL", "JWT Auth", "Docker", "Hibernate/JPA"],
    githubUrl: "https://github.com/praneethkpk",
    highlights: ["JWT Stateless Auth", "Layered Architecture", "Dockerized Container", "Role-Based Access Control"],
    architecture: {
      client: "React SPA Client",
      controller: "TaskController & AuthController",
      service: "TaskService & UserService",
      repository: "TaskRepository (Spring Data JPA)",
      database: "MySQL Relational DB",
    },
    keyFeatures: [
      "Stateless JWT Authentication & Refresh Tokens",
      "Role-Based Access Control (USER vs ADMIN privileges)",
      "Layered REST API architecture with DTO mapping",
      "Bean Validation for request payload integrity",
      "Containerized deployment via Docker and Docker Compose",
    ],
  },
  {
    id: "banking-ui-automation",
    title: "Banking Website UI Automation",
    category: "Testing & Automation",
    subtitle: "End-to-End BDD Framework with Selenium & Cucumber",
    description:
      "Robust UI automation test suite using Java, Selenium WebDriver, TestNG, and Cucumber for complex banking workflows.",
    longDescription:
      "Designed an automated testing suite built on top of the Page Object Model (POM) pattern to maximize maintainability and reduce test flakiness. Incorporates BDD Gherkin syntax via Cucumber for human-readable acceptance criteria, integrated with TestNG DataProviders for multi-data execution.",
    techStack: ["Java", "Selenium WebDriver", "TestNG", "Cucumber (BDD)", "Page Object Model", "Maven"],
    githubUrl: "https://github.com/praneethkpk",
    highlights: ["Page Object Model", "Cucumber BDD Scenarios", "Data-Driven Execution", "Custom HTML Reports"],
    keyFeatures: [
      "Page Object Model (POM) pattern for UI component abstraction",
      "Cucumber Gherkin feature files for BDD requirement traceability",
      "Data-driven test execution with TestNG DataProviders",
      "Explicit waits & synchronization strategies for stability",
      "Automated screenshot capture on failure",
    ],
  },
  {
    id: "rest-api-automation",
    title: "REST API Automation Framework",
    category: "Testing & Automation",
    subtitle: "Automated API Test Suite with REST Assured & Postman",
    description:
      "Enterprise API testing suite covering CRUD endpoints, schema validation, and JSON response assertions.",
    longDescription:
      "A comprehensive REST API testing framework utilizing REST Assured and Java. Automates HTTP methods (GET, POST, PUT, DELETE), validates status codes, verifies JSON schemas against contract specifications, and executes seamlessly within CI/CD pipelines.",
    techStack: ["Java", "REST Assured", "Postman", "JUnit 5 / TestNG", "JSON Schema Validator", "Git"],
    githubUrl: "https://github.com/praneethkpk",
    highlights: ["CRUD API Validation", "JSON Schema Verification", "CI/CD Pipeline Ready", "Environment Agnostic"],
    keyFeatures: [
      "Automated end-to-end verification of REST endpoints",
      "Strict JSON schema validation against API contracts",
      "Dynamic payload generation and response parsing",
      "Parametrized test runs across multiple environments",
      "Integration with automated build scripts",
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Backend", "Testing & Automation", "Full Stack"];

  const filteredProjects =
    filterCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filterCategory);

  return (
    <section
      id="projects"
      className="py-20 md:py-xl bg-surface-container-lowest border-y border-outline-variant/10 relative"
    >
      <div className="max-w-container-max mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
                <Code2 className="w-3.5 h-3.5" />
                Featured Work
              </div>
              <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight leading-tight">
                Case Studies & Projects
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-xl">
                Real software applications and testing frameworks demonstrating backend architecture & quality engineering.
              </p>
            </div>
          </Reveal>

          {/* Filter Pills */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200",
                    filterCategory === cat
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

        {/* Projects Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <div className="glass-panel glass-border-gradient p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                {/* Glow Backdrop */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors pointer-events-none" />

                <div>
                  {/* Category & Links */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-xs font-mono font-medium">
                      {project.category}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface-variant hover:text-primary transition-colors p-1"
                        aria-label="View Code on GitHub"
                      >
                        <Code2 className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-1 font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-primary/80 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs md:text-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant border border-outline-variant/30 px-2 py-0.5 rounded bg-surface-container/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-primary border border-primary/20 px-2 py-0.5 rounded bg-primary/5">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 text-xs font-mono font-bold uppercase tracking-wider text-primary hover:bg-primary/10 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  Explore Details
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Modal Deep-Dive Case Study */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md animate-fade-in-up">
            <div className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative border border-outline-variant/40 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-xs font-mono font-medium">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-on-surface mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-primary mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6 space-y-3">
                <h4 className="text-xs font-mono uppercase text-on-surface-variant tracking-wider font-bold">
                  Overview
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Architecture diagram if present */}
              {selectedProject.architecture && (
                <div className="mb-6 p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/60">
                  <h4 className="text-xs font-mono uppercase text-primary tracking-wider font-bold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4" /> System Architecture Layout
                  </h4>
                  <div className="flex flex-col md:flex-row items-center justify-around gap-2 text-xs font-mono text-center">
                    <div className="p-2 border border-outline-variant/30 rounded bg-surface/50 w-full md:w-auto">
                      {selectedProject.architecture.client}
                    </div>
                    <span className="text-primary hidden md:inline">→</span>
                    <span className="text-primary md:hidden">↓</span>
                    <div className="p-2 border border-primary/40 rounded bg-primary/5 w-full md:w-auto space-y-1">
                      <div className="p-1 border border-outline-variant/20 rounded bg-surface">
                        {selectedProject.architecture.controller}
                      </div>
                      <div className="p-1 border border-outline-variant/20 rounded bg-surface">
                        {selectedProject.architecture.service}
                      </div>
                      <div className="p-1 border border-outline-variant/20 rounded bg-surface">
                        {selectedProject.architecture.repository}
                      </div>
                    </div>
                    <span className="text-primary hidden md:inline">→</span>
                    <span className="text-primary md:hidden">↓</span>
                    <div className="p-2 border border-outline-variant/30 rounded bg-surface/50 w-full md:w-auto">
                      {selectedProject.architecture.database}
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-on-surface-variant tracking-wider font-bold mb-3">
                  Key Capabilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-on-surface-variant"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-on-surface-variant tracking-wider font-bold mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/30 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-outline-variant/20 flex gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-primary text-on-primary rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Code2 className="w-4 h-4" /> View GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
