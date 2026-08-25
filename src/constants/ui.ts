export const UI_TEXT = {
  accessibility: {
    skipToContent: "Skip to content",
  },
  navigation: {
    primaryLabel: "Primary navigation",
    footerLabel: "Footer navigation",
    menu: "Menu",
    homeLabel: (siteName: string) => `${siteName} — home`,
  },
  actions: {
    viewProjects: "View projects",
    moreAboutMe: "More about me",
    returnHome: "Return home",
  },
  projects: {
    previewUnavailable: "Preview not available",
    previewsLabel: (projectTitle: string) => `${projectTitle} previews`,
    nextPreview: "Next",
    nextPreviewLabel: (projectTitle: string) =>
      `Show next preview for ${projectTitle}`,
    viewOnGitHub: "View on GitHub",
  },
  footer: {
    email: "Email",
    rightsReserved: "All rights reserved.",
  },
  theme: {
    label: "Theme",
    toggleLabel: "Toggle color theme",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
  },
  symbols: {
    externalLink: "↗",
    internalLink: "→",
    menu: "☰",
    currentPage: "•",
    darkMode: "☾",
    lightMode: "☀",
  },
} as const;

export const THEME = {
  storageKey: "jsahota-color-theme",
  light: "light",
  dark: "dark",
} as const;

export type Theme = (typeof THEME)["light" | "dark"];
