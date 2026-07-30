export const siteConfig = {
  name: "Praneeth Kumar Parepalli",
  title: "Java SDET & Backend Engineer",
  description:
    "System Engineer with expertise in Java automation testing and a growing focus on backend engineering. I build secure REST APIs, automate testing, and enjoy designing reliable software.",
  url: "https://praneethparepalli.dev",
  ogImage: "/og.png",
  email: "praneethk102@gmail.com",
  location: "Hyderabad, India",
} as const;

export const socialLinks = {
  github: "https://github.com/praneethkpk",
  linkedin: "https://www.linkedin.com/in/praneeth-kumar/",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Blog", href: "#blog" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LinkedIn", href: socialLinks.linkedin },
] as const;

export const typingStrings = [
  "Java SDET",
  "Backend Developer",
] as const;
