import styled from '@emotion/styled';
import Header from 'components/Header';
import { Layout } from 'components/Layout';
import React from 'react';

export default function signup() {
  return <Layout header={<Header title='회원가입'/> } >signup</Layout>;
}

const SignupStyled = styled.div``;
