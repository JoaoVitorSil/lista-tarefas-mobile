import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './navigators/HomeTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}