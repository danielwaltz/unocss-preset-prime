import type { Preset } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { generateThemeColors } from '@/utils/generators';
import type { PrimeThemeColor, PrimeSurfaceType } from '@/utils/constants';

export interface PresetPrimeOptions {
  /**
   * Use a preflight to set theme colors and font-family on body.
   * @defaultValue `true`
   */
  preflight?: boolean;
}

const colors = generateThemeColors();

export const primeThemeColors = {
  ...colors,
  primary: {
    ...colors.primary,
    DEFAULT: 'var(--primary-color)',
    text: 'var(--primary-color-text)',
  },
  text: {
    color: 'var(--text-color)',
    secondary: 'var(--text-color-secondary)',
  },
  surface: {
    0: 'var(--surface-0)',
    ...colors.surface,
    a: 'var(--surface-a)',
    b: 'var(--surface-b)',
    c: 'var(--surface-c)',
    d: 'var(--surface-d)',
    e: 'var(--surface-e)',
    f: 'var(--surface-f)',
    ground: 'var(--surface-ground)',
    section: 'var(--surface-section)',
    card: 'var(--surface-card)',
    overlay: 'var(--surface-overlay)',
    border: 'var(--surface-border)',
    hover: 'var(--surface-hover)',
  },
} as const;

export type PrimeThemeColors = typeof primeThemeColors;

export const primeTheme = {
  colors: primeThemeColors,
} as const satisfies Theme;

export type PrimeTheme = typeof primeTheme;

export function presetPrime(options?: PresetPrimeOptions): Preset<Theme> {
  const { preflight = true } = options ?? {};

  return {
    name: 'unocss-preset-prime',
    theme: primeTheme,
    shortcuts: [
      {
        'bg-primary': 'bg-primary text-primary-text',
        'bg-primary-reverse': 'bg-primary-text text-primary',
        'text-color': 'text-text-color',
        'text-color-secondary': 'text-text-secondary',
      },
      [
        /^([a-z]*?)-(ground$|section$|card$|overlay$|border$|hover$)/,
        ([, p, v]) => `${p}-surface-${v}`,
      ],
    ],
    preflights: preflight
      ? [
          {
            getCSS: () => `
              body {
                margin: 0;
                background-color: var(--surface-ground);
                color: var(--text-color);
                font-family: var(--font-family);
              }
            `,
          },
        ]
      : undefined,
  };
}

export type { PrimeThemeColor, PrimeSurfaceType };
