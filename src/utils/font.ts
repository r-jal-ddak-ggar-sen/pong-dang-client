const Weight = {
  BOLD: 700,
  MEDIUM: 500,
  REGULAR: 400,
} as const;

const FontSize = {
  SIZE_24: 24,
  SIZE_20: 20,
  SIZE_18: 18,
  SIZE_16: 16,
  SIZE_14: 14,
  SIZE_12: 12,
} as const;

const Align = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

const FontType = {
  HEAD_01: 'HEAD_01',
  HEAD_02: 'HEAD_02',
  HEAD_03: 'HEAD_03',
  HEAD_04: 'HEAD_04',

  TITLE_01: 'TITLE_01',
  TITLE_02: 'TITLE_02',

  SUB_TITLE_01: 'SUB_TITLE_01',
  SUB_TITLE_02: 'SUB_TITLE_02',

  BODY_01: 'BODY_01',
  BODY_02: 'BODY_02',

  BUTTON_REGULAR: 'BUTTON_REGULAR',
  BUTTON_SMALL: 'BUTTON_SMALL',

  CAPTION_01: 'CAPTION_01',
} as const;

type Align = typeof Align[keyof typeof Align];
type FontType = typeof FontType[keyof typeof FontType];
type FontStyle = { size: number; weight: number };

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Font {
  export const getStyle = (font: FontType): FontStyle => {
    console.log(font);
    return {
      weight: getWeight(font),
      size: getSize(font),
    };
  };

  const getSize = (font: FontType) => {
    switch (font) {
      case FontType.HEAD_01:
      case FontType.HEAD_02: {
        return FontSize.SIZE_24;
      }

      case FontType.HEAD_03:
      case FontType.HEAD_04: {
        return FontSize.SIZE_20;
      }

      case FontType.TITLE_01:
      case FontType.TITLE_02: {
        return FontSize.SIZE_18;
      }

      case FontType.SUB_TITLE_01:
      case FontType.BODY_01:
      case FontType.BUTTON_REGULAR: {
        return FontSize.SIZE_16;
      }

      case FontType.SUB_TITLE_02:
      case FontType.BODY_02:
      case FontType.BUTTON_SMALL: {
        return FontSize.SIZE_14;
      }

      case FontType.CAPTION_01: {
        return FontSize.SIZE_12;
      }
    }

    return FontSize.SIZE_14;
  };

  const getWeight = (font: FontType) => {
    switch (font) {
      case FontType.HEAD_01:
      case FontType.HEAD_03:
      case FontType.TITLE_01:
      case FontType.SUB_TITLE_01:
      case FontType.SUB_TITLE_02:
      case FontType.BUTTON_REGULAR: {
        return Weight.BOLD;
      }

      case FontType.BUTTON_SMALL: {
        return Weight.MEDIUM;
      }

      case FontType.HEAD_02:
      case FontType.HEAD_04:
      case FontType.TITLE_02:
      case FontType.BODY_01:
      case FontType.BODY_02:
      case FontType.CAPTION_01: {
        return Weight.REGULAR;
      }
    }

    return Weight.REGULAR;
  };
}

export { Font, FontType, Align };
