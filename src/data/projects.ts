import exfatShell from "../assets/images/projects/exfat-shell-output.webp";

import graphAlt from "../assets/images/projects/graph-visual-construct-alt.webp";
import graphConstruct from "../assets/images/projects/graph-visual-construct.webp";
import graphForm from "../assets/images/projects/graph-visual-form.webp";

import f1dbMainMenu from "../assets/images/projects/f1db-main-menu.webp";
import f1dbOutput from "../assets/images/projects/f1db-output.webp";
import f1dbDriverInfo from "../assets/images/projects/f1db-driver-info.webp";
import f1dbPagination from "../assets/images/projects/f1db-pagination.webp";

import caroracleHome from "../assets/images/projects/caroracle-home.webp";
import caroracleResults from "../assets/images/projects/caroracle-results.webp";
import caroracleComparison from "../assets/images/projects/caroracle-comparison.webp";
import caroracleLogin from "../assets/images/projects/caroracle-login.webp";

import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "f1-db",
    title: "Formula 1 Database",
    description: "Course group project. A database to query Formula 1 data spanning many years.",
    note: "Coursework; source is not publicly available. Built with Java, using a SQL database, and supports a large variety of different queries!",
    repositoryUrl: "https://github.com/jsahota11/databases-group-proj",
    images: [
      {
        src: f1dbMainMenu,
        alt: "Formula 1 Database main menu"
      },
      {
        src: f1dbDriverInfo,
        alt: "Formula 1 Database driver info"
      },
      {
        src: f1dbOutput,
        alt: "Formula 1 Database output"
      },
      {
        src: f1dbPagination,
        alt: "Formula 1 Database table with pagination"
      }
    ]
  },
  {
    id: "car-oracle",
    title: "CarOracle",
    description: "Course group project. An app to find vehicles based on user preferences, view vehicle specifications, and compare vehicles. Built with Java, using a SQL database, demonstrates different principles of software engineering.",
    note: "Coursework; source is not publicly available.",
    images: [
      {
        src: caroracleHome,
        alt: "CarOracle home page"
      },
      {
        src: caroracleLogin,
        alt: "CarOracle login page"
      },
      {
        src: caroracleResults,
        alt: "CarOracle results page"
      },
      {
        src: caroracleComparison,
        alt: "CarOracle comparison page"
      }
    ]
  },
  {
    id: "graph-generator",
    title: "Graph Visualizer",
    description:
    "A tool for constructing and visualizing graphs from a collection of input parameters. Built with JavaScript, Python and Flask. Demonstrates implementation and usage of internal APIs.",
    repositoryUrl: "https://github.com/jsahota11/graph-generator",
    deployedUrl: "https://graph-generator-beta.vercel.app/",
    images: [
      {
        src: graphConstruct,
        alt: "A graph constructed in Graph Visualizer",
      },
      {
        src: graphForm,
        alt: "Graph Visualizer input form",
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
    "A coursework project that reads exFAT-formatted volumes and provides a shell inspired by common GNU utilities. Programmed in C.",
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
  {
    id: "curvle",
    title: "Curvle",
    description: "A fun guessing game for different mathematical curves! Built with C# and Typescript, and supports peer-to-peer multiplayer gameplay.",
    note: "Still very early in development",
    images: []
  }
];
