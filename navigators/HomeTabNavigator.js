import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeStackNavigator from './HomeStackNavigator';
import TarefasFeitasStackNavigator from './TarefasFeitasStackNavigator';

const Tab = createBottomTabNavigator();

export default function LoggedTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          title: 'Minha tarefas',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="TarefasFeitasStackNavigator"
        component={TarefasFeitasStackNavigator}
        options={{
          headerShown: false,
          title: 'Concluídas',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="check" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}