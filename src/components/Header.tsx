import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import Typo from 'src/components/Typo';

interface Props {
  title?: string;
  isBack?: boolean;
  right?: React.ReactNode;
}

const Header = ({ title, isBack = false, right }: Props) => {
  const router = useRouter();

  return (
    <HeaderStyled>
      {isBack && (
        <HeaderLeft>
          <BackButton onClick={() => router.back()}>
            <Typo font="CAPTION_01">뒤로가기</Typo>
          </BackButton>
        </HeaderLeft>
      )}
      <Typo font="TITLE_01">{title}</Typo>
      <HeaderRight>{right}</HeaderRight>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

const HeaderLeft = styled.div`
  position: absolute;
  left: 16px;
`;

const BackButton = styled.button``;

const HeaderRight = styled.div`
  position: absolute;
  right: 16px;
`;

export default Header;
