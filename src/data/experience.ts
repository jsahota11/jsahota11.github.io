import umanitobaLogo from "../assets/images/experience/umanitoba.webp";
import dataAnnotationLogo from "../assets/images/experience/dataannotation.webp";
import staplesLogo from "../assets/images/experience/staples.webp";
import conquestlogo from "../assets/images/experience/conquestplanning.webp";
import type { Experience } from "../types/content";

export const workExperiences: Experience[] = [
  {
    id: "usra-2026",
    role: "Undergraduate Student Researcher",
    organization: "Department of Mathematics, University of Manitoba",
    description: "Conducted literature reviews and researched scientific-computing methods, developing and experimentally evaluating an optimized algorithm for structured matrix multiplication and implementing discretized PDE solutions with Dirichlet boundary conditions.",
    logo: umanitobaLogo,
    logoAlt: "University of Manitoba logo",
    startDate: "2026-05",
    endDate: "2026-08"
  },
  {
    id: "conquest-coop",
    role: "Student Developer (Full-stack)",
    organization: "Conquest Planning",
    description: "Developed full-stack features for a financial-planning platform, primarily building C#/.NET API endpoints between the frontend and financial mathematics engine while contributing engine changes and frontend bug fixes.",
    logo: conquestlogo,
    logoAlt: "Conquest Planning logo",
    startDate: "2026-01",
    endDate: "2026-04"
  },
  {
    id: "math-help-centre",
    role: "Math Help Centre Tutor",
    organization: "Department of Mathematics, University of Manitoba",
    description:
    "Helped undergraduate students work through calculus, linear algebra, and introductory mathematics by clarifying concepts and guiding their problem-solving process.",
    logo: umanitobaLogo,
    logoAlt: "University of Manitoba logo",
    startDate: "2025-09",
    endDate: "2025-12"
  },
  {
    id: "usra-2025",
    role: "Undergraduate Student Researcher",
    organization: "Department of Computer Science, University of Manitoba",
    description:
    "Investigated computational geometry and optimization problems through an NSERC Undergraduate Student Research Award, developing algorithms and mathematical techniques under faculty supervision.",
    logo: umanitobaLogo,
    logoAlt: "University of Manitoba logo",
    startDate: "2025-05",
    endDate: "2025-08"
  },
  {
    id: "dataannotation",
    role: "AI Code and Mathematics Evaluator",
    organization: "DataAnnotation",
    description:
    "Evaluated, debugged, and validated AI-generated code across multiple programming languages, with an emphasis on correctness, functionality, and adherence to specifications.",
    logo: dataAnnotationLogo,
    logoAlt: "DataAnnotation logo",
    startDate: "2024-06",
    endDate: "2025-07"
  },
  {
    id: "calculus-ta",
    role: "Calculus II Teaching Assistant",
    organization: "Department of Mathematics, University of Manitoba",
    description:
    "Led tutorials, graded assignments, and supported students studying integration techniques, sequences and series, and applications of calculus.",
    logo: umanitobaLogo,
    logoAlt: "University of Manitoba logo",
    startDate: "2025-01",
    endDate: "2025-04"
  },
  {
    id: "staples",
    role: "Customer Service and Technical Support",
    organization: "Staples Canada",
    description:
    "Provided customer service and technical support in a fast-paced retail environment, including help with technology products and troubleshooting.",
    logo: staplesLogo,
    logoAlt: "Staples Canada logo",
    startDate: "2023-05",
    endDate: "2024-08"
  }
];

export const educationExperiences: Experience[] = [
  {
    id: "umanitoba-cs-math-hons",
    role: "Computer Science - Mathematics Joint, B.Sc Hons. (Co-op)",
    organization: "University of Manitoba",
    description: "Pursuing an interdisciplinary degree combining software development, algorithms, databases, and computer systems with coursework in linear algebra, analysis, number theory, graph theory, multivariable calculus, discrete mathematics, and differential equations.",
    logo: umanitobaLogo,
    logoAlt: "University of Manitoba logo",
    startDate: "2022-09",
    endDate: "2028-01"
  },
  {
    id: "umanitoba-stats-minor",
    role: "Statistics Minor",
    organization: "University of Manitoba",
    description: "Pursuing a minor focused on probability theory, statistical programming, linear models, and principles of data collection.",
    logo: umanitobaLogo,
    logoAlt: "University of Manitoba logo",
    startDate: "2023-09",
    endDate: "2028-01"
  }
];
