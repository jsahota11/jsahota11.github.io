import umComputerScienceLogo from "../assets/images/experience/um-computer-science-department.webp";
import dataAnnotationLogo from "../assets/images/experience/dataannotation.webp";
import umMathematicsLogo from "../assets/images/experience/um-mathematics-department.webp";
import umMathematicsLogoAlt from "../assets/images/experience/um-mathematics-department-alt.webp";
import staplesLogo from "../assets/images/experience/staples.webp";
import type { Experience } from "../types/content";

export const experiences: Experience[] = [
  {
    id: "dataannotation",
    role: "AI Code and Mathematics Evaluator",
    organization: "DataAnnotation",
    description:
      "Evaluated, debugged, and validated AI-generated code across multiple programming languages, with an emphasis on correctness, functionality, and adherence to specifications.",
    logo: dataAnnotationLogo,
    logoAlt: "DataAnnotation logo",
  },
  {
    id: "staples",
    role: "Customer Service and Technical Support",
    organization: "Staples Canada",
    description:
      "Provided customer service and technical support in a fast-paced retail environment, including help with technology products and troubleshooting.",
    logo: staplesLogo,
    logoAlt: "Staples Canada logo",
  },
  {
    id: "undergraduate-research",
    role: "Undergraduate Student Researcher",
    organization: "Department of Computer Science, University of Manitoba",
    description:
      "Investigated computational geometry and optimization problems through an Undergraduate Student Research Award, developing algorithms and mathematical techniques under faculty supervision.",
    logo: umComputerScienceLogo,
    logoAlt: "University of Manitoba Department of Computer Science logo",
  },
  {
    id: "math-help-centre",
    role: "Math Help Centre Tutor",
    organization: "Department of Mathematics, University of Manitoba",
    description:
      "Helped undergraduate students work through calculus, linear algebra, and introductory mathematics by clarifying concepts and guiding their problem-solving process.",
    logo: umMathematicsLogo,
    logoAlt: "University of Manitoba Department of Mathematics logo",
  },
  {
    id: "calculus-ta",
    role: "Calculus II Teaching Assistant",
    organization: "Department of Mathematics, University of Manitoba",
    description:
      "Led tutorials, graded assignments, and supported students studying integration techniques, sequences and series, and applications of calculus.",
    logo: umMathematicsLogoAlt,
    logoAlt: "University of Manitoba Department of Mathematics logo",
  },
];
