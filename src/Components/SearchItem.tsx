import {View, StyleSheet, TextInput, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {Black, Blue, Gray, Green, MindNightBule, White} from './Color';
import {PoppinsBold, PoppinsLight} from './Fonts';

const SearchItem = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerText}>High Quality, Pure Products.</Text>
        <Text style={styles.headerText2}>
          Only the best quality food for you.
        </Text>
      </View>

      <View style={styles.serachContainer}>
        <View style={styles.fontIcon}>
          <FontAwesome name="search" style={styles.iconText} />
        </View>
        <View>
          <TextInput
            value=""
            placeholder="Search your Grocery Item"
            style={styles.searchItems}
            onPressIn={() => navigation.navigate('Search')}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    color: Green,
    fontFamily: PoppinsBold,
  },
  headerText2: {
    fontSize: 21,
    color: MindNightBule,
    fontFamily: PoppinsBold,
  },
  serachContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginHorizontal: 20,
    height: 50,
  },
  fontIcon: {
    backgroundColor: Green,
    height: 40,
    width: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
    padding: 5,
    fontSize: 14,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    fontFamily: PoppinsLight,
  },
});
