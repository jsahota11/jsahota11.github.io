import type { LinkItem, NavigationItem } from "../types/content";

export const site = {
  name: "Jatinder Sahota",
  url: "https://jsahota11.github.io",
  description:
    "The personal portfolio of Jatinder Sahota, a Computer Science and Mathematics student interested in algorithms, scientific computing, and systems programming.",
  email: "jsahota751@gmail.com",
  location: "Winnipeg, Manitoba",
} as const;

export const primaryNavigation: NavigationItem[] = [
  { label: "About", href: "/about/" },
  { label: "Experience", href: "/work/" },
  { label: "Projects", href: "/projects/" },
  { label: "Updates", href: "/updates/" },
  { label: "Contact", href: "/contact/" },
];

export const documentLinks: LinkItem[] = [
  {
    label: "Resume",
    description:
      "A concise overview of my experience, education, and projects.",
    href: "/cs_resume__proj_first__um_email.pdf",
    newTab: true,
  },
  {
    label: "Web transcript",
    description: "My University of Manitoba academic record.",
    href: "/web-ts-nov-2025.pdf",
    newTab: true,
  },
  {
    label: "Computational geometry research poster",
    description:
      "The poster from my Summer 2025 computational geometry research.",
    href: "/poster.pdf",
    newTab: true,
  },
  {
    label: "Computational geometry research write-up",
    description: "The full write-up from my Summer 2025 research project.",
    href: "/research-writeup.pdf",
    newTab: true,
  },
  {
    label: "Scientific computing research paper [INACTIVE]",
    description: "The published research paper from my Summer 2026 research experience (to be updated once paper is published)."
    href: "",
    newTab: false,
  }
];

export const contactLinks: LinkItem[] = [
  {
    label: "Email",
    description: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "GitHub",
    description: "Code, experiments, and current projects.",
    href: "https://github.com/jsahota11",
    newTab: true,
  },
  {
    label: "LinkedIn",
    description: "Professional experience and connections.",
    href: "https://www.linkedin.com/in/jatinder-sahota",
    newTab: true,
  },
];

export const socialLinks = contactLinks.filter(
  (link) => link.label !== "Email",
);
