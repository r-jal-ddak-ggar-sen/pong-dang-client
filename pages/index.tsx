import styled from '@emotion/styled';
import React, { useState } from 'react';

import Header from 'components/Header';
import { Button } from 'components/Button';
import Modal from 'components/Modal';
import Typo from 'components/Typo';
import { Layout } from 'components/Layout';

export default function Home() {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <Layout
      header={
        <Header
          right={
            <LogoutButton>
              <Typo font="CAPTION_01">로그아웃</Typo>
            </LogoutButton>
          }
        />
      }
    >
      <>
        <HomeView>
          <Button onClick={() => setVisibleModal(true)}>Modal Open</Button>
        </HomeView>
        {visibleModal && (
          <Modal
            title="아직 일기가 저장되지 않았어요."
            content="저장하지 않고 뒤로 가시겠어요?"
            prevButtonText="계속쓰기"
            onPrevButtonClick={() => setVisibleModal(false)}
            nextButtonText="뒤로가기"
            onNextButtonClick={() => setVisibleModal(false)}
          />
        )}
      </>
    </Layout>
  );
}

const HomeStyled = styled.section`
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const HomeView = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  padding: 0 15px;
`;

const LogoutButton = styled.button``;
