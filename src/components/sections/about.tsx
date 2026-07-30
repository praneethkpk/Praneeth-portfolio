"use client";

import { Shield, GitBranch, Code2, Cpu } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Every line of code is built to be tested, verified, and trusted.",
  },
  {
    icon: GitBranch,
    title: "System Design",
    description: "Architecting scalable solutions with clean separation of concerns.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, readable, and well-documented software.",
  },
  {
    icon: Cpu,
    title: "Continuous Growth",
    description: "Always learning — from Spring Security to cloud-native patterns.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-xl bg-surface-container-lowest border-y border-outline-variant/10"
    >
      <div className="max-w-container-max mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-md items-start">
          {/* Left — Heading */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight leading-tight lg:sticky lg:top-32">
                Engineering
                <br />
                Mindset
              </h2>
              <div className="w-12 h-1 bg-primary mt-6 rounded-full" />
            </Reveal>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio Panel */}
            <Reveal delay={0.1}>
              <div className="glass-panel glass-border-gradient p-8 rounded-xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-5 text-on-surface-variant leading-relaxed">
                  <p>
                    As a hybrid between an SDET and a Backend Engineer, I view
                    software through a dual lens:{" "}
                    <strong className="text-on-surface">
                      how to build it robustly
                    </strong>{" "}
                    and{" "}
                    <strong className="text-on-surface">
                      how it might break
                    </strong>
                    .
                  </p>
                  <p>
                    My journey began in enterprise automation testing at Infosys,
                    constructing resilient frameworks with Selenium and REST
                    Assured that ensure system reliability at scale. This rigorous
                    focus on quality naturally evolved into backend development,
                    where I now architect the very APIs and services I once
                    tested.
                  </p>
                  <p>
                    I specialize in the Java ecosystem (Spring Boot, Hibernate)
                    and thrive on crafting clean, testable, and secure
                    architectures. For me, automation isn&apos;t just about
                    scripts; it&apos;s a fundamental design philosophy that
                    drives better engineering outcomes.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Engineering Pillars */}
            <StaggerReveal
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              staggerDelay={0.1}
            >
              {pillars.map(({ icon: Icon, title, description }) => (
                <StaggerItem key={title}>
                  <div className="group p-5 rounded-xl border border-outline-variant/15 hover:border-primary/30 bg-surface-container/50 hover:bg-surface-container transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-on-surface font-mono uppercase tracking-wider">
                        {title}
                      </h3>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
