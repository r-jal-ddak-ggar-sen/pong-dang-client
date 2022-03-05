import styled from '@emotion/styled';
import React from 'react';

import Header from 'components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <HomeStyled>Home</HomeStyled>
    </>
  );
}

const HomeStyled = styled.div``;
