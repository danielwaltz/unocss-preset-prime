import {
  COLOR_RANGE,
  ColorRange,
  THEME_COLORS,
  PrimeThemeColor,
} from '@/utils/constants';

export const generateColorRange = <T extends string>(color: T) => {
  return COLOR_RANGE.reduce(
    (result, number) => ({
      ...result,
      [number]: `var(--${color}-${number})`,
    }),
    {} as { [K in ColorRange]: `var(--${T}-${K})` },
  );
};

export const generateThemeColors = () => {
  return THEME_COLORS.reduce(
    (result, color) => ({
      ...result,
      [color]: { ...generateColorRange(color) },
    }),
    {} as { [K in PrimeThemeColor]: ReturnType<typeof generateColorRange<K>> },
  );
};
