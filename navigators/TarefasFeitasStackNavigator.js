import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TarefasFeitas from '../screens/TarefasFeitas';

const Stack = createStackNavigator();

export default function TarefasFeitasStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TarefasFeitas" component={TarefasFeitas} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}