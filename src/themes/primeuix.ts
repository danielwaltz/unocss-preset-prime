import { generateThemeColors } from "../utils/generators";
import type { Theme } from "@unocss/preset-mini";

const generatedColors = generateThemeColors({
  prefix: "p-",
  colors: [
    "stone",
    "neutral",
    "zinc",
    "gray",
    "slate",
    "rose",
    "pink",
    "fuchsia",
    "purple",
    "violet",
    "indigo",
    "blue",
    "sky",
    "cyan",
    "teal",
    "yellow",
    "amber",
    "orange",
    "red",
    "lime",
    "green",
    "emerald",
    "primary",
    "surface",
  ],
  range: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  rangeDefault: 400,
} as const);

export const primeUixColors = {
  ...generatedColors,
  primary: {
    ...generatedColors.primary,
    DEFAULT: "var(--p-primary-color)",
    text: "var(--p-primary-contrast-color)",
    contrast: "var(--p-primary-contrast-color)",
    hover: "var(--p-primary-hover-color)",
    active: "var(--p-primary-active-color)",
  },
  surface: {
    0: "var(--p-surface-0)",
    ...generatedColors.surface,
    ground: "var(--p-form-field-background)", // closest generic equivalent
    section: "var(--p-content-border-color)",
    card: "var(--p-content-background)",
    overlay: "var(--p-content-background)",
    border: "var(--p-content-border-color)",
    hover: "var(--p-content-hover-background)",
    content: "var(--p-content-background)",
    "content-hover": "var(--p-content-hover-background)",
    "content-border": "var(--p-content-border-color)",
    text: "var(--p-content-color)",
    "text-hover": "var(--p-content-hover-color)",
    "text-secondary": "var(--p-text-muted-color)",
    "text-muted": "var(--p-text-muted-color)",
    "text-hover-muted": "var(--p-text-hover-muted-color)",
  },
} as const;

export type PrimeUIXThemeColors = typeof primeUixColors;

export const primeUixTheme = {
  colors: primeUixColors,
} as const satisfies Theme;

export type PrimeUIXTheme = typeof primeUixTheme;
