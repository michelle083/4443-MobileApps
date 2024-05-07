import React, { useContext, useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from '../components/ThemeContext';
import RNPickerSelect from 'react-native-dropdown-picker';
import ColorPicker from 'react-native-color-picker'; // Import the color picker

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

function SettingsPage() {
  const { theme, toggleTheme, setAccentColor, toggleAccentColor } = useContext(ThemeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showColorPicker, setShowColorPicker] = useState(false); // State to control the visibility of the color picker

  const toggleNotifications = () => setNotificationsEnabled((prev) =>!prev);

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

  const handleColorChange = (color) => {
    setAccentColor(color); // Update the accent color state
    setShowColorPicker(false); // Hide the color picker after selection
  };

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <AntDesign name="bulb1" size={36} color={theme.text} />
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      <View style={styles.setting}>
        <AntDesign name="notification" size={36} color={theme.text} />
        <Text style={styles.text}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.setting} onPress={() => setShowColorPicker(true)}>
        <AntDesign name="edit" size={36} color={theme.text} />
        <Text style={styles.text}>Accent Color</Text>
        {showColorPicker && (
          <ColorPicker
          onColorChange={handleColorChange}
          color="#000" // Temporarily hardcode a color
          width={200}
          height={300}
        />
        
        )}
      </View>
    </View>
  );
}

export default SettingsPage;
