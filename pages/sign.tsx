import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import Typo from 'components/Typo';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

export default function sign(): ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <Typo font="TITLE_01" align="center" css={{ margin: '120px 0' }}>
        너와 내가 만드는 감정연못
      </Typo>
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

const StyledImage = styled.div`
  position: absolute;
  width: 100%;
  margin-left: -16px;
  bottom: 0;
`;
