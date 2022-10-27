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
# unocss.config.ts
import { defineConfig } from 'unocss';
import presetPrime from 'unocss-preset-prime';

// https://uno.antfu.me/
export default defineConfig({
  presets: [presetPrime()],
});

```
