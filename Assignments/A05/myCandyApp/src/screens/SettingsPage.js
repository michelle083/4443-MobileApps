import React, { useContext, useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { ThemeContext } from '../src/components/ThemeContext';

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

function SettingsPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.setting}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="bulb1" size={36} color={theme.text} />
          <Text style={{ color: theme.text }}>Dark Mode</Text>
        </View>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      <View style={styles.setting}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="notification" size={36} color={theme.text} />
          <Text style={{ color: theme.text }}>Notifications</Text>
        </View>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.setting}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="edit" size={36} color={theme.text} />
          <Text style={{ color: theme.text }}>Color</Text>
        </View>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={colors.map((color) => ({ label: color, value: color }))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export default SettingsPage;
