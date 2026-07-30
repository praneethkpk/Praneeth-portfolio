"use client";

import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, socialLinks, typingStrings } from "@/lib/constants";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const stats = [
  { target: 3, suffix: "+", label: "Major Projects" },
  { target: 100, suffix: "+", label: "API Tests Written" },
  { target: 20, suffix: "+", label: "Technologies" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-surface pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-8 w-full flex flex-col items-start gap-5">
        {/* Availability Badge */}
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new opportunities
          </div>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-on-surface tracking-tight leading-[1.1] max-w-4xl">
            {siteConfig.name}
          </h1>
        </Reveal>

        {/* Typing Title */}
        <Reveal delay={0.3}>
          <div className="text-xl sm:text-2xl md:text-[32px] font-semibold text-on-surface-variant tracking-tight h-10 md:h-12 flex items-center">
            <TypingAnimation strings={typingStrings} />
          </div>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.4}>
          <p className="text-base md:text-lg text-on-surface-variant/80 max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={0.5}>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="group px-7 py-3.5 bg-primary text-on-primary rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:brightness-110 hover-glow shadow-lg shadow-primary/20 flex items-center gap-2 active:scale-95 transition-all duration-200"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-7 py-3.5 border border-outline-variant text-on-surface rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:bg-surface-variant hover:border-outline transition-all flex items-center gap-2 active:scale-95 duration-200"
            >
              Download Resume
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={0.6}>
          <div className="flex items-center gap-6 mt-6 text-on-surface-variant">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono hover:text-primary transition-colors group"
            >
              <GitHubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono hover:text-primary transition-colors group"
            >
              <LinkedInIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        {/* Stats Strip */}
        <Reveal delay={0.7}>
          <div className="w-full mt-12 pt-8 border-t border-outline-variant/15">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-on-surface-variant" />
      </div>
    </section>
  );
}
