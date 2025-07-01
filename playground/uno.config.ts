import { defineConfig, presetIcons, presetWind4 } from "unocss";
import { presetPrime } from "../dist";
import { primeColors } from "../dist/theme";

export default defineConfig({
  presets: [presetWind4(), presetPrime({ icons: true }), presetIcons()],
  safelist: ["bg", "text"].flatMap((type) =>
    Object.keys(primeColors).flatMap((color) => `${type}-${color}`),
  ),
});
