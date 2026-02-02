import { primeUixTheme } from "./themes/primeuix";
import { primeSassTheme } from "./themes/sass";
import type { Theme } from "@unocss/preset-mini";
import type { Preset } from "unocss";

export interface PresetPrimeOptions {
  /**
   * Theme mode to use. Changes CSS variable names to match the specified UI library.
   *
   * @default "primeuix"
   */
  mode?: "primeuix" | "sass";
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

export function presetPrime(options?: PresetPrimeOptions): Preset {
  const { mode = "primeuix", preflight = true, icons = false } = options ?? {};

  const preset: Preset<Theme> = {
    name: "unocss-preset-prime",
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

  if (mode === "sass") {
    return {
      ...preset,
      theme: primeSassTheme,
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

  if (mode === "primeuix") {
    return {
      ...preset,
      theme: primeUixTheme,
      preflights: preflight
        ? [
            {
              getCSS: () => `
                body {
                  margin: 0;
                  background-color: var(--p-content-background);
                  color: var(--p-content-color);
                }
            `,
            },
          ]
        : undefined,
    };
  }

  throw new Error(`Unsupported mode: ${mode}`);
}
