import React from 'react';
import styled from 'styled-components/native';

import Spacer from '../components/util/Spacer';
import HabitView from '../components/habit/HabitView';
import Logo from '../components/brand/Logo';

const Background = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #bbeccf;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #262f56;
`;

const Foreground = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 220px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  background-color: white;
`;

const HomeScreen = () => (
  <Background>
    <Spacer size={80} />
    <Title>Welcome Back</Title>
    <Spacer size={30} />
    <Logo />
    <Foreground>
      <HabitView name="health" />
      <Spacer size={40} />
      <HabitView name="social" />
      <Spacer size={40} />
      <HabitView name="productivity" />
      <Spacer size={40} />
    </Foreground>
  </Background>
);

export default HomeScreen;
