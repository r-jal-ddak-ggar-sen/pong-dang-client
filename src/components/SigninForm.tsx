import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { instance } from 'src/utils/api';
import { Button } from './Button';
import TextInput from './TextInput';
import Typo from './Typo';

export function SigninForm(): ReactElement {
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
  const handleSubmit = useCallback(async () => {
    if (!valid()) {
      return false;
    }
    try {
      const { data } = await instance.post('/login', {
        nickName: nickname,
        password,
      });
      if (data.returnCode === '0000') {
        //Todo context api 추가
        router.push('/');
      } else {
        setNicknameError('닉네임을 확인해주세요.');
        setPasswordError('패스워드를 확인해주세요.');
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
        로그인
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
