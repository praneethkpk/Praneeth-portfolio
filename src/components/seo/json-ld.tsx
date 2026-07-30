import { siteConfig, socialLinks } from "@/lib/constants";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [socialLinks.github, socialLinks.linkedin],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Automation Testing",
      "Selenium WebDriver",
      "REST Assured",
      "MySQL",
      "Docker",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Infosys",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
