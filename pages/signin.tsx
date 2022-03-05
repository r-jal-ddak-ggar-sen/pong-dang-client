import styled from '@emotion/styled';
import React, { useState, useCallback } from 'react';

import TextInput from 'components/TextInput';
import Typo from 'components/Typo';
import { Layout } from 'components/Layout';
import Header from 'components/Header';

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
    <Layout header={<Header title='로그인' />}>
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
    </Layout>
  );
}

const SigninBox = styled.div`
  width: 100%;
`;

const SigninItem = styled.div`
  width: 100%;
`;
