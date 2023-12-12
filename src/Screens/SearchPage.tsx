import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Black, Gray, Green, White} from '../Components/Color';
import {PoppinsLight, PoppinsRegular} from '../Components/Fonts';
import Item from '../Components/Data';
import {GroceryDetails} from '../Components/index';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  console.log(result);

  const searchHandler = () => {
    const searchData = Item.filter(
      item => item.name.toLowerCase() === search.toLowerCase(),
    );
    setResult(searchData);
    console.log(searchData);
  };

  const renderItem = ({item}: any) => {
    return <GroceryDetails item={item} />;
  };
  return (
    <SafeAreaView>
      <View style={styles.serachContainer}>
        <View>
          <TextInput
            value={search}
            placeholder="Search your Grocery Item"
            style={styles.searchItems}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.fontIcon}>
          <TouchableOpacity onPress={searchHandler} activeOpacity={0.8}>
            <FontAwesome name="search" style={styles.iconText} />
          </TouchableOpacity>
        </View>
      </View>
      {result.length === 0 ? (
        <View style={styles.searchtem}>
          <Text style={styles.searchText}> No Search Item</Text>
        </View>
      ) : (
        <FlatList data={result} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};

export default SearchPage;
const styles = StyleSheet.create({
  serachContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  fontIcon: {
    backgroundColor: Green,
    height: 50,
    width: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  iconText: {
    fontSize: 23,
    color: White,
  },
  searchItems: {
    borderWidth: 1,
    color: Black,
    borderColor: Gray,
    width: 330,
    fontSize: 16,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    fontFamily: PoppinsLight,
    padding: 10,
  },
  searchtem: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontFamily: PoppinsRegular,
    fontSize: 20,
  },
});
