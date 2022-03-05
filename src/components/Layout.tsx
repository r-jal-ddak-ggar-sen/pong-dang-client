import styled from '@emotion/styled';
import React, { ReactElement, ReactNode } from 'react';
import { theme, Theme } from 'src/utils/theme';

export type LayoutProps = {
  children: ReactNode;
  header?: null | ReactElement;
  backgroundColor?: keyof Theme;
};

export function Layout({
  children,
  header,
  backgroundColor = 'WHITE',
}: LayoutProps): ReactElement {
  return (
    <StyledWrapper backgroundColor={backgroundColor}>
      {header}
      <ContentsWrapper>{children}</ContentsWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ backgroundColor: keyof Theme }>`
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  padding-top: 56px;
  padding-bottom: 24px;
`;
