
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// candy data with names and icon paths
const candyData = [
  // Candy data 
  { id: 1, name: 'Snickers', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/candy.png') },
  { id: 2, name: 'M&M\'s', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/001-cupcake.png') },
  { id: 3, name: 'Kit Kat', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/002-anise-candy.png') },
  { id: 4, name: 'Twix', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/003-mochi.png') },
  { id: 5, name: 'Reese\'s', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/004-sweets.png') },
  { id: 6, name: 'Hershey\'s Kisses', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/005-ladoo.png') },
  { id: 7, name: 'Skittles', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/006-cake.png') },
  { id: 8, name: 'Starburst', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/007-sweets-1.png') },
  { id: 9, name: 'Milky Way', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/008-candy.png') },
  { id: 10, name: 'Nerds', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/009-piece-of-cake.png') },
  { id: 11, name: 'Reese\'s Pieces', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/010-cake-1.png') },
  { id: 12, name: 'Butterfinger', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/011-gummy.png') },
  { id: 13, name: 'Swedish Fish', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/012-donut.png') },
  { id: 14, name: 'Jolly Rancher', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/013-chocolate-box.png') },
  { id: 15, name: 'Reese\'s Fast Break', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/014-cupcake-1.png') },
  { id: 16, name: 'Almond Joy', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/015-cookies.png') },
  { id: 17, name: 'Sour Patch Kids', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/016-lollipop.png') },
  { id: 18, name: '3 Musketeers', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/017-sweet-bread.png') },
  { id: 19, name: 'Whoppers', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/018-cake-2.png') },
  { id: 20, name: 'Tootsie Roll', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/candy-2.png') },
  { id: 21, name: 'Candy-bar', icon: require('/Users/miche/Documents/m s u/Spring2k24/MOB/4443-MobileApps/Assignments/A05/myCandyApp/assets/candy-3.png') }
];

const CandyCatalogPage = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCandyData, setFilteredCandyData] = useState(candyData);

  const handleSearch = (text) => {
    setSearchText(text);
    setFilteredCandyData(filteredData);
  };

  const renderCandyItem = ({ item }) => (
    <TouchableOpacity style={styles.candyItem}>
      <Image source={item.icon} style={styles.candyIcon} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search candies..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredCandyData}
        renderItem={renderCandyItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3} // Adjust the number of columns
        contentContainerStyle={styles.candyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  candyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  candyItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  candyIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
});

export default CandyCatalogPage;
