import styled from '@emotion/styled';
import UserContext from 'context/user';
import { useRouter } from 'next/router';
import React, {
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { instance } from 'src/utils/api';
import { Button } from './Button';
import TextInput from './TextInput';
import Typo from './Typo';

export function SignupForm(): ReactElement {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const handleChangeNickname = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setNickname(e.target.value);
  }, []);
  const [nicknameError, setNicknameError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleChangePassword = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setPassword(e.target.value);
  }, []);
  const [passwordError, setPasswordError] = useState<string>('');
  const disabled = useMemo(() => {
    return !nickname || !password;
  }, [nickname, password]);
  const valid = useCallback(() => {
    let result = true;
    setNicknameError('');
    setPasswordError('');
    if (nickname.length > 12) {
      result = false;
      setNicknameError('닉네임은 12자 이내입니다.');
    }
    if (password.length < 4 || password.length > 20) {
      result = false;
      setPasswordError('패스워드는 4~20자 이내입니다.');
    }
    return result;
  }, [nickname, password]);
  const { setMid } = useContext(UserContext);
  const handleSubmit = useCallback(async () => {
    if (!valid()) {
      return false;
    }
    try {
      const { data } = await instance.post('/member', {
        nickName: nickname,
        password,
      });
      if (data.returnCode === '0000') {
        setMid?.(data.info.mid);
        router.push('/');
      } else {
        setNicknameError('중복된 닉네임 입니다. 닉네임을 변경해주세요.');
      }
    } catch (e) {}
  }, [valid, nickname, password]);
  return (
    <StyledForm>
      <InputWrapper>
        <InputContainer>
          <Typo font="BODY_02">닉네임</Typo>
          <TextInput
            onChangeInput={handleChangeNickname}
            value={nickname}
            placeholder="12자 내로 입력해주세요."
            error={Boolean(nicknameError)}
          />
          {nicknameError && (
            <Typo font="BODY_02" css={{ marginTop: '8px' }} color={'ERROR_50'}>
              {nicknameError}
            </Typo>
          )}
        </InputContainer>
        <InputContainer>
          <Typo font="BODY_02">패스워드</Typo>
          <TextInput
            onChangeInput={handleChangePassword}
            value={password}
            password
            placeholder="4~20자 이내로 입력해주세요."
            error={Boolean(passwordError)}
          />
          {passwordError && (
            <Typo font="BODY_02" css={{ marginTop: '8px' }} color={'ERROR_50'}>
              {passwordError}
            </Typo>
          )}
        </InputContainer>
      </InputWrapper>
      <Button full disabled={disabled} onClick={handleSubmit}>
        회원가입 완료
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  height: 100%;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const InputContainer = styled.div``;
