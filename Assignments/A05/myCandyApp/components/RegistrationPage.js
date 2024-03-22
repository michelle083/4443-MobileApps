// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { AsyncStorage } from 'react-native';

// const RegistrationPage = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [verifyPassword, setVerifyPassword] = useState('');
//   const navigation = useNavigation();

//   const handleRegister = async () => {
//     // Check if passwords match
//     if (password !== verifyPassword) {
//       Alert.alert('Registration Failed', 'Passwords do not match. Please try again.');
//       return;
//     }
  
//     // Store user information
//     try {
//       await AsyncStorage.setItem(username, JSON.stringify({ firstName, lastName, email, password }));
//       Alert.alert('Registration Successful', 'You have been successfully registered.');
//         navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Registration Failed', 'An error occurred while registering. Please try again.');
//     }
//   };
  

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       // behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <View>
//         <Text style={styles.title}>NEW USER</Text>
        
//         <Text style={styles.subtitles}>First Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter first name"
//           value={firstName}
//           onChangeText={text => setFirstName(text)}
//         />

//         <Text style={styles.subtitles}>Last Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter last name"
//           value={lastName}
//           onChangeText={text => setLastName(text)}
//         />

//         <Text style={styles.subtitles}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter email"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={text => setEmail(text)}
//         />

//         <Text style={styles.subtitles}>Username</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter username"
//           keyboardType="email-address"
//           value={username}
//           onChangeText={text => setUsername(text)}
//         />

//         <Text style={styles.subtitles}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter password"
//           secureTextEntry
//           value={password}
//           onChangeText={text => setPassword(text)}
//         />

//         <Text style={styles.subtitles}>Verify Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Verify password"
//           secureTextEntry
//           value={verifyPassword}
//           onChangeText={text => setVerifyPassword(text)}
//         />
        
//         <TouchableOpacity style={styles.button} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Register</Text>
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
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subtitles: {
//     fontSize: 16,
//     fontWeight: 'thin',
//     marginBottom: 5,
//   },
//   input: {
//     // width: '50%',
//     paddingVertical: 9,
//     paddingHorizontal: 100,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#8e405d',
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default RegistrationPage;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    // Check if passwords match
    if (password !== verifyPassword) {
      Alert.alert('Registration Failed', 'Passwords do not match. Please try again.');
      return;
    }

    // Store user information
    try {
      await AsyncStorage.setItem(username, JSON.stringify({ firstName, lastName, email, password }));
      Alert.alert('Registration Successful', 'You have been successfully registered.');
    } catch (error) {
      console.error('Error storing user data:', error);
      Alert.alert('Registration Failed', 'An error occurred while registering. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <Text style={styles.subtitles}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />

      <Text style={styles.subtitles}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter last name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />

      <Text style={styles.subtitles}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={styles.subtitles}>Username (Email)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username (email)"
        keyboardType="email-address"
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

      <Text style={styles.subtitles}>Verify Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Verify password"
        secureTextEntry
        value={verifyPassword}
        onChangeText={text => setVerifyPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitles: {
    fontSize: 16,
    fontWeight: 'thin',
    marginBottom: 5,
  },
  input: {
    // width: '50%',
    paddingVertical: 9,
    paddingHorizontal: 100,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8e405d',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RegistrationPage;
