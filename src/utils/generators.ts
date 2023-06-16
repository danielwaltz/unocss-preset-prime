import {
  COLOR_RANGE,
  ColorRange,
  THEME_COLORS,
  PrimeThemeColor as Color,
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

export const generateColorRangeWithDefault = <T extends string>(color: T) => {
  const result = generateColorRange(color);
  return { ...result, DEFAULT: result[500] } as const;
};

export const generateThemeColors = () => {
  return THEME_COLORS.reduce(
    (result, color) => ({
      ...result,
      [color]: generateColorRangeWithDefault(color),
    }),
    {} as { [K in Color]: ReturnType<typeof generateColorRangeWithDefault<K>> },
  );
};
