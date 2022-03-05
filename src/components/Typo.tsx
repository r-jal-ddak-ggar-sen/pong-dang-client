import { ReactNode } from 'react';

import { FontType, getStyle, Align } from 'src/utils/font';
import { Theme, theme } from 'src/utils/theme';

type TypoTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface Props {
  tag?: TypoTag;
  children: ReactNode;
  font?: FontType;
  color?: keyof Theme;
  align?: Align;
}

const Typo = ({
  tag = 'p',
  children,
  font = FontType.BODY_01,
  color = 'GRAY_100',
  align = Align.LEFT,
}: Props) => {
  const TagComponent = tag as TypoTag;
  const style = getStyle(font);

  return (
    <TagComponent
      style={{
        fontFamily:
          style.weight === 700 ? 'IM_Hyemin-Bold' : 'IM_Hyemin-Regular',
        fontSize: style.size,
        fontWeight: style.weight,
        color: theme[color],
        textAlign: align,
        lineHeight: 1.4,
      }}
    >
      {children}
    </TagComponent>
  );
};

export default Typo;
