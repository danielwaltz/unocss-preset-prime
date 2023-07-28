# UnoCSS Preset Prime

UnoCSS preset for supporting [Prime UI](https://www.primefaces.org/) theme colors.

## Install

```bash
# npm
npm i -D unocss-preset-prime

# yarn
yarn add -D unocss-preset-prime

# pnpm
pnpm i -D unocss-preset-prime
```

> :warning: Using PrimeIcons requires installing the `@iconify-json/prime` package.

## Initialize

```ts
# uno.config.ts

import { defineConfig, presetUno } from 'unocss';
import { presetPrime } from 'unocss-preset-prime';

export default defineConfig({
  presets: [presetUno(), presetPrime()],
});
```

## Options

```ts
presetPrime({
  /**
   * Use a preflight to set theme colors and font-family on body.
   * @defaultValue `true`
   */
  preflight?: boolean;
  /**
   * Use `presetIcons` for prime icons (ex `pi-bars`).
   *
   * Requires installing the `@iconify-json/prime` package.
   * @defaultValue `false`
   */
  icons?: boolean;
});
```

## Include Prime Components in Content Pipeline

To support PrimeIcons and PrimeFlex classes on internal Prime components, you can include the following in your UnoCSS config depending on your bundler and framework. Below is an example for Vite + PrimeReact. Be sure to include the default regex as well!

```ts
content: {
  pipeline: {
    include: [
      /(.*\/)primereact(.*)\.(c|m)?(js)(x?)$/, // PrimeReact
      /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, // Default
    ],
  },
},
```

## Extending

This preset exports helpful types and the generated theme colors directly for extending the theme to support application specific semantic colors.

```ts
# uno.config.ts

import { defineConfig, presetUno } from 'unocss';
import { presetPrime, primeThemeColors } from 'unocss-preset-prime';

export default defineConfig({
  presets: [presetUno(), presetPrime()],
  theme: {
    colors: {
      success: primeThemeColors.green[500],
      warning: primeThemeColors.yellow[500],
      error: primeThemeColors.red[500],
    },
  },
});
```
