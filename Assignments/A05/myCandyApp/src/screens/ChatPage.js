import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const contacts = [
    { label: 'Alice', value: 'Alice', icon: () => <AntDesign name="user" size={20} color="#9500ff83" /> },
    { label: 'Bob', value: 'Bob', icon: () => <AntDesign name="user" size={20} color="#0008ff83" /> },
    { label: 'Charlie', value: 'Charlie', icon: () => <AntDesign name="user" size={20} color="#00ff4c83" /> },
  ];

  const handleSend = () => {
    setMessages(prevMessages => [...prevMessages, input]);
    setInput('');
  };

  const handleContactChange = (value) => {
    setSelectedContact(value);
    setValue(value);
    setOpen(false); // Close the dropdown after selection
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
        containerStyle={{height: 40, zIndex: 2}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        ArrowDownIconComponent={({style}) => (
          <AntDesign style={{marginRight: 5}} color="green" name="down" size={20} />
        )}
        ArrowUpIconComponent={({style}) => (
          <AntDesign style={{marginRight: 5}} color="red" name="up" size={20} />
        )}
        showTickIcon={true}
        TickIconComponent={({style}) => (
          <AntDesign style={{marginRight: 5}} color="green" name="check" size={20} />
        )}
      />
      {selectedContact && (
        <>
          <ScrollView style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <View key={index} style={styles.message}>
                <Text style={styles.messageText}>{message}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              value={input}
              onChangeText={setInput}
              style={styles.input}
              placeholder="Type a message"
            />
            <Button title="Send" onPress={handleSend} />
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
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default ChatPage;
