"use client";

import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";

interface TimelineItem {
  id: string;
  type: "Experience" | "Education" | "Certification";
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string[];
  skills: string[];
  icon: React.ElementType;
}

const timelineData: TimelineItem[] = [
  {
    id: "infosys-role",
    type: "Experience",
    title: "Automation Test Engineer",
    organization: "Infosys",
    location: "Hyderabad, India",
    period: "Oct 2025 — Present",
    description: [
      "Completed intensive enterprise training in Core Java, SQL, Selenium WebDriver, and REST Assured.",
      "Developed end-to-end UI and API automation projects following enterprise SDLC practices.",
      "Wrote complex SQL queries for backend data validation, verification, and DB assertions.",
      "Gained hands-on experience in debugging, Postman API testing, Git branching, and agile development workflows.",
    ],
    skills: ["Core Java", "SQL", "Selenium", "REST Assured", "Postman", "Git", "SDLC"],
    icon: Briefcase,
  },
  {
    id: "certifications",
    type: "Certification",
    title: "Enterprise Certifications",
    organization: "Infosys",
    period: "2025",
    description: [
      "Infosys Enterprise Training Certification — Core Java, SQL, Java Selenium & REST Assured",
      "Infosys Python Programmer Certification",
    ],
    skills: ["Java Certification", "SQL Specialist", "Selenium Automation", "REST API Automation", "Python"],
    icon: Award,
  },
  {
    id: "education",
    type: "Education",
    title: "Bachelor of Technology (IT)",
    organization: "B V Raju Institute of Technology",
    location: "Telangana, India",
    period: "2021 — 2025",
    description: [
      "Specialized in Information Technology with a strong focus on Data Structures, OOP, Database Management, and Software Engineering.",
      "Participated in technical workshops, hackathons, and software testing labs.",
    ],
    skills: ["Information Technology", "OOP", "DBMS", "Software Engineering", "Computer Networks"],
    icon: GraduationCap,
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="py-20 md:py-xl relative">
      <div className="max-w-container-max mx-auto px-6 md:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
              <Calendar className="w-3.5 h-3.5" />
              Professional Career
            </div>
            <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight leading-tight">
              Engineering Journey & Education
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-xl">
              My background from academic computer science to enterprise automation testing and backend engineering.
            </p>
          </div>
        </Reveal>

        {/* Timeline Items */}
        <div className="relative pl-6 md:pl-10 border-l border-outline-variant/20 space-y-12 ml-2 md:ml-4">
          <StaggerReveal className="space-y-12">
            {timelineData.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.id}>
                  <div className="relative group">
                    {/* Glowing Node Dot on Timeline */}
                    <div className="absolute -left-[31px] md:-left-[47px] top-1.5 p-2 rounded-full bg-surface-container border border-primary/40 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Card Content */}
                    <div className="glass-panel glass-border-gradient p-6 md:p-8 rounded-2xl group-hover:border-primary/40 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-outline-variant/15 pb-4">
                        <div>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-primary/10 text-primary font-medium">
                            {item.type}
                          </span>
                          <h3 className="text-xl font-bold text-on-surface mt-1 font-sans">
                            {item.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-on-surface-variant mt-1">
                            <span className="text-on-surface font-semibold">{item.organization}</span>
                            {item.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-primary" /> {item.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-xs font-mono text-primary px-3 py-1 rounded-full bg-surface-container border border-outline-variant/20 self-start md:self-center">
                          {item.period}
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mb-6">
                        {item.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-on-surface-variant leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-[11px] font-mono text-on-surface-variant border border-outline-variant/20 rounded-md bg-surface-container/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
