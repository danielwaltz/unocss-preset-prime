import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/index", "./src/theme"],
  declaration: true,
  externals: ["@unocss/preset-mini"],
});
