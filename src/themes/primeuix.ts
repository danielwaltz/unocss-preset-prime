import { generateThemeColors } from "../utils/generators";
import type { Theme } from "@unocss/preset-wind4";

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
    "secondary",
    "surface",
  ],
  range: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  rangeDefault: 400,
} as const);

const primeUixSpacing = {
  icon: "var(--p-icon-size)",
  anchor: "var(--p-anchor-gutter)",
  gutter: "var(--p-anchor-gutter)",
  "field-x": "var(--p-form-field-padding-x)",
  "field-y": "var(--p-form-field-padding-y)",
  "field-sm-x": "var(--p-form-field-sm-padding-x)",
  "field-sm-y": "var(--p-form-field-sm-padding-y)",
  "field-lg-x": "var(--p-form-field-lg-padding-x)",
  "field-lg-y": "var(--p-form-field-lg-padding-y)",
  popover: "var(--p-overlay-popover-padding)",
  modal: "var(--p-overlay-modal-padding)",
} as const;

const primeUixText = {
  "field-sm": {
    fontSize: "var(--p-form-field-sm-font-size)",
  },
  "field-lg": {
    fontSize: "var(--p-form-field-lg-font-size)",
  },
} as const;

const primeUixFontWeight = {
  list: "var(--p-list-option-group-font-weight)",
  submenu: "var(--p-navigation-submenu-label-font-weight)",
} as const;

const primeUixRadius = {
  DEFAULT: "var(--p-border-radius-sm)",
  none: "var(--p-border-radius-none)",
  xs: "var(--p-border-radius-xs)",
  sm: "var(--p-border-radius-sm)",
  md: "var(--p-border-radius-md)",
  lg: "var(--p-border-radius-lg)",
  xl: "var(--p-border-radius-xl)",
  field: "var(--p-form-field-border-radius)",
  content: "var(--p-content-border-radius)",
  modal: "var(--p-overlay-modal-border-radius)",
  popover: "var(--p-overlay-popover-border-radius)",
  select: "var(--p-overlay-select-border-radius)",
  item: "var(--p-navigation-item-border-radius)",
  option: "var(--p-list-option-border-radius)",
} as const;

const primeUixShadow = {
  focus: "var(--p-focus-ring-shadow)",
  navigation: "var(--p-overlay-navigation-shadow)",
  modal: "var(--p-overlay-modal-shadow)",
  popover: "var(--p-overlay-popover-shadow)",
  select: "var(--p-overlay-select-shadow)",
} as const;

const primeUixDefault = {
  transition: {
    duration: "var(--p-transition-duration)",
  },
} as const;

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
  secondary: {
    ...generatedColors.secondary,
    DEFAULT: "var(--p-secondary-color)",
    hover: "var(--p-secondary-hover-color)",
    active: "var(--p-secondary-active-color)",
  },
  surface: {
    0: "var(--p-surface-0)",
    ...generatedColors.surface,
    content: "var(--p-content-background)",
    "content-hover": "var(--p-content-hover-background)",
    "content-border": "var(--p-content-border-color)",
    text: "var(--p-content-color)",
    "text-hover": "var(--p-content-hover-color)",
    "text-muted": "var(--p-text-muted-color)",
    "text-hover-muted": "var(--p-text-hover-muted-color)",
    // Legacy
    a: "var(--p-content-background)",
    b: "var(--p-content-background)",
    c: "var(--p-content-background)",
    d: "var(--p-content-background)",
    e: "var(--p-content-background)",
    f: "var(--p-content-background)",
    ground: "var(--p-content-background)",
    section: "var(--p-content-background)",
    card: "var(--p-content-background)",
    overlay: "var(--p-content-background)",
    border: "var(--p-content-border-color)",
    hover: "var(--p-content-hover-background)",
    "text-secondary": "var(--p-text-muted-color)",
  },
} as const;

export type PrimeUIXThemeColors = typeof primeUixColors;

export const primeUixTheme = {
  colors: primeUixColors,
  spacing: primeUixSpacing,
  text: primeUixText,
  fontWeight: primeUixFontWeight,
  radius: primeUixRadius,
  shadow: primeUixShadow,
  default: primeUixDefault,
} as const satisfies Theme;

export type PrimeUIXTheme = typeof primeUixTheme;
