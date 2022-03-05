import styled from '@emotion/styled';
import Link from 'next/link';

import Header from 'components/Header';
import { Layout } from 'components/Layout';
import Typo from 'components/Typo';

import ShareIcon from '../public/assets/icons/icon-share.svg';
import MusicIcon from '../public/assets/icons/icon-music.svg';
import WriteIcon from '../public/assets/icons/icon-write.svg';

import BackgroundImage from '../public/assets/images/image-diary-background.svg';
import InfoImage from '../public/assets/images/image-diary-info.svg';
import StickerOneImage from '../public/assets/images/image-diary-sticker-1.svg';
import StickerTwoImage from '../public/assets/images/image-diary-sticker-2.svg';
import StickerThreeImage from '../public/assets/images/image-diary-sticker-3.svg';
import StickerFourImage from '../public/assets/images/image-diary-sticker-4.svg';
import StickerFiveImage from '../public/assets/images/image-diary-sticker-5.svg';
import StickerSixImage from '../public/assets/images/image-diary-sticker-6.svg';
import StickerSevenImage from '../public/assets/images/image-diary-sticker-7.svg';
import StickerEightImage from '../public/assets/images/image-diary-sticker-8.svg';
import StickerNineImage from '../public/assets/images/image-diary-sticker-9.svg';
import StickerTenImage from '../public/assets/images/image-diary-sticker-10.svg';
import StickerElevenImage from '../public/assets/images/image-diary-sticker-11.svg';
import StickerTwelveImage from '../public/assets/images/image-diary-sticker-12.svg';

interface Props {
  pondId: number;
}

export default function Detail({ pondId }: Props) {
  const level = 12;

  return (
    <Layout
      header={
        <Header
          isBack
          right={
            <RightButtonStyled>
              <ShareButton>
                <ShareIcon />
              </ShareButton>
              <MusicButton>
                <MusicIcon />
              </MusicButton>
            </RightButtonStyled>
          }
        />
      }
    >
      <ShowDiaryButton>
        <Typo font="SUB_TITLE_02" color="PRIMARY_50">
          일기 보기
        </Typo>
      </ShowDiaryButton>
      <Link href="/write">
        <WriteButton>
          <WriteIcon />
        </WriteButton>
      </Link>
      <DetailImageBox>
        <DetailImageBackground>
          <BackgroundImage width="100%" height="100%" />
        </DetailImageBackground>
        <DetailImageInfo>
          <InfoImage />
        </DetailImageInfo>
        {level > 0 && (
          <DetailImageOne>
            <StickerOneImage />
          </DetailImageOne>
        )}
        {level > 1 && (
          <DetailImageTwo>
            <StickerTwoImage />
          </DetailImageTwo>
        )}
        {level > 2 && (
          <DetailImageThree>
            <StickerThreeImage />
          </DetailImageThree>
        )}
        {level > 3 && (
          <DetailImageFour>
            <StickerFourImage />
          </DetailImageFour>
        )}
        {level > 4 && (
          <DetailImageFive>
            <StickerFiveImage />
          </DetailImageFive>
        )}
        {level > 5 && (
          <DetailImageSix>
            <StickerSixImage />
          </DetailImageSix>
        )}
        {level > 6 && (
          <DetailImageSeven>
            <StickerSevenImage />
          </DetailImageSeven>
        )}
        {level > 7 && (
          <DetailImageEight>
            <StickerEightImage />
          </DetailImageEight>
        )}
        {level > 8 && (
          <DetailImageNine>
            <StickerNineImage />
          </DetailImageNine>
        )}
        {level > 9 && (
          <DetailImageTen>
            <StickerTenImage />
          </DetailImageTen>
        )}
        {level > 10 && (
          <DetailImageEleven>
            <StickerElevenImage />
          </DetailImageEleven>
        )}
        {level > 11 && (
          <DetailImageTwelve>
            <StickerTwelveImage />
          </DetailImageTwelve>
        )}
      </DetailImageBox>
    </Layout>
  );
}

const RightButtonStyled = styled.div``;

const ShareButton = styled.button`
  margin-right: 16px;
`;

const MusicButton = styled.button``;

const ShowDiaryButton = styled.a`
  display: inline-flex;
  position: absolute;
  top: 68px;
  right: 16px;
  padding-bottom: 2px;
  border-bottom: ${({ theme }) => `1px solid ${theme.PRIMARY_50}`};
  z-index: 998;
`;

const WriteButton = styled.a`
  display: inline-flex;
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 998;
`;

const DetailImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DetailImageBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const DetailImageInfo = styled.div`
  position: absolute;
  top: 434px;
  left: 24px;
`;

const DetailImageOne = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const DetailImageTwo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const DetailImageThree = styled.div`
  position: absolute;
  left: 34%;
  bottom: 0;
`;

const DetailImageFour = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
`;

const DetailImageFive = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
`;

const DetailImageSix = styled.div`
  position: absolute;
  left: 14%;
  bottom: 20%;
`;

const DetailImageSeven = styled.div`
  position: absolute;
  left: 42%;
  bottom: 28%;
`;

const DetailImageEight = styled.div`
  position: absolute;
  left: 20%;
  bottom: 22%;
`;

const DetailImageNine = styled.div`
  position: absolute;
  right: 18%;
  bottom: 16%;
`;

const DetailImageTen = styled.div`
  position: absolute;
  left: 40%;
  bottom: 43%;
`;

const DetailImageEleven = styled.div`
  position: absolute;
  left: 46%;
  bottom: 41%;
`;

const DetailImageTwelve = styled.div`
  position: absolute;
  left: 20%;
  bottom: 0;
`;

export async function getServerSideProps({ query }) {
  const pondId = query.pondId as string | undefined;

  if (!pondId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pondId,
    },
  };
}
