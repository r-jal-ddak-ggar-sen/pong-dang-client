import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import Typo from './Typo';

export type ButtonProps = {
  children: string;
  disabled?: boolean;
  outline?: boolean;
  full?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  disabled = false,
  outline = false,
  full = false,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <StyledButton
      disabled={disabled}
      outline={outline}
      full={full}
      onClick={onClick}
    >
      <Typo color={outline ? 'PRIMARY_50' : 'WHITE'} align="center">
        {children}
      </Typo>
    </StyledButton>
  );
}

const StyledButton = styled.button<{ outline: boolean; full: boolean }>`
  background-color: ${({ theme, outline }) =>
    outline ? 'inherit' : theme.PRIMARY_50};
  border-width: ${({ outline }) => outline && '1px'};
  border-style: ${({ outline }) => outline && 'solid'};
  border-color: ${({ theme, outline }) => outline && theme.PRIMARY_50};
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({ full }) => (full ? '100%' : '128px')};
  height: 52px;
  padding: 13px;

  &:hover,
  &:active {
    background-color: ${({ theme, outline }) =>
      outline ? theme.GRAY_05 : theme.PRIMARY_60};
    border-color: ${({ theme, outline }) => outline && theme.PRIMARY_60};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.GRAY_20};
  }
`;
