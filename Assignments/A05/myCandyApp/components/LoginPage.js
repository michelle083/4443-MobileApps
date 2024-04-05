// import necessary modules
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// LoginPage component
const LoginPage = () => {
  // create a state variable for the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // function to handle login
  const handleLogin = async () => {
    try {
      if (username === 'Admin' && password === 'password') {
        // Successful login for admin
        navigation.navigate('Home');
        return;
      }

      // Check if the username exists in AsyncStorage
      const userData = await AsyncStorage.getItem(username);
      
      if (userData) {
        // Check if the password matches the stored password
        const { password: storedPassword } = JSON.parse(userData);
        if (password === storedPassword) {
          // Successful login for registered user
          navigation.navigate('Home');
          return;
        }
      }

      // Login failed
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
      
    } 

    // Catch any errors that occur during login
    catch (error) {
      Alert.alert('Login Failed', 'An error occurred while logging in. Please try again.');
    }
  };

  // function to handle registration
  const handleRegistration = () => {
    navigation.navigate('RegistrationPage'); // Navigate to the registration page
  };

  // buttons for login and registration
  return (
    // Adjust the view when the keyboard is displayed
    <KeyboardAvoidingView
      style={styles.container}
      // Adjust the behavior based on the platform
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

    {/* Login page */}
    <View>
      {/* Title */}
      <Text style={styles.title}>LOGIN</Text>
      
      {/* Input for username */}
      <Text style={styles.subtitles}>Username</Text>
      {/* Button with text input for username */}
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      {/* Input for password */}
      <Text style={styles.subtitles}>Password</Text>
      {/* Button with text input for password */} 
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        // Hide the password input
        secureTextEntry
        // Set the value of the password input
        value={password}
        // Update the password value
        onChangeText={text => setPassword(text)}
      />
      
      {/* Button to login */}
      <TouchableOpacity style={styles.button1} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Button to register */}
      <Text style={styles.subtitles}> </Text>
      <Text style={styles.subtitles2}>-OR- </Text>
      <Text style={styles.subtitles}>Don't have an account?</Text>
      <TouchableOpacity style={styles.button1} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
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

  // Style for the title
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  // Style for the subtitles
  subtitles: {
    fontSize: 18,
    fontWeight: 'thin',
    marginBottom: 5,
  },

  // Style for the subtitles2
  subtitles2: {
    fontSize: 18,
    fontWeight: 'thin',
    marginBottom: 5,
    alignSelf: 'center',
  },

  // Style for the input
  input: {
    width: '80%',
    paddingVertical: 9,
    paddingHorizontal: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },

  // Style for the button
  button1: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 5,
  },

  // Style for the button
  button2: {
    backgroundColor: '##4d031e',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 5,
  },

  // Style for the button text
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginPage;
