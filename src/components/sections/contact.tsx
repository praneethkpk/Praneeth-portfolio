"use client";

import { useState } from "react";
import { Mail, Send, Terminal, Briefcase, CheckCircle2, Copy } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-xl bg-surface-container-lowest border-y border-outline-variant/10 relative overflow-hidden"
    >
      {/* Background Annotations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
        <span className="absolute top-[15%] left-[10%] font-mono text-xl font-bold text-primary">@Service</span>
        <span className="absolute top-[40%] right-[15%] font-mono text-lg font-bold text-primary">@Test</span>
        <span className="absolute bottom-[25%] left-[20%] font-mono text-2xl font-bold text-primary">@Autowired</span>
        <span className="absolute top-[70%] right-[25%] font-mono text-xl font-bold text-primary">@RestController</span>
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">
              Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Great</span>.
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto">
              Whether you need a robust automated testing framework, a sophisticated Java backend, or want to discuss full-time opportunities.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="glass-panel glass-border-gradient p-8 rounded-2xl flex flex-col gap-6 h-full">
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-2 font-sans">
                    Get in touch
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant mb-6">
                    I&apos;m currently open for Software Engineer, SDET, and Backend Engineering roles.
                  </p>
                </div>

                {/* Email Card with Copy button */}
                <div className="p-4 rounded-xl bg-surface-container/60 border border-outline-variant/20 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono uppercase text-on-surface-variant tracking-wider">Direct Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-mono text-on-surface hover:text-primary transition-colors truncate block">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-surface-variant text-on-surface-variant hover:text-primary transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Links Cards */}
                <div className="space-y-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/20 bg-surface-container/30 hover:border-primary/40 hover:bg-surface-container transition-all group"
                  >
                    <div className="h-10 w-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                      <GitHubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">GitHub Profile</div>
                      <div className="text-sm font-mono text-on-surface group-hover:text-primary transition-colors">
                        github.com/praneethkpk
                      </div>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/20 bg-surface-container/30 hover:border-primary/40 hover:bg-surface-container transition-all group"
                  >
                    <div className="h-10 w-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">LinkedIn Profile</div>
                      <div className="text-sm font-mono text-on-surface group-hover:text-primary transition-colors">
                        linkedin.com/in/praneeth-kumar
                      </div>
                    </div>
                  </a>
                </div>

                {/* Availability Badge */}
                <div className="mt-auto pt-6 border-t border-outline-variant/15 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Open for Full-Time Roles</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-surface-container border border-outline-variant/20 text-on-surface-variant">
                    Hyderabad / Remote
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="glass-panel glass-border-gradient p-8 md:p-10 rounded-2xl flex flex-col gap-5 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager"
                      className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="fulltime">Full-Time Job Opportunity</option>
                    <option value="consulting">Automation / Backend Audit</option>
                    <option value="project">Project Collaboration</option>
                    <option value="other">General Networking</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your team, tech stack, or open role..."
                    className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40 resize-y"
                  />
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Message sent successfully! I will get back to you shortly.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full md:w-auto self-start px-8 py-4 bg-primary text-on-primary rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
