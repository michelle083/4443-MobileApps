import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sender, setSender] = useState('');

  const contacts = [
    { label: 'Alice', value: 'Alice', icon: () => <AntDesign name="user" size={20} color="#9500ff83" /> },
    { label: 'Bob', value: 'Bob', icon: () => <AntDesign name="user" size={20} color="#00ffc883" /> },
    { label: 'Charlie', value: 'Charlie', icon: () => <AntDesign name="user" size={20} color="#ff990083" /> },
  ];

  const handleSendText = () => {
    setMessages(prevMessages => [...prevMessages, { type: 'text', content: input, sender: sender, timestamp: new Date() }]);
    setInput('');
  };

  const pickImage = async (source) => {
    let result;
    if (source === 'camera') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }
  
    if (!result.cancelled) {
      const newMessage = { type: 'image', content: result.uri, sender: sender, timestamp: new Date() };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    }
  };
  

  const handleContactChange = (value) => {
    setSelectedContact(value);
    setValue(value);
    setOpen(false); // Close the dropdown after selection
    setMessages([]); // Clear the messages
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={contacts}
        setOpen={setOpen}
        setValue={handleContactChange}
        placeholder="Select a contact"
        containerStyle={{ height: 40, zIndex: 2 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{ justifyContent: 'flex-start' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        ArrowDownIconComponent={({ style }) => <AntDesign style={{ marginRight: 5 }} color="green" name="down" size={20} />}
        ArrowUpIconComponent={({ style }) => <AntDesign style={{ marginRight: 5 }} color="red" name="up" size={20} />}
        showTickIcon={true}
        TickIconComponent={({ style }) => <AntDesign style={{ marginRight: 5 }} color="green" name="check" size={20} />}
      />

      {selectedContact && (
        <>
          <View style={styles.messagesContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {messages.map((message, index) => (
              <View key={index} style={styles.message}>
                <Text style={styles.messageSender}>{message.sender}</Text>
                {message.type === 'text' ? (
                  <Text style={styles.messageText}>{message.content}</Text>
                ) : (
                  <Image source={{ uri: message.content }} style={styles.messageImage} />
                )}
                <Text style={styles.messageTimestamp}>{message.timestamp.toLocaleString()}</Text>
              </View>
            ))}
            </ScrollView>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={sender}
              onChangeText={setSender}
              style={styles.input}
              placeholder="Your name"
            />
            <TextInput
              value={input}
              onChangeText={setInput}
              style={styles.input}
              placeholder="Type a message"
            />
            <Button title="Send" onPress={handleSendText} />
            <Button title="Photo" onPress={() => pickImage('gallery')} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  messageSender: {
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 16,
  },
  messageImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  messageTimestamp: {
    fontSize: 10,
    color: '#aaa',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
});

export default ChatPage;
