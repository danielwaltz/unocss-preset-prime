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
    ground: "var(--p-surface-950)",
    section: "var(--p-surface-700)",
    card: "var(--p-surface-900)",
    overlay: "var(--p-surface-900)",
    border: "var(--p-surface-700)",
    hover: "var(--p-surface-800)",
    content: "var(--p-content-background)",
    "content-hover": "var(--p-content-hover-background)",
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
