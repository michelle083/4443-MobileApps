import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const RegisteredUsersPage = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const users = await AsyncStorage.multiGet(keys);
        const formattedUsers = users.map(([key, value]) => {
          const userData = JSON.parse(value);
          return { username: key, ...userData };
        });
        setRegisteredUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching registered users:', error);
      }
    };
    
    fetchRegisteredUsers();
  }, []);

  const deleteUser = async () => {
    if (!selectedUser) return;

    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete ${selectedUser.username}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => setSelectedUser(null),
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(selectedUser.username);
              setRegisteredUsers(prevUsers => prevUsers.filter(user => user.username !== selectedUser.username));
              Alert.alert('Success', 'User deleted successfully');
              setSelectedUser(null);
            } catch (error) {
              console.error('Error deleting user:', error);
              Alert.alert('Error', 'Failed to delete user');
            }
          },
        },
      ]
    );
  };

  const handleEdit = () => {
    setEditMode(!editMode);
    setSelectedUser(null);
  };

  const handleUserSelection = (user) => {
    if (editMode) {
      setSelectedUser(user);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Registered Users</Text>
        <TouchableOpacity onPress={handleEdit}>
          <Text style={styles.editButton}>{editMode ? 'Done' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
      {registeredUsers.length === 0 ? (
        <Text>No registered users found.</Text>
      ) : (
        <FlatList
          data={registeredUsers}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleUserSelection(item)}>
              <View style={styles.userItem}>
                <Text>{`Username: ${item.username}`}</Text>
                <Text>{`Full Name: ${item.firstName} ${item.lastName}`}</Text>
                <Text>{`Email: ${item.email}`}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
      {editMode && (
        <TouchableOpacity style={styles.deleteButton} onPress={deleteUser} disabled={!selectedUser}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    color: 'blue',
    fontSize: 16,
  },
  userItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegisteredUsersPage;
