// // LoginPage.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleLogin = async () => {
//     if (username === 'Admin' && password === 'password') {
//         //     // Successful login
//             navigation.navigate('Home');
//       } 
//       else{ 
//         try {
//       const userData = await AsyncStorage.getItem(username);
      
//       if (userData) {
//         const { password: storedPassword } = JSON.parse(userData);
//         if (password === storedPassword) {
//           navigation.navigate('Home');
//           return;
//         }
//       }
//       else{
//         Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
//       }
      
//     } catch (error) {
//       Alert.alert('Login Failed', 'An error occurred while logging in. Please try again.');
//     }
//       }
      
//   };
  

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       // behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <View>
//         <Text style={styles.title}>LOGIN</Text>
//         <Text style={styles.subtitles}>Username</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter username"
//           value={username}
//           onChangeText={text => setUsername(text)}
//         />

//       <Text style={styles.subtitles}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter password"
//           secureTextEntry
//           value={password}
//           onChangeText={text => setPassword(text)}
//         />
        
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subtitles: {
//     fontSize: 18,
//     fontWeight: 'thin',
//     marginBottom: 5,
//   },
//   input: {
//     width: '80%',
//     paddingVertical: 9,
//     paddingHorizontal: 40,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default LoginPage;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

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
        const { password: storedPassword } = JSON.parse(userData);
        if (password === storedPassword) {
          // Successful login for registered user
          navigation.navigate('Home');
          return;
        }
      }

      // Login failed
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
      
    } catch (error) {
      Alert.alert('Login Failed', 'An error occurred while logging in. Please try again.');
    }
  };

  const handleRegistration = () => {
    navigation.navigate('RegistrationPage'); // Navigate to the registration page
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}>LOGIN</Text>
        <Text style={styles.subtitles}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={text => setUsername(text)}
        />

        <Text style={styles.subtitles}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        
        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitles: {
    fontSize: 18,
    fontWeight: 'thin',
    marginBottom: 5,
  },
  subtitles2: {
    fontSize: 18,
    fontWeight: 'thin',
    marginBottom: 5,
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    paddingVertical: 9,
    paddingHorizontal: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button1: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: '##4d031e',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginPage;
