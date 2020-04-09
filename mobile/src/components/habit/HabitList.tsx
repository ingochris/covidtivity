import React, { FC, Fragment } from 'react';
import styled from 'styled-components/native';

import ActivityCard from '../activity/ActivityCard';
import habitData from '../../data/habitData';
import Spacer from '../util/Spacer';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

interface Props {
  name: keyof typeof habitData;
}

const HabitList: FC<Props> = (props) => {
  const data = habitData[props.name];

  return (
    <Container>
      {[1, 2, 3].map((i) => (
        <Fragment key={i}>
          <ActivityCard name={props.name} />
          <Spacer size={20} />
        </Fragment>
      ))}
    </Container>
  );
};

export default HabitList;
