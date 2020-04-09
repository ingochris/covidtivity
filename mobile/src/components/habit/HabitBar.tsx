import React, { FC } from 'react';
import styled from 'styled-components/native';

import habitData from '../../data/habitData';

const WIDTH = 200;

const Container = styled.View<{ width: number }>`
  width: ${(p) => p.width};
  height: 20px;
`;

const BarPiece = styled.View<{ color: string; width: number; zIndex: number }>`
  position: absolute;
  left: 0px;
  width: ${(p) => p.width};
  height: 20px;
  background-color: ${(p) => p.color};
  border-radius: 10px;
  z-index: ${(p) => p.zIndex};
`;

interface Props {
  name: keyof typeof habitData;
}

const HabitBar: FC<Props> = (props) => {
  const data = habitData[props.name];
  return (
    <Container width={WIDTH}>
      <BarPiece width={WIDTH} color="#F0F0F0" zIndex={5} />
      <BarPiece width={WIDTH * data.percent} color={data.color} zIndex={10} />
    </Container>
  );
};

export default HabitBar;
