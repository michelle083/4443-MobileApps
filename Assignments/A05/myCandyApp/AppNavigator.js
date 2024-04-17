// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import LoginPage from './src/screens/LoginPage';
import RegistrationPage from './src/screens/RegistrationPage';
import LocationPage from './src/screens/LocationPage';
import RegisteredUsers from './src/screens/RegisteredUsers';
import SettingsPage from './src/screens/SettingsPage';
import CandySearch from './src/screens/CandySearch';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="Location" component={LocationPage} />
        <Stack.Screen name="RegisteredUsers" component={RegisteredUsers} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="Candy" component={CandySearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;