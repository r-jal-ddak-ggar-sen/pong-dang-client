import styled from '@emotion/styled';
import Link from 'next/link';

import { Button } from 'components/Button';
import Header from 'components/Header';
import { Layout } from 'components/Layout';
import Typo from 'components/Typo';
import WEATHER from 'src/constants/weather';
import { WeatherName } from 'src/models/weather';

import { sampleDiaryList } from './sampleDiaryList';

export default function Diary() {
  return (
    <Layout header={<Header isBack />}>
      <DiaryList>
        {sampleDiaryList.page.length <= 0 ? (
          <NoneDiaryList>
            <Typo color="GRAY_50" align="center" css={{ marginBottom: 32 }}>
              아직 친구와 나눈 일기가 없어요.
              <br />
              친구에게 나의 일상을 공유해볼까요?
            </Typo>
            <Button outline full>
              일기 쓰기
            </Button>
          </NoneDiaryList>
        ) : (
          sampleDiaryList.page.map((value, index) => {
            return (
              <Link key={value.id} href={`/read?diaryId=${value.id}`}>
                <DiaryItem
                  key={`diary-${value.id}`}
                  isPadding={index % 2 === 0}
                >
                  {/* TODO: 실제 데이터 받아올 때 타입 명시 */}
                  <WeatherIconStyled>
                    {WEATHER[value.weather as WeatherName].icon}
                  </WeatherIconStyled>
                  <Typo font="SUB_TITLE_02" css={{ marginTop: 10 }}>
                    {value.date}
                  </Typo>
                  <Typo
                    font="CAPTION_01"
                    color="GRAY_80"
                    css={{ marginTop: 8 }}
                  >
                    by. {value.writer}
                  </Typo>
                </DiaryItem>
              </Link>
            );
          })
        )}
      </DiaryList>
    </Layout>
  );
}

const DiaryList = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  overflow-y: scroll;
  margin-top: 56px;
  padding-top: 16px;
`;

const NoneDiaryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32vh;
`;

const DiaryItem = styled.a<{ isPadding: boolean }>`
  width: 48%;
  height: 120px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  background-color: ${({ theme }) => theme.GRAY_05};
  border-radius: 8px;
  padding: 12px;
  padding-top: 16px;
  margin-right: ${({ isPadding }) => isPadding && '4%'};
  margin-bottom: 16px;
`;

const WeatherIconStyled = styled.div`
  width: 36px;
  height: 36px;
`;
