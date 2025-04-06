// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoOverview from './app/screens/TodoOverview';
import CreateTodo from './app/screens/CreateTodo';
import TodoDetail from './app/screens/TodoDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={TodoOverview} />
        <Stack.Screen name="Create" component={CreateTodo} />
        <Stack.Screen name="Detail" component={TodoDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
