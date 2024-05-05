import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import ThemeContext from '../components/ThemeContext';
import { useContext } from 'react';

const SettingsPage = (navigation) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [color, setColor] = useState('lilac');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setTheme(theme === 'light' ? 'dark' : 'light');
  //const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  const changeColor = () => {
    setColor(previousColor => previousColor === 'lilac' ? 'blue' : 'lilac');
  };

  return (
    <View style={theme === 'dark' ? styles.darkContainer : styles.lightContainer}>
      <View style={styles.setting}>
        <AntDesign name="bulb1" size={24} color="black" />
        <Text>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.setting}>
        <AntDesign name="notification" size={24} color="black" />
        <Text>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.setting}>
        <AntDesign name="edit" size={24} color="black" />
        <Text>Color</Text>
        <Button title={`Change theme (current: ${color})`} onPress={changeColor} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    lightContainer: {
        backgroundColor: 'white',
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 0.2,
        borderColor: 'grey',
      },
      darkContainer: {
        backgroundColor: 'darkgrey',
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 0.2,
        borderColor: 'grey',
      },
      // ...
    // setting: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // margin: 10,
    // padding: 10,
    // borderWidth: 0.2,
    // borderColor: 'grey',
  },
);

export default SettingsPage;