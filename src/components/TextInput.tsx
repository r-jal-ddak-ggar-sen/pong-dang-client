import styled from '@emotion/styled';
import React from 'react';

import { Align, FontType, getStyle } from 'src/utils/font';
import { theme, Theme } from 'src/utils/theme';

interface Props {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  font?: FontType;
  color?: keyof Theme;
  align?: Align;
}

const TextInput = ({
  value,
  onChangeInput,
  placeholder,
  font = FontType.BODY_01,
  color = 'GRAY_100',
  align = Align.LEFT,
}: Props) => {
  const style = getStyle(font);

  return (
    <TextInputStyled
      value={value}
      onChange={onChangeInput}
      placeholder={placeholder}
      size={style.size}
      weight={style.weight}
      color={color}
      align={align}
    />
  );
};

const TextInputStyled = styled.input<{
  size: number;
  weight: number;
  color: string;
  align: string;
}>`
  width: 100%;
  font-family: ${({ weight }) =>
    weight === 700 ? 'IM_Hyemin-Bold' : 'IM_Hyemin-Regular'};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  padding: 15px 0;
  border-bottom: 2px solid ${theme.PRIMARY_50};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${theme.GRAY_50};
  }
`;

export default TextInput;
