import React, { FC } from 'react';
import styled from 'styled-components/native';
import habitData from '../../data/habitData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ActivityIcon = styled.View<{ color: string }>`
  height: 100px;
  width: 100px;
  background-color: ${(p) => p.color};
  border-radius: 10px;
`;

interface Props {
  name: keyof typeof habitData;
  activity: string;
}

const ActivityCard: FC<Props> = (props) => {
  const navigation = useNavigation();
  const data = habitData[props.name];
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Activity', {
          name: props.name,
          activity: props.activity,
        })
      }
    >
      <ActivityIcon color={data.color} />
    </TouchableOpacity>
  );
};

export default ActivityCard;
