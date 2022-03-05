import styled from '@emotion/styled';
import React from 'react';
import { Layout } from 'components/Layout';
import { SigninForm } from 'components/SigninForm';
import Header from 'components/Header';

export default function signin() {
  return (
    <Layout header={<Header title="로그인" />}>
      <SigninForm />
    </Layout>
  );
}
