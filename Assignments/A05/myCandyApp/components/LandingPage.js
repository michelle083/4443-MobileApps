// LandingPage.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegistrationPage')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisteredUsers')}
      >
        <Text style={styles.buttonText}>Users</Text>
      </TouchableOpacity>   
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginPage')}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  /**
   * Styles for the container.
   */
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  /**
   * Styles for the title.
   */
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  /**
   * Styles for the button.
   */
  button: {
    alignitems: 'center',
    backgroundColor: '#9500ff83',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  /**
   * Styles for the button text.
   */
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LandingPage;
