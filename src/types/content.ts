import type { ImageMetadata } from "astro";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface LinkItem extends NavigationItem {
  description: string;
  newTab?: boolean;
  preview?: string;
}

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
  repositoryUrl?: string;
  note?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  description: string;
  logo: ImageMetadata;
  logoAlt: string;
}

export interface Update {
  id: string;
  date: string;
  title: string;
  summary: string;
}
