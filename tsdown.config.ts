import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/theme.ts"],
  exports: true,
  dts: true,
});
