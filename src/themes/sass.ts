import { generateThemeColors } from "../utils/generators";
import type { Theme } from "@unocss/preset-mini";

const generatedColors = generateThemeColors({
  prefix: "",
  colors: [
    "blue",
    "green",
    "yellow",
    "cyan",
    "pink",
    "indigo",
    "teal",
    "orange",
    "bluegray",
    "purple",
    "red",
    "gray",
    "primary",
    "surface",
  ],
  range: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  rangeDefault: 500,
} as const);

export const primeSassColors = {
  ...generatedColors,
  primary: {
    ...generatedColors.primary,
    DEFAULT: "var(--primary-color)",
    text: "var(--primary-color-text)",
  },
  surface: {
    0: "var(--surface-0)",
    ...generatedColors.surface,
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

export type PrimeSassThemeColors = typeof primeSassColors;

export const primeSassTheme = {
  colors: primeSassColors,
} as const satisfies Theme;

export type PrimeSassTheme = typeof primeSassTheme;
