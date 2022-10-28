import {
  COLOR_RANGE,
  ColorRange as Range,
  THEME_COLORS,
  PrimeThemeColor as Color,
} from '@/utils/constants';

export const generateColorRange = <T extends string>(color: T) => {
  return COLOR_RANGE.reduce(
    (result, number) => ({
      ...result,
      [number]: `var(--${color}-${number})`,
    }),
    {} as { [K in Range]: `var(--${T}-${K})` },
  );
};

export const generateColorRangeWithBase = <T extends string>(color: T) => {
  const result = generateColorRange(color);
  return { ...result, base: result[500] } as const;
};

export const generateThemeColors = () => {
  return THEME_COLORS.reduce(
    (result, color) => ({
      ...result,
      [color]: { ...generateColorRangeWithBase(color) },
    }),
    {} as { [K in Color]: ReturnType<typeof generateColorRangeWithBase<K>> },
  );
};
