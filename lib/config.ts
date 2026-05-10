/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 *
 * Customize your landing page by editing the values below.
 * All text, links, and settings are centralized here for easy editing.
 */

export const siteConfig = {
  name: "MORDOR",
  tagline: "The Fellowship Reverse Engineers",
  description:
    "AI-orchestrated malware analysis pipeline. Multi-agent reverse engineering powered by Gandalf, Legolas, Frida, and the Fellowship. Six-phase analysis, anti-FP gates, IOC export.",
  url: "https://github.com/daemon-blockint-tech/MORDOR",
  twitter: "@mordoranalysis",

  nav: {
    cta: {
      text: "Start Analysis",
      href: "#analysis",
    },
    signIn: {
      text: "Docs",
      href: "https://github.com/daemon-blockint-tech/MORDOR/blob/main/CLAUDE.md",
    },
  },
} as const;

/**
 * ============================================================================
 * FEATURE FLAGS
 * ============================================================================
 *
 * Toggle features on/off without touching component code.
 */
export const features = {
  smoothScroll: true,
  darkMode: true,
} as const;

/**
 * ============================================================================
 * THEME CONFIGURATION
 * ============================================================================
 *
 * Colors are defined in globals.css using CSS custom properties.
 * This config controls which theme features are enabled.
 */
export const themeConfig = {
  defaultTheme: "dark" as "light" | "dark" | "system",
  enableSystemTheme: true,
} as const;
