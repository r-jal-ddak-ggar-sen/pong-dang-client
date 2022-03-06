import styled from '@emotion/styled';
import axios from 'axios';
import { AvatarList } from 'components/AvatarList';
import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import Modal from 'components/Modal';
import TextInput from 'components/TextInput';
import Typo from 'components/Typo';
import UserContext from 'context/user';
import Router, { useRouter } from 'next/router';
import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import { instance } from 'src/utils/api';
import LockIcon from '../../public/assets/icons/icon-lock.svg';

export default function NewPond(): ReactElement {
  const [pondName, setPondName] = useState<string>('');
  const handleChangePondName = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setPondName(e.target.value);
  }, []);
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [friendList, setFriendList] = useState<string[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [friend, setFriend] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleClickCancel = useCallback(() => {
    setVisibleModal(false);
    setErrorMessage('');
    setFriend('');
  }, []);

  const handleClickInvite = useCallback(async () => {
    setErrorMessage('');
    if (friendList.includes(friend)) {
      setErrorMessage('이미 추가된 친구입니다.');
      return;
    }
    setFriendList([...friendList, friend]);

    //Todo 멤버 존재 조회
    //setErrorMessage('가입되지 않은 친구입니다.');
    setFriend('');
    setVisibleModal(false);
  }, [friend, friendList]);

  const handleClickRemove = useCallback((nickname: string) => {
    setFriendList((prev) => prev.filter((item) => item !== nickname));
  }, []);

  const { data } = useQuery('bgList', () =>
    instance.get('/image').then((res) => res.data),
  );

  useEffect(() => {
    setBackgroundUrl(data?.info?.backgroundUrl?.[0]);
  }, [data]);
  const { mid } = useContext(UserContext);
  const router = useRouter();
  const hadnleSubmit = useCallback(async () => {
    const result = await instance.post('/pond', {
      title: pondName,
      friendList,
      backgroundUrl,
      mid,
    });
    if (result.data.returnCode === '0000') {
      router.push('/');
    }
  }, [pondName, backgroundUrl, friendList, mid]);

  return (
    <Layout>
      <Box>
        <Container>
          <NameContainer>
            <Typo font="SUB_TITLE_02">연못 이름</Typo>
            <TextInput
              value={pondName}
              onChangeInput={handleChangePondName}
              placeholder="12글자 이내로 적어주세요."
            />
          </NameContainer>
          <BackGroundContainer>
            <Typo font="SUB_TITLE_02">배경을 선택해주세요.</Typo>
            <BackgroundList>
              {data?.info?.backgroundUrl?.map((src: string) => (
                <BackgroundItem src={src} key={src} />
              ))}
              <LockItem>
                <LockIcon />
              </LockItem>
              <LockItem>
                <LockIcon />
              </LockItem>
              <LockItem>
                <LockIcon />
              </LockItem>
            </BackgroundList>
          </BackGroundContainer>
          <FriendContainer>
            <FriendTitleContainer>
              <Typo font="SUB_TITLE_02">누구랑 같이 쓸건가요?</Typo>
              <Typo
                font="CAPTION_01"
                color={friendList.length === 15 ? 'ERROR_50' : 'GRAY_80'}
              >
                {friendList.length}/15
              </Typo>
            </FriendTitleContainer>
            <Button
              outline
              full
              onClick={() => setVisibleModal(true)}
              disabled={friendList.length === 15}
            >
              친구 초대하기
            </Button>
            <AvatarList list={friendList} onRemove={handleClickRemove} />
          </FriendContainer>
          {visibleModal && (
            <Modal
              title="초대할 친구의 닉네임을 적어주세요!"
              action={
                <InputContainner>
                  <TextInput
                    value={friend}
                    onChangeInput={(e) => setFriend(e.target.value)}
                    error={Boolean(errorMessage)}
                    placeholder="12글자 이내로 적어주세요"
                  />
                  <Typo
                    font="BODY_02"
                    color="ERROR_50"
                    css={{ marginTop: '8px' }}
                  >
                    {errorMessage}
                  </Typo>
                </InputContainner>
              }
              prevButtonText="취소"
              onPrevButtonClick={handleClickCancel}
              nextButtonText="초대하기"
              onNextButtonClick={handleClickInvite}
              isNextButtonDisabled={!Boolean(friend)}
            />
          )}
        </Container>
        <Button full onClick={hadnleSubmit}>
          만들기 완료!
        </Button>
      </Box>
    </Layout>
  );
}
const Box = styled.div`
  display: flex;
  height: calc(100% - 51px);
  margin-top: 51px;
  box-sizing: border-box;
  padding-bottom: 24px;
  flex-direction: column;
`;
const Container = styled.div`
  flex: 1;
`;
const NameContainer = styled.div``;
const BackGroundContainer = styled.div`
  margin-top: 56px;
`;

const BackgroundList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin-top: 18px;
  margin-bottom: 56px;
`;

const BackgroundItem = styled.li<{ src: string }>`
  width: 72px;
  height: 72px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.GRAY_70};
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://tiltil.s3.ap-northeast-2.amazonaws.com/pongdang/daye.png');
  background-size: 100%;
`;

const LockItem = styled.li`
  width: 72px;
  height: 72px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.GRAY_70};
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FriendContainer = styled.div``;

const FriendTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const InputContainner = styled.div`
  padding: 0 16px 56px;
  width: 100%;
  height: 110px;
  box-sizing: border-box;
`;
