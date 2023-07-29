import { defineConfig, presetIcons, presetUno } from 'unocss';
import { presetPrime } from '../dist';

export default defineConfig({
  presets: [presetUno(), presetPrime({ icons: true }), presetIcons()],
  safelist: ['bg', 'text'].flatMap((type) =>
    [
      'blue',
      'green',
      'yellow',
      'cyan',
      'pink',
      'indigo',
      'teal',
      'orange',
      'bluegray',
      'purple',
      'red',
      'gray',
      'primary',
      'surface',
    ].flatMap((color) => `${type}-${color}`),
  ),
});
