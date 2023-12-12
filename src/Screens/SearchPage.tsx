import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Black, Gray, Green, Red, White} from '../Components/Color';
import {PoppinsLight, PoppinsRegular} from '../Components/Fonts';
import {GroceryDetails} from '../Components/index';
import {Item} from '../Components/Data';
import SearchResult from '../Components/SearchResult';
import {RefreshControl} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setResult(Item);
  }, []);

  const searchHandler = () => {
    const searchData = Item.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setResult(searchData);
    console.log(searchData);
  };

  const renderItem = ({item}: any) => {
    return <SearchResult item={item} />;
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setResult([]);
    setTimeout(() => {
      setSearch('');
      searchHandler();
      setRefreshing(false);
    }, 2000);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView>
        <View>
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
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={result}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.contentContainer}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SearchPage;
const styles = StyleSheet.create({
  flatList: {
    height: '85%',
  },
  serachContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
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
  contentContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  itemSeparator: {
    height: 18,
  },
});
