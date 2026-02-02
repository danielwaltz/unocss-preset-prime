interface GenerateColorRangeOptions<
  TColors extends string[] = string[],
  TRange extends number[] = number[],
  TRangeDefault = TRange[number],
  TPrefix extends string = string,
> {
  colors: TColors;
  range: TRange;
  rangeDefault: TRangeDefault;
  prefix: TPrefix;
}

export function generateColorRange<
  TColor extends TColors[number],
  TColors extends string[],
  TRange extends number[],
  TRangeDefault extends TRange[number],
  TPrefix extends string,
>(
  color: TColor,
  options: GenerateColorRangeOptions<TColors, TRange, TRangeDefault, TPrefix>,
) {
  const { prefix, range } = options;

  return range.reduce(
    (result, number) => ({
      ...result,
      [number]: `var(--${prefix}${color}-${number})`,
    }),
    {} as { [K in TRange[number]]: `var(--${TPrefix}${TColor}-${K})` },
  );
}

export function generateColorRangeWithDefault<
  TColor extends TColors[number],
  TColors extends string[],
  TRange extends number[],
  TRangeDefault extends TRange[number],
  TPrefix extends string,
>(
  color: TColor,
  options: GenerateColorRangeOptions<TColors, TRange, TRangeDefault, TPrefix>,
) {
  const result = generateColorRange(color, options);
  return { ...result, DEFAULT: result[options.rangeDefault] } as const;
}

export function generateThemeColors<
  TColors extends string[],
  TRange extends number[],
  TRangeDefault extends TRange[number],
  TPrefix extends string,
>(options: GenerateColorRangeOptions<TColors, TRange, TRangeDefault, TPrefix>) {
  return options.colors.reduce(
    (result, color) => ({
      ...result,
      [color]: generateColorRangeWithDefault(color, options),
    }),
    {} as {
      [Color in TColors[number]]: ReturnType<
        typeof generateColorRangeWithDefault<
          Color,
          TColors,
          TRange,
          TRangeDefault,
          TPrefix
        >
      >;
    },
  );
}
