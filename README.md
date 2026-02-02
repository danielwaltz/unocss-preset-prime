# UnoCSS Preset Prime [![npm](https://img.shields.io/npm/v/unocss-preset-prime.svg)](https://npmjs.com/package/unocss-preset-prime)

UnoCSS preset for supporting [Prime UI](https://www.primefaces.org/) theme colors and icons.

## Install

```shell
# npm
npm i -D unocss-preset-prime

# yarn
yarn add -D unocss-preset-prime

# pnpm
pnpm i -D unocss-preset-prime
```

> :warning: Using PrimeIcons requires installing the `@iconify-json/prime` package and configuring `presetIcons` in your UnoCSS config file.

## Initialize

```ts
// uno.config.ts
import { defineConfig, presetIcons, presetWind4 } from "unocss";
import { presetPrime } from "unocss-preset-prime";

export default defineConfig({
  presets: [presetWind4(), presetPrime()],
});

// or with icon support
export default defineConfig({
  presets: [presetWind4(), presetIcons(), presetPrime({ icons: true })],
});
```

## Options

```ts
presetPrime({
  /**
   * Theme mode to use. Changes CSS variable names to match the specified UI library.
   *
   * @default "primeuix"
   */
  mode: "primeuix" | "sass",
  /**
   * Use a preflight to set theme colors and font-family on body.
   *
   * @default true
   */
  preflight: boolean,
  /**
   * Enable shortcuts for using `presetIcons` for PrimeIcons (ex. `pi-bars` and utilities like `pi-spin`).
   *
   * Requires installing the `@iconify-json/prime` package and configuring `presetIcons` in your UnoCSS config file.
   *
   * @default false
   */
  icons: boolean,
});
```

## Include Prime Components in Content Pipeline

To support parsing class names on internal Prime components, you can include the following in your UnoCSS config depending on your bundler and framework. Below is an example for Vite + PrimeReact. Be sure to include the default regex as well!

```ts
import { defineConfig } from "unocss";

defineConfig({
  content: {
    pipeline: {
      include: [
        /(.*\/)primereact(.*)\.(c|m)?(js)(x?)$/, // PrimeReact
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, // Default
      ],
    },
  },
});
```

## Extending

This preset exports helpful types and the generated theme colors directly for extending the theme to support application specific semantic colors.

> :warning: For usage at runtime, use the dedicated export to prevent loading core UnoCSS logic: `import { primeThemeColors } from 'unocss-preset-prime/theme'`.

```ts
// uno.config.ts
import { defineConfig, presetWind4 } from "unocss";
import { presetPrime, primeThemeColors } from "unocss-preset-prime";

export default defineConfig({
  presets: [presetWind4(), presetPrime()],
  theme: {
    colors: {
      success: primeThemeColors.green[500],
      warning: primeThemeColors.yellow[500],
      error: primeThemeColors.red[500],
    },
  },
});
```
