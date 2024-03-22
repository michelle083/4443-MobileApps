import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisteredUsersPage = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {

    const fetchRegisteredUsers = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          console.log('All Keys:', keys);
          const users = await AsyncStorage.multiGet(keys);
          console.log('All Users:', users);
          const formattedUsers = users.map(([key, value]) => {
            const userData = JSON.parse(value);
            return { username: key, ...userData };
          });
          console.log('Formatted Users:', formattedUsers);
          setRegisteredUsers(formattedUsers);
        } catch (error) {
          console.error('Error fetching registered users:', error);
        }
      };
      
    fetchRegisteredUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Users</Text>
    {registeredUsers.length === 0 ? (
        <Text>No registered users found.</Text>
    ) : (
        <FlatList
            data={registeredUsers}
            renderItem={({ item }) => (
                <View style={styles.userItem}>
                    <Text>{`Username: ${item.username}`}</Text>
                    <Text>{`Full Name: ${item.firstName} ${item.lastName}`}</Text>
                    <Text>{`Email: ${item.email}`}</Text>
                </View>
            )}
            keyExtractor={(_, index) => index.toString()}
        />
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default RegisteredUsersPage;
