import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import LoginPage from '../screens/LoginPage';
import RegistrationPage from '../screens/RegistrationPage';
import RegisteredUsers from '../screens/RegisteredUsers';
import LocationPage from '../screens/LocationPage';
import CandySearch from '../screens/CandySearch';
import { AntDesign } from '@expo/vector-icons';
import ChatPage from '../screens/ChatPage';
import ImagePage from '../screens/ImagePage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } 
            // else if (route.name === 'Registration') {
            //   iconName = focused ? 'form' : 'form'; // 'form' is an AntDesign icon
            // } 
            else if (route.name === 'Candy') {
              iconName = focused ? 'search1' : 'search1'; // 'search1' is an AntDesign icon
            } 
            // else if (route.name === 'Users') {
            //   iconName = focused ? 'user' : 'user'; // 'enviromento' is an AntDesign icon
            // } 
            else if (route.name === 'Location') {
              iconName = focused ? 'flag' : 'flag';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'message1' : 'message1';
            } 
            else if (route.name === 'Image') {
              iconName = focused ? 'picture' : 'picture';
            }
  
            // You can return any component that you like here!
            return <AntDesign name={iconName} color={color} size={size} />;
          },
        tabBarActiveTintColor: '#9500ff83',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      {/* <Tab.Screen name="Registration" component={RegistrationPage}  /> */}
      <Tab.Screen name="Candy" component={CandySearch} />
      {/* <Tab.Screen name="Users" component={RegisteredUsers} /> */}
      <Tab.Screen name="Location" component={LocationPage} />
      <Tab.Screen name="Chat" component={ChatPage} />
      <Tab.Screen name="Image" component={ImagePage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
