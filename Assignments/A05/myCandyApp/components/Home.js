import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/Home.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome {`${item.username}`}</Text>
      <Text style={styles.title}>Choose an action</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegistrationPage')}
      >
        <AntDesign name="adduser" size={24} color="white" />
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisteredUsers')}
      >
        <AntDesign name="user" size={24} color="white" />
        <Text style={styles.buttonText}>Users</Text>
      </TouchableOpacity>   
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CandySearch')}
      >
        <AntDesign name="search1" size={24} color="white" />
        <Text style={styles.buttonText}>Candy Search</Text>
      </TouchableOpacity> 
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginPage')}
      >
        <AntDesign name="logout" size={24} color="white" />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200, // Adjust as per your logo dimensions
    height: 100, // Adjust as per your logo dimensions
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9500ff83',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default Home;
