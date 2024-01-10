import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  rollup: {
    inlineDependencies: true,
    dts: {
      respectExternal: false,
    },
  },
});
