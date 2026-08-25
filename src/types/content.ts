import type {ImageMetadata} from "astro";

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
