import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = ({ notRestrictedLinks, restrictedLinks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Not Restricted Menu Links</Text>
        {notRestrictedLinks.map((link, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => console.log(link.name)}>
            <Text style={styles.menuText}>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Restricted Menu Links</Text>
        {restrictedLinks.map((link, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => console.log(link.name)}>
            <Text style={styles.menuText}>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
  },
});

export default Menu;
