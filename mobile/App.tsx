import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;

const Spacer = styled.View`
  height: ${p => p.size}px;
`;

const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

const _Icon = styled.View`
  height: 150;
  width: 200;
  border-radius: 20;
  background-color: gray;
`;

export default function App() {
  return (
    <Container>
      <Spacer size={70} />
      <Title>Welcome Back</Title>
      <Spacer size={70} />
      <_Icon />
      <Spacer size={70} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
