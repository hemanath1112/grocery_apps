import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Black, Gray, Green, MindNightBule, White} from '../Components/Color';
import {PoppinsLight} from '../Components/Fonts';

const SearchPage = () => {
  const [search, setSearch] = useState();
  return (
    <SafeAreaView>
      <View style={styles.serachContainer}>
        <View>
          <TextInput
            value={search}
            placeholder="Search your Grocery Item"
            style={styles.searchItems}
            // onChangeText={}
          />
        </View>
        <View style={styles.fontIcon}>
          <TouchableOpacity>
            <FontAwesome name="search" style={styles.iconText} />
          </TouchableOpacity>
        </View>
      </View>
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
});
