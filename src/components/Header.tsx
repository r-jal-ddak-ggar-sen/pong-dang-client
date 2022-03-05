import styled from '@emotion/styled';
import React from 'react';

import { theme } from 'src/utils/theme';
import Typo from 'src/components/Typo';

const Header = () => {
  return (
    <HeaderStyled>
      <Typo color={theme.GRAY_80}>Header</Typo>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div``;

export default Header;
