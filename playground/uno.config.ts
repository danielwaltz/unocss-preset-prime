import { defineConfig, presetIcons, presetWind4 } from "unocss";
import { presetPrime } from "../dist/index.mjs";
import { primeUixColors } from "../dist/theme.mjs";

export default defineConfig({
  presets: [presetWind4(), presetIcons(), presetPrime({ icons: true })],
  safelist: ["bg", "text"].flatMap((type) =>
    Object.keys(primeUixColors).flatMap((color) => `${type}-${color}`),
  ),
});
