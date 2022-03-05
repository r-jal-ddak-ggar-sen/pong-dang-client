import styled from '@emotion/styled';
import { useState } from 'react';
import Link from 'next/link';

import Modal from 'components/Modal';
import Typo from 'components/Typo';
import Header from 'components/Header';
import { Layout } from 'components/Layout';

import { samplePondList } from './samplePondList';

export default function Home() {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleLogoutButtonClick = () => {
    setVisibleModal(false);
  };

  return (
    <Layout
      header={
        <Header
          right={
            <LogoutButton onClick={() => setVisibleModal(true)}>
              <Typo font="CAPTION_01">로그아웃</Typo>
            </LogoutButton>
          }
        />
      }
      backgroundColor={'GRAY_05'}
    >
      <Link href={`/create`}>
        <MakePondButton>
          <Typo align="center">연못만들기</Typo>
        </MakePondButton>
      </Link>
      <PondList>
        {samplePondList.length <= 0 ? (
          <NonePond>
            <Typo color="GRAY_50" align="center">
              아직 연못이 없어요 :)
              <br />
              친구와 함께 연못을 만들어봐요!
            </Typo>
          </NonePond>
        ) : (
          samplePondList.map((value) => {
            return (
              <Link key={value.id} href={`/detail?pondId=${value.id}`}>
                <PondItem key={`pond-${value.id}`}>
                  <PondItemInfo>
                    <Typo font="TITLE_01" css={{ marginBottom: 8 }}>
                      {value.title}
                    </Typo>
                    <Typo font="BODY_02" color="GRAY_70">
                      {value.owners[0]}{' '}
                      {value.owners.length > 1 &&
                        `외 ${value.owners.length - 1}명`}
                    </Typo>
                  </PondItemInfo>
                  <PondItemImage src={value.backgroundImage} />
                </PondItem>
              </Link>
            );
          })
        )}
      </PondList>
      {visibleModal && (
        <Modal
          title="로그아웃 하시겠어요?"
          content="다시 로그인 하기 위해 꼭 닉네임과 비밀번호를 기억해주세요!"
          prevButtonText="취소"
          onPrevButtonClick={() => setVisibleModal(false)}
          nextButtonText="로그아웃"
          onNextButtonClick={handleLogoutButtonClick}
        />
      )}
    </Layout>
  );
}

const MakePondButton = styled.a`
  width: 80px;
  height: 80px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.GRAY_20};
  border-radius: 50%;
  margin-top: 24px;
  margin-bottom: 32px;
`;

const NonePond = styled.div`
  margin-top: 20vh;
`;

const PondList = styled.div`
  width: 100%;
  height: 60vh;
  overflow-y: scroll;
`;

const PondItem = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.WHITE};
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
`;

const PondItemInfo = styled.div``;

const PondItemImage = styled.img``;

const LogoutButton = styled.button``;
