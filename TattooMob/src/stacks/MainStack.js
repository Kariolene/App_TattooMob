import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AdmConfig from '../screens/AdmConfig';
import AdmHome from '../screens/AdmHome';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();


export default () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="AdmHome" component={AdmHome}/>
        <Stack.Screen name="AdmConfig" component={AdmConfig}/>
    </Stack.Navigator>
  );
}