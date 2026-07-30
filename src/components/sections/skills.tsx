"use client";

import { useState } from "react";
import { Server, TestTube, Database, Wrench, Layers } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type CategoryId = "all" | "backend" | "testing" | "database" | "tools";

interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Core";
  highlight?: boolean;
}

interface SkillCategory {
  id: Exclude<CategoryId, "all">;
  title: string;
  icon: React.ElementType;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: Server,
    description: "Building scalable, secure REST APIs & enterprise applications in Java.",
    skills: [
      { name: "Core Java (17+)", level: "Advanced", highlight: true },
      { name: "Spring Boot", level: "Advanced", highlight: true },
      { name: "RESTful APIs", level: "Advanced", highlight: true },
      { name: "Spring Data JPA / Hibernate", level: "Proficient" },
      { name: "JWT Authentication", level: "Proficient" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "Java Collections & Streams", level: "Advanced" },
      { name: "Exception Handling & Logging", level: "Advanced" },
    ],
  },
  {
    id: "testing",
    title: "Automation & SDET",
    icon: TestTube,
    description: "Designing end-to-end UI & API automated testing frameworks.",
    skills: [
      { name: "Selenium WebDriver", level: "Advanced", highlight: true },
      { name: "REST Assured", level: "Advanced", highlight: true },
      { name: "TestNG & JUnit 5", level: "Advanced" },
      { name: "Cucumber (BDD)", level: "Proficient" },
      { name: "Data-Driven Testing", level: "Advanced" },
      { name: "Page Object Model (POM)", level: "Advanced" },
      { name: "Postman & API Validation", level: "Advanced" },
      { name: "JSON & XML Assertions", level: "Advanced" },
    ],
  },
  {
    id: "database",
    title: "Databases & Storage",
    icon: Database,
    description: "Relational database modeling, complex SQL queries, & optimization.",
    skills: [
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "Complex SQL Joins & Subqueries", level: "Advanced" },
      { name: "Relational DB Schema Design", level: "Proficient" },
      { name: "Data Validation & Verification", level: "Advanced" },
      { name: "Transaction Management", level: "Core" },
    ],
  },
  {
    id: "tools",
    title: "Tools, DevOps & Cloud",
    icon: Wrench,
    description: "Containerization, version control, and cloud-native workflows.",
    skills: [
      { name: "Docker & Multi-Stage Builds", level: "Proficient", highlight: true },
      { name: "Git & GitHub Workflows", level: "Advanced" },
      { name: "AWS Cloud Fundamentals", level: "Core" },
      { name: "CI/CD Pipeline Basics", level: "Proficient" },
      { name: "Maven / Gradle", level: "Advanced" },
      { name: "VS Code & IntelliJ IDEA", level: "Advanced" },
    ],
  },
];

const filterTabs: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Backend" },
  { id: "testing", label: "Testing & SDET" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & Cloud" },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-xl relative">
      <div className="max-w-container-max mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
                <Layers className="w-3.5 h-3.5" />
                Technical Competencies
              </div>
              <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight leading-tight">
                Tech Stack & Expertise
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-xl">
                A robust toolkit refined through enterprise training and real-world project development.
              </p>
            </div>
          </Reveal>

          {/* Filter Pills */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-primary text-on-primary font-bold shadow-md"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Skill Category Cards Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.id}>
                <div className="glass-panel glass-border-gradient p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between group hover:border-primary/40 transition-all duration-300">
                  <div>
                    {/* Category Title & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-on-surface font-sans">
                            {category.title}
                          </h3>
                          <span className="text-xs font-mono text-on-surface-variant/70">
                            {category.skills.length} competencies
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={cn(
                            "px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border flex items-center gap-1.5",
                            skill.highlight
                              ? "bg-primary/10 border-primary/40 text-primary font-medium"
                              : "bg-surface-container border-outline-variant/20 text-on-surface-variant hover:border-outline-variant/40 hover:text-on-surface"
                          )}
                        >
                          <span>{skill.name}</span>
                          <span
                            className={cn(
                              "text-[10px] px-1.5 py-0.2 rounded uppercase font-sans tracking-wider",
                              skill.level === "Advanced"
                                ? "bg-primary/20 text-primary"
                                : skill.level === "Proficient"
                                ? "bg-secondary-container/40 text-secondary"
                                : "bg-surface-variant text-on-surface-variant"
                            )}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
