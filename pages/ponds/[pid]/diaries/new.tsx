import styled from '@emotion/styled';
import Header from 'components/Header';
import { Layout } from 'components/Layout';
import Typo from 'components/Typo';
import React, { ReactElement, useCallback, useContext, useState } from 'react';
import MoodGood from '../../../../public/assets/images/mood-good.svg';
import MoodAngry from '../../../../public/assets/images/mood-angry.svg';
import MoodLonely from '../../../../public/assets/images/mood-lonely.svg';
import MoodSad from '../../../../public/assets/images/mood-sad.svg';
import MoodSoso from '../../../../public/assets/images/mood-soso.svg';
import { Button } from 'components/Button';
import UserContext from 'context/user';
import { instance } from 'src/utils/api';
import { useRouter } from 'next/router';

export default function NewDiary(): ReactElement {
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('GOOD');
  const { mid } = useContext(UserContext);
  const router = useRouter();
  const { pid } = router.query;
  const handleSubmit = useCallback(async () => {
    const result = await instance.post('/diary', {
      pondId: pid,
      mid,
      mood,
      content,
    });
    console.log(result);
  }, [pid, mid, mood, content]);
  return (
    <Layout header={<Header title="일기 쓰기" isBack />}>
      <Container>
        <Typo font="SUB_TITLE_02">오늘은 기분이 어땠나요?</Typo>
        <MoodContainer>
          <MoodItem selected={mood === 'GOOD'}>
            <MoodGood />
            <Typo font="CAPTION_01" align="center">
              좋음
            </Typo>
          </MoodItem>
          <MoodItem selected={mood === 'SAD'}>
            <MoodSad />
            <Typo font="CAPTION_01" align="center">
              슬픔
            </Typo>
          </MoodItem>
          <MoodItem selected={mood === 'ANGRY'}>
            <MoodAngry />
            <Typo font="CAPTION_01" align="center">
              화남
            </Typo>
          </MoodItem>
          <MoodItem selected={mood === 'SOSO'}>
            <MoodSoso />
            <Typo font="CAPTION_01" align="center">
              무난함
            </Typo>
          </MoodItem>
          <MoodItem selected={mood === 'LONELY'}>
            <MoodLonely />
            <Typo font="CAPTION_01" align="center">
              외로움
            </Typo>
          </MoodItem>
        </MoodContainer>
        <Typo font="SUB_TITLE_02">하루를 남겨보세요.</Typo>
        <StyledTextArea
          placeholder="오늘 하루를 어떻게 보내셨나요?&#13;&#10;친구와 공유하고 싶은 고민이나&#13;&#10;에피소드가 있나요?&#13;&#10;편하게 일기를 적어보세요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button full disabled={!content} onClick={handleSubmit}>
          쓰기 완료!
        </Button>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  margin-top: 83px; ;
`;

const MoodContainer = styled.div`
  background-color: ${({ theme }) => theme.GRAY_05};
  height: 106px;
  width: 328px;
  margin: auto;
  border-radius: 12px;
  margin-top: 12px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  padding: 25px;
  gap: 24px;
`;

const MoodItem = styled.div<{ selected?: boolean }>`
  height: 60px;
  width: 36px;
  transform: ${({ selected = false }) => selected && 'scale(1.1)'};
`;

const StyledTextArea = styled.textarea`
  height: 320px;
  width: 100%;
  margin: auto;
  margin-top: 14px;
  background-color: ${({ theme }) => theme.GRAY_05};
  resize: none;
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 26px;
`;
