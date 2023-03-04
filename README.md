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

## Initialize

```ts
# uno.config.ts

import { defineConfig } from 'unocss';
import { presetPrime } from 'unocss-preset-prime';

export default defineConfig({
  presets: [presetPrime()],
});
```

## Options

```ts
presetPrime({
  /* Use a preflight to set theme colors and font-family on body. Defaults to true. */
  preflight: true,
});
```

## Extending

This preset exports helpful types and the generated theme colors directly for extending the theme to support application specific semantic colors.

```ts
# uno.config.ts

import { defineConfig } from 'unocss';
import { presetPrime, primeThemeColors, PrimeTheme } from 'unocss-preset-prime';

export default defineConfig({
  presets: [presetPrime()],
  theme: {
    colors: {
      success: primeThemeColors.green.base,
      error: primeThemeColors.red.base,
    },
  },
});
```
