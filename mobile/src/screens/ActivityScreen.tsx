import React from 'react';
import styled from 'styled-components/native';

import Spacer from '../components/util/Spacer';
import Logo from '../components/brand/Logo';

const Background = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #262f56;
`;

const ActivityScreen = () => (
  <Background>
    <Spacer size={80} />
    <Title>Welcome Back</Title>
    <Spacer size={30} />
    <Logo />
  </Background>
);

export default ActivityScreen;
