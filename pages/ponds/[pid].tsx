import styled from '@emotion/styled';
import Link from 'next/link';

import Header from 'components/Header';
import { Layout } from 'components/Layout';
import Typo from 'components/Typo';

import ShareIcon from '../../public/assets/icons/icon-share.svg';
import MusicIcon from '../../public/assets/icons/icon-music.svg';
import WriteIcon from '../../public/assets/icons/icon-write.svg';
import BackgroundImage from '../../public/assets/images/image-diary-background.svg';
import InfoImage from '../../public/assets/images/image-diary-info.svg';
import StickerOneImage from '../../public/assets/images/image-diary-sticker-1.svg';
import StickerTwoImage from '../../public/assets/images/image-diary-sticker-2.svg';
import StickerThreeImage from '../../public/assets/images/image-diary-sticker-3.svg';
import StickerFourImage from '../../public/assets/images/image-diary-sticker-4.svg';
import StickerFiveImage from '../../public/assets/images/image-diary-sticker-5.svg';
import StickerSixImage from '../../public/assets/images/image-diary-sticker-6.svg';
import StickerSevenImage from '../../public/assets/images/image-diary-sticker-7.svg';
import StickerEightImage from '../../public/assets/images/image-diary-sticker-8.svg';
import StickerNineImage from '../../public/assets/images/image-diary-sticker-9.svg';
import StickerTenImage from '../../public/assets/images/image-diary-sticker-10.svg';
import StickerElevenImage from '../../public/assets/images/image-diary-sticker-11.svg';
import StickerTwelveImage from '../../public/assets/images/image-diary-sticker-12.svg';

interface Props {
  pondId: number;
}

export default function Pond({ pondId }: Props) {
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
      <Link href={`/ponds/${pondId}/diaries`}>
        <ShowDiaryButton>
          <Typo font="SUB_TITLE_02" color="PRIMARY_50">
            일기 보기
          </Typo>
        </ShowDiaryButton>
      </Link>
      <Link href={`/ponds/${pondId}/diaries/new`}>
        <WriteButton>
          <WriteIcon />
        </WriteButton>
      </Link>
      <PondImageBox>
        <PondImageBackground>
          <BackgroundImage width="100%" height="100%" />
        </PondImageBackground>
        <PondImageInfo>
          <InfoImage />
        </PondImageInfo>
        {level > 0 && (
          <PondImageOne>
            <StickerOneImage />
          </PondImageOne>
        )}
        {level > 1 && (
          <PondImageTwo>
            <StickerTwoImage />
          </PondImageTwo>
        )}
        {level > 2 && (
          <PondImageThree>
            <StickerThreeImage />
          </PondImageThree>
        )}
        {level > 3 && (
          <PondImageFour>
            <StickerFourImage />
          </PondImageFour>
        )}
        {level > 4 && (
          <PondImageFive>
            <StickerFiveImage />
          </PondImageFive>
        )}
        {level > 5 && (
          <PondImageSix>
            <StickerSixImage />
          </PondImageSix>
        )}
        {level > 6 && (
          <PondImageSeven>
            <StickerSevenImage />
          </PondImageSeven>
        )}
        {level > 7 && (
          <PondImageEight>
            <StickerEightImage />
          </PondImageEight>
        )}
        {level > 8 && (
          <PondImageNine>
            <StickerNineImage />
          </PondImageNine>
        )}
        {level > 9 && (
          <PondImageTen>
            <StickerTenImage />
          </PondImageTen>
        )}
        {level > 10 && (
          <PondImageEleven>
            <StickerElevenImage />
          </PondImageEleven>
        )}
        {level > 11 && (
          <PondImageTwelve>
            <StickerTwelveImage />
          </PondImageTwelve>
        )}
      </PondImageBox>
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

const PondImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PondImageBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const PondImageInfo = styled.div`
  position: absolute;
  top: 434px;
  left: 24px;
`;

const PondImageOne = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const PondImageTwo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const PondImageThree = styled.div`
  position: absolute;
  left: 34%;
  bottom: 0;
`;

const PondImageFour = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
`;

const PondImageFive = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
`;

const PondImageSix = styled.div`
  position: absolute;
  left: 14%;
  bottom: 20%;
`;

const PondImageSeven = styled.div`
  position: absolute;
  left: 42%;
  bottom: 28%;
`;

const PondImageEight = styled.div`
  position: absolute;
  left: 20%;
  bottom: 22%;
`;

const PondImageNine = styled.div`
  position: absolute;
  right: 18%;
  bottom: 16%;
`;

const PondImageTen = styled.div`
  position: absolute;
  left: 40%;
  bottom: 43%;
`;

const PondImageEleven = styled.div`
  position: absolute;
  left: 46%;
  bottom: 41%;
`;

const PondImageTwelve = styled.div`
  position: absolute;
  left: 20%;
  bottom: 0;
`;

export async function getServerSideProps({ params }) {
  const pondId = params.pid;

  return {
    props: {
      pondId,
    },
  };
}
