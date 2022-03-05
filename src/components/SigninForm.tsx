import styled from '@emotion/styled';
import React, { ReactElement, useCallback, useState } from 'react';
import { Button } from './Button';
import TextInput from './TextInput';
import Typo from './Typo';

export function SigninForm(): ReactElement {
  const [nickname, setNickname] = useState<string>('');
  const handleChangeNickname = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setNickname(e.target.value);
  }, []);
  const [password, setPassword] = useState<string>('');
  const handleChangePassword = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((e) => {
    setPassword(e.target.value);
  }, []);
  //TODO 로그인 api 추가
  return (
    <StyledForm>
      <InputWrapper>
        <InputContainer>
          <Typo font="BODY_02">닉네임</Typo>
          <TextInput
            onChangeInput={handleChangeNickname}
            value={nickname}
            placeholder="12자 내로 입력해주세요."
          />
        </InputContainer>
        <InputContainer>
          <Typo font="BODY_02">패스워드</Typo>
          <TextInput
            onChangeInput={handleChangePassword}
            value={password}
            password
            placeholder="비밀번호를 입력해주세요."
          />
        </InputContainer>
      </InputWrapper>
      <Button full>로그인하기</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const InputContainer = styled.div``;
