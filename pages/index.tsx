import styled from '@emotion/styled';
import React, { useState } from 'react';

import Header from 'components/Header';
import { Button } from 'components/Button';
import Modal from 'components/Modal';

export default function Home() {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <Header title="연못 만들기" />
      <HomeStyled>
        <Button onClick={() => setVisibleModal(true)}>Modal Open</Button>
      </HomeStyled>
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
  );
}

const HomeStyled = styled.div``;
