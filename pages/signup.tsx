import styled from '@emotion/styled';
import Header from 'components/Header';
import { Layout } from 'components/Layout';
import { SignupForm } from 'components/SignupForm';
import React from 'react';

export default function signup() {
  return (
    <Layout header={<Header title="회원가입" isBack />}>
      <SignupForm />
    </Layout>
  );
}
