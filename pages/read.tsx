import styled from '@emotion/styled';

import Header from 'components/Header';
import { Layout } from 'components/Layout';
import Typo from 'components/Typo';
import WEATHER from 'src/constants/weather';
import { WeatherName } from 'src/models/weather';

import MoreIcon from '../public/assets/icons/icon-more.svg';

import { sampleDiaryList } from './sampleDiaryList';

interface Props {
  diaryId: number;
}

export default function Read({ diaryId }: Props) {
  return (
    <Layout
      header={
        <Header
          isBack
          right={
            <MoreButton>
              <MoreIcon />
            </MoreButton>
          }
        />
      }
    >
      <ReadTitle>
        <Typo font="TITLE_01">{sampleDiaryList.page[0].date}</Typo>
        <WeatherStyled>
          {WEATHER[sampleDiaryList.page[0].weather as WeatherName].icon}
          <Typo font="SUB_TITLE_02" color="GRAY_80" css={{ marginLeft: 4 }}>
            {WEATHER[sampleDiaryList.page[0].weather as WeatherName].name}
          </Typo>
        </WeatherStyled>
      </ReadTitle>
      <ReadInfo>
        <Typo font="BODY_01" color="GRAY_70" css={{ marginBottom: 24 }}>
          {sampleDiaryList.page[0].writer}
        </Typo>
        <Typo>{sampleDiaryList.page[0].content}</Typo>
      </ReadInfo>
    </Layout>
  );
}

const MoreButton = styled.button``;

const ReadTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 56px;
  padding-top: 24px;
`;

const WeatherStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.GRAY_05};
  border-radius: 12px;
  padding: 8px;
`;

const ReadInfo = styled.div`
  width: 100%;
  height: calc(100vh - 154px);
  background-color: ${({ theme }) => theme.GRAY_05};
  border-radius: 12px;
  margin-top: 24px;
  padding: 16px;
  white-space: pre-line;
`;

export async function getServerSideProps({ query }) {
  const diaryId = query.diaryId as string | undefined;

  if (!diaryId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      diaryId,
    },
  };
}
