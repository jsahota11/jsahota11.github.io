import exfatShell from "../assets/images/projects/exfat-shell-output.png";
import graphAlt from "../assets/images/projects/graph-visual-construct-alt.png";
import graphConstruct from "../assets/images/projects/graph-visual-construct.png";
import graphForm from "../assets/images/projects/graph-visual-form.png";
import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "graph-generator",
    title: "Graph Visualizer",
    description:
      "A tool for constructing and visualizing graphs from a collection of input parameters.",
    repositoryUrl: "https://github.com/jsahota11/graph-generator",
    images: [
      {
        src: graphForm,
        alt: "Graph Visualizer input form",
      },
      {
        src: graphConstruct,
        alt: "A graph constructed in Graph Visualizer",
      },
      {
        src: graphAlt,
        alt: "An alternate graph construction in Graph Visualizer",
      },
    ],
  },
  {
    id: "exfat-fs-shell",
    title: "exFAT File Reader and Shell",
    description:
      "A coursework project that reads exFAT-formatted volumes and provides a shell inspired by common GNU utilities.",
    note: "Coursework; source is not publicly available.",
    images: [
      {
        src: exfatShell,
        alt: "Terminal output from the exFAT file reader and shell",
      },
    ],
  },
  {
    id: "greed-game",
    title: "Greed",
    description:
      "A console-based Java board game built around object-oriented principles including encapsulation, inheritance, polymorphism, and abstraction.",
    note: "Coursework; source and screenshots are not publicly available.",
    images: [],
  },
];
