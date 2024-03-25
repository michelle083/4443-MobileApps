import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import icons from Material Community Icons

const CandyCatalogPage = () => {
  // Sample list of candies with icons
const [candies, setCandies] = useState([
    { id: 1, name: 'Chocolate Bar', icon: "cookie" },
    { id: 2, name: 'Lollipop', icon: 'lollipop' },
    { id: 3, name: 'Candy Cane', icon: 'candy-cane' },
    { id: 4, name: 'Caramel', icon: 'caramel' },
    { id: 5, name: 'Gummy Bears', icon: 'gummy-bears' },
    { id: 6, name: 'Jelly Beans', icon: 'jelly-bean' },
    { id: 7, name: 'Licorice', icon: 'licorice' },
    { id: 8, name: 'Peppermint', icon: 'peppermint' },
    { id: 9, name: 'Toffee', icon: 'toffee' },
    { id: 10, name: 'Rock Candy', icon: 'rock-candy' },
    // Add more candies as needed
]);

  // State to hold search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter candies based on search query
  const filteredCandies = candies.filter(candy =>
    candy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render individual candy item
  const renderCandyItem = ({ item }) => (
    <TouchableOpacity style={styles.candyItem}>
      <FontAwesome name={item.icon} size={24} color="#9500ff" />
      <Text style={styles.candyName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search candies..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={filteredCandies}
        renderItem={renderCandyItem}
        keyExtractor={item => item.id.toString()}
        style={styles.candyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  candyList: {
    flex: 1,
  },
  candyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  candyName: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default CandyCatalogPage;
