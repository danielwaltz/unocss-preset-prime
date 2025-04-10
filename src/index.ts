import { primeTheme } from "./theme";
import type { Theme } from "@unocss/preset-mini";
import type { Preset } from "unocss";

export interface PresetPrimeOptions {
  /**
   * Use a preflight to set theme colors and font-family on body.
   *
   * @default true
   */
  preflight?: boolean;
  /**
   * Enable shortcuts for using `presetIcons` for PrimeIcons (ex. `pi-bars` and utilities like `pi-spin`).
   *
   * Requires installing the `@iconify-json/prime` package and configuring `presetIcons` in your UnoCSS config file.
   *
   * @default false
   */
  icons?: boolean;
}

export function presetPrime(options?: PresetPrimeOptions): Preset<Theme> {
  const { preflight = true, icons = false } = options ?? {};

  const preset: Preset<Theme> = {
    name: "unocss-preset-prime",
    theme: primeTheme,
    shortcuts: [
      {
        "bg-primary": "bg-primary text-primary-text",
        "bg-primary-reverse": "bg-primary-text text-primary",
        "text-color": "text-text-color",
        "text-color-secondary": "text-text-secondary",
      },
      [
        /^([a-z]*)-(ground$|section$|card$|overlay$|border$|hover$)/,
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

  if (icons) {
    if (!Array.isArray(preset.shortcuts)) preset.shortcuts = [];

    preset.shortcuts.push(
      [
        /^pi-(.*)$/,
        ([, d]) => `i-prime-${d} i-scale-prime inline-block align-middle`,
      ],
      {
        "i-scale-prime": "[scale:130%]",
        "pi-fw": "w-1.28571429em",
        "pi-spin": "animate-spin animate-duration-2s",
      },
    );
  }

  return preset;
}

export * from "./theme";
