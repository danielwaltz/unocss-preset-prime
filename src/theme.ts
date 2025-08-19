import { generateThemeColors } from "./utils/generators";
import type { Theme } from "@unocss/preset-mini";

export type { PrimeSurfaceType, PrimeThemeColor } from "./utils/constants";

export const primeColors = generateThemeColors();

export const primeThemeColors = {
  ...primeColors,
  primary: {
    ...primeColors.primary,
    DEFAULT: "var(--primary-color)",
    text: "var(--primary-color-text)",
  },
  surface: {
    0: "var(--surface-0)",
    ...primeColors.surface,
    a: "var(--surface-a)",
    b: "var(--surface-b)",
    c: "var(--surface-c)",
    d: "var(--surface-d)",
    e: "var(--surface-e)",
    f: "var(--surface-f)",
    ground: "var(--surface-ground)",
    section: "var(--surface-section)",
    card: "var(--surface-card)",
    overlay: "var(--surface-overlay)",
    border: "var(--surface-border)",
    hover: "var(--surface-hover)",
    text: "var(--text-color)",
    "text-secondary": "var(--text-color-secondary)",
  },
} as const;

export type PrimeThemeColors = typeof primeThemeColors;

export const primeTheme = {
  colors: primeThemeColors,
} as const satisfies Theme;

export type PrimeTheme = typeof primeTheme;
