// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './components/LoginPage';
import Home from './components/Home';
import RegistrationPage from './components/RegistrationPage';
import RegisteredUsers from './components/RegisteredUsers';
// import Menu from './components/Menu';
// import CandySearch from './components/CandySearch';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} options={{ title: 'Registration' }} />
        <Stack.Screen name="RegisteredUsers" component={RegisteredUsers} options={{ title: 'Registered Users' }} />
        {/* <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
        <Stack.Screen name="CandySearch" component={CandySearch} options={{ title: 'Candy Search' }} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
