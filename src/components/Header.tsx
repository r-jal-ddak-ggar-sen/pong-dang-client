import styled from '@emotion/styled';
import React from 'react';

import { theme } from 'src/utils/theme';
import Typo from 'src/components/Typo';
import { FontType } from 'src/utils/font';

const Header = () => {
  return (
    <HeaderStyled>
      <Typo font={FontType.HEAD_01} color={theme.GRAY_80}>
        헤더
      </Typo>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div``;

export default Header;
