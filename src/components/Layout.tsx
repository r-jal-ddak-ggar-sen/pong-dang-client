import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

export type LayoutProps = {
  children: ReactElement;
  header: null | ReactElement;
};

export function Layout({ children, header }: LayoutProps): ReactElement {
  return (
    <StyledWrapper>
      {header}
      <ContentsWrapper>{children}</ContentsWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ContentsWrapper = styled.div`
  flex: 1;
`;
