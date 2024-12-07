import {
  COLOR_RANGE,
  THEME_COLORS,
  type PrimeThemeColor as Color,
  type ColorRange,
} from "../utils/constants";

export function generateColorRange<T extends string>(color: T) {
  return COLOR_RANGE.reduce(
    (result, number) => ({
      ...result,
      [number]: `var(--${color}-${number})`,
    }),
    {} as { [K in ColorRange]: `var(--${T}-${K})` },
  );
}

export function generateColorRangeWithDefault<T extends string>(color: T) {
  const result = generateColorRange(color);
  return { ...result, DEFAULT: result[500] } as const;
}

export function generateThemeColors() {
  return THEME_COLORS.reduce(
    (result, color) => ({
      ...result,
      [color]: generateColorRangeWithDefault(color),
    }),
    {} as { [K in Color]: ReturnType<typeof generateColorRangeWithDefault<K>> },
  );
}
