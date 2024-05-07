import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './src/components/ThemeContext';
import { MenuProvider } from 'react-native-popup-menu';

import BottomTabNavigator from './src/navigation/bottomTab'; // Adjust the path as necessary

import LoginPage from './src/screens/LoginPage';
import RegistrationPage from './src/screens/RegistrationPage';
import Home from './src/screens/Home';
import LocationPage from './src/screens/LocationPage';
import RegisteredUsers from './src/screens/RegisteredUsers';
import SettingsPage from './src/screens/SettingsPage';
import CandySearch from './src/screens/CandySearch';
import ChatPage from './src/screens/ChatPage';
import ImagePage from './src/screens/ImagePage';

const Stack = createStackNavigator();

export default function App() {
  // const [theme, setTheme] = useState('light');

  const [theme, setTheme] = useState(ThemeContext);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
          <Stack.Screen name="Location" component={LocationPage} />
          <Stack.Screen name="RegisteredUsers" component={RegisteredUsers} />
          <Stack.Screen name="SettingsPage" component={SettingsPage} />
          <Stack.Screen name="CandySearch" component={CandySearch} />
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }}/>
          <Stack.Screen name="ChatPage" component={ChatPage} />
          <Stack.Screen name="ImagePage" component={ImagePage} />
        </Stack.Navigator>
    </NavigationContainer>
  </ThemeContext.Provider>
  );
}

