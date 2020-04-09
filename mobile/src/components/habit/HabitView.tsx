import React, { FC } from 'react';
import styled from 'styled-components/native';
import Spacer from '../util/Spacer';
import HabitBar from './HabitBar';
import HabitList from './HabitList';
import habitData from '../../data/habitData';

const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: black;
`;

const Container = styled.View``;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  name: keyof typeof habitData;
}

const HabitView: FC<Props> = (props) => {
  const habit = habitData[props.name];
  return (
    <Container>
      <Row>
        <Title>{habit.title}</Title>
        <HabitBar name={props.name} />
      </Row>
      <Spacer size={15} />
      <HabitList name={props.name} />
    </Container>
  );
};

export default HabitView;
