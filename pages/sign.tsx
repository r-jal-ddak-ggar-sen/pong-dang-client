import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import Typo from 'components/Typo';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import Logo from '../public/assets/images/logo.svg';

export default function sign(): ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <Title>
        <Typo font="TITLE_01" align="center">
          너와 내가 만드는 감정연못
        </Typo>
        <Logo />
      </Title>
      <Button full onClick={() => router.push('/signin')}>
        로그인하기
      </Button>
      <ButtonWrapper>
        <Button outline full onClick={() => router.push('/signup')}>
          회원가입하기
        </Button>
      </ButtonWrapper>
      <StyledImage>
        <img src="/assets/images/image-sign.png" width="100%" />
      </StyledImage>
    </Layout>
  );
}
const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 134px 0 42px;
`;

const StyledImage = styled.div`
  position: absolute;
  width: 100%;
  margin-left: -16px;
  bottom: 0;
`;
