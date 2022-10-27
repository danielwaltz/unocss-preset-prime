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

```js
# uno.config.ts

import { defineConfig } from 'unocss';
import presetPrime from 'unocss-preset-prime';

export default defineConfig({
  presets: [presetPrime()],
});

```
