import { defineConfig, presetIcons, presetWind3 } from "unocss";
import { presetPrime } from "../dist";
import { primeColors } from "../dist/theme";

export default defineConfig({
  presets: [presetWind3(), presetPrime({ icons: true }), presetIcons()],
  safelist: ["bg", "text"].flatMap((type) =>
    Object.keys(primeColors).flatMap((color) => `${type}-${color}`),
  ),
});
