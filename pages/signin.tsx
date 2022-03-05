import styled from '@emotion/styled';
import React, { useState, useCallback } from 'react';

import TextInput from 'components/TextInput';
import Typo from 'components/Typo';

export default function signin() {
  const [nickname, setNickname] = useState('');

  const handleChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length <= 12) {
        setNickname(e.target.value);
      }
    },
    [setNickname],
  );

  return (
    <SigninStyled>
      <SigninBox>
        <SigninItem>
          <Typo font="SUB_TITLE_02">닉네임</Typo>
          <TextInput
            value={nickname}
            onChangeInput={handleChangeNickname}
            placeholder="닉네임을 12글자 이내로 입력해주세요."
          />
        </SigninItem>
      </SigninBox>
    </SigninStyled>
  );
}

const SigninStyled = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 100px 15px;
`;

const SigninBox = styled.div`
  width: 100%;
`;

const SigninItem = styled.div`
  width: 100%;
`;
