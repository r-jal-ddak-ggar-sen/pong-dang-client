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
    <BackgroundWrapper>
      <StyledWrapper backgroundColor={backgroundColor}>
        {header}
        <ContentsWrapper>{children}</ContentsWrapper>
      </StyledWrapper>
    </BackgroundWrapper>
  );
}

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.SECONDARY_BLUE_05};
`;

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
  position: relative;
  padding: 0 16px;
`;
