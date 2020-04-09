import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} mode={'modal'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        {/* <Stack.Screen name="Rewards" component={RewardScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
