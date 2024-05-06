import React, { useContext, useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { ThemeContext } from '../components/ThemeContext';

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

function SettingsPage() {
  const { theme, toggleTheme, setAccentColor } = useContext(ThemeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: theme.background,
    },
    setting: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 5,
      backgroundColor: theme.background,
    },
    text: {
      color: theme.text,
    },
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
          <AntDesign name="bulb1" size={36} color={theme.text} />
          <Text style={styles.text}>Dark Mode</Text>
        {/* </View> */}
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      <View style={styles.setting}>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
          <AntDesign name="notification" size={36} color={theme.text} />
          <Text style={styles.text}>Notifications</Text>
        {/* </View> */}
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.setting}>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
          <AntDesign name="edit" size={36} color={theme.text} />
          <Text style={styles.text}>Accent Color</Text>
        {/* </View> */}
        <RNPickerSelect
          onValueChange={(value) => setAccentColor(value)}
          items={colors.map((color) => ({ label: color, value: color }))}
        />
      </View>
    </View>
  );
}

export default SettingsPage;
