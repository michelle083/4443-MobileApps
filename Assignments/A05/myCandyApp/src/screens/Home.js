// import necessary modules
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native'; // Import CommonActions
import { AntDesign } from '@expo/vector-icons';
import RegistrationPage from './RegistrationPage';

// Home component
const Home = ({ navigation }) => {
  const resetNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'LoginPage' }], // Reset to LoginPage
      })
    );
  };

  // create buttons to navigate to other screens
  return (
    <View style={styles.container}>
      {/*Add logo and welcome to the home screen */}
      <Image
        source={require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/019-shop.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to my Candy Shop!</Text>

      {/* Buttons to navigate to candy page */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CandySearch')}
      >
        <AntDesign name="search1" size={24} color="white" />
        <Text style={styles.buttonText}>Candy</Text>
      </TouchableOpacity> */}

      {/* Buttons to navigate to registered users page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisteredUsers')}
      >
         <AntDesign name="user" size={24} color="white" />
        <Text style={styles.buttonText}>Users</Text>
      </TouchableOpacity>  

      {/* Buttons to navigate to registration page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegistrationPage')}
      >
        <AntDesign name="adduser" size={24} color="white" />
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

       {/* Buttons to navigate to registration page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SettingsPage')}
      >
        <AntDesign name="setting" size={24} color="white" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      {/* Button to log out */}
      <TouchableOpacity
        style={styles.button}
        onPress={resetNavigation} // Call resetNavigation function
      >
        <AntDesign name="logout" size={24} color="white" />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  // Style for the container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  // Style for the logo
  logo: {
    width: 200, // Adjust as per your logo dimensions
    height: 100, // Adjust as per your logo dimensions
    marginBottom: 20,
  },

  // Style for the title
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  // Style for the button
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9500ff83',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },

  // Style for the button text
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default Home;
