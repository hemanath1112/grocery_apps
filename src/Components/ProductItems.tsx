import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MindNightBule} from './Color';
import {PoppinsBold, PoppinsRegular, PoppinsSemiBold} from './Fonts';
import Item from './Data';
import {GroceryDetails} from './index';
import {useState} from 'react';

const ProductItems = ({navigation}) => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timeOutFunction = setTimeout(() => {
      setLoader(true);
    }, 2000);

    return () => clearTimeout(timeOutFunction);
  }, []);
  const goToBack = () => {
    navigation.goBack();
  };
  const renderItem = ({item}: any) => {
    return <GroceryDetails item={item} />;
  };
  return (
    <View>
      <View style={styles.headerItem}>
        <TouchableOpacity onPress={goToBack}>
          <Ionicons
            name="chevron-back-circle"
            size={35}
            color={MindNightBule}
          />
        </TouchableOpacity>
        <Text style={styles.textItem}>Products</Text>
      </View>
      <View>
        {!loader ? (
          <View style={styles.loadingItem}>
            <Text style={styles.loadingText}>Loading..</Text>
          </View>
        ) : (
          <FlatList
            data={Item}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainer}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        )}
      </View>
    </View>
  );
};

export default ProductItems;
const styles = StyleSheet.create({
  headerItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    position: 'absolute',
    gap: 20,
    top: 20,
    zIndex: 999,
  },
  textItem: {
    fontFamily: PoppinsSemiBold,
    fontSize: 25,

    color: MindNightBule,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 80,
    paddingLeft: 20,
    paddingBottom: 50,
  },
  itemSeparator: {
    height: 18,
  },
  loadingItem: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontFamily: PoppinsRegular,
    fontSize: 18,
  },
});
