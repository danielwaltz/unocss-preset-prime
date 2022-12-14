import { Preset } from 'unocss';
import { generateThemeColors } from '@/utils/generators';
import { PrimeThemeColor, PrimeSurfaceType } from '@/utils/constants';

export interface Options {
  /**
   * Use a preflight to set theme colors and font-family on body.
   * @defaultValue `true`
   */
  preflight?: boolean;
}

const presetPrime = (options?: Options): Preset => {
  const { preflight = true } = options ?? {};

  const colors = generateThemeColors();

  return {
    name: 'unocss-preset-prime',
    theme: {
      colors: {
        ...colors,
        primary: {
          ...colors.primary,
          base: 'var(--primary-color)',
          text: 'var(--primary-color-text)',
        },
        text: {
          base: 'var(--text-color)',
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
      },
    },
    shortcuts: [
      {
        'bg-primary': 'bg-primary-base text-primary-text',
        'text-base': 'text-text-base',
        'text-secondary': 'text-text-secondary',
      },
      [
        /^([a-z]*?)-(blue$|green$|yellow$|cyan$|pink$|indigo$|teal$|orange$|bluegray$|purple$|red$|gray$|primary$|surface$)/,
        ([c]) => `${c}-base`,
      ],
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
};

export type { PrimeThemeColor, PrimeSurfaceType };

export default presetPrime;
