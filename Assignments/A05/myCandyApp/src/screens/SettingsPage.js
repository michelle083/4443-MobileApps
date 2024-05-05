import React, { useState, useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

function SettingsPage() {
  // const { theme, setTheme } = useContext(ThemeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isDarkMode,setTheme] = useState(true);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  return (
    <View style={setTheme === 'dark' ? styles.darkContainer : styles.lightContainer}>
      <View style={styles.setting}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="bulb1" size={36} color="black" />
          <Text>Dark Mode</Text>
        </View>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.setting}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="notification" size={36} color="black" />
          <Text>Notifications</Text>
        </View>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.setting}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="edit" size={36} color="black" />
          <Text>Color</Text>
        </View>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={colors.map((color) => ({ label: color, value: color }))}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  darkContainer: {
    backgroundColor: '#363535',
    flexDirection: 'column',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
    height: 80,
    width: '95%',
  },
});

export default SettingsPage;
