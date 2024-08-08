import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReportForm from './components/ReportForm';
import ReportDetail from './components/ReportDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReportForm">
        <Stack.Screen name="ReportForm" component={ReportForm} />
        <Stack.Screen name="ReportDetail" component={ReportDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
