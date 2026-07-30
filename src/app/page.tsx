import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { GithubActivitySection } from "@/components/sections/github-activity";
import { BlogSection } from "@/components/sections/blog";
import { JourneySection } from "@/components/sections/journey";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubActivitySection />
      <BlogSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
