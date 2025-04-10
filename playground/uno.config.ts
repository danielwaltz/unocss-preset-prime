import { defineConfig, presetIcons, presetUno } from "unocss";
import { presetPrime } from "../dist";
import { primeColors } from "../dist/theme";

export default defineConfig({
  presets: [presetUno(), presetPrime({ icons: true }), presetIcons()],
  safelist: ["bg", "text"].flatMap((type) =>
    Object.keys(primeColors).flatMap((color) => `${type}-${color}`),
  ),
});
