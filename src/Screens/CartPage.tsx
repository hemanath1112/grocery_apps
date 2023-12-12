/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {PoppinsBold} from '../Components/Fonts';
import {Black, White, MindNightBule, Gray} from '../Components/Color';
import {useDispatch, useSelector} from 'react-redux';
import {CartItem} from '../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartPage = ({navigation}) => {
  const dispatch = useDispatch();

  const storeData = useSelector(state => state.CartSlice);
  console.log(storeData, 'i am');

  const renterItem = ({item, index}) => {
    return <CartItem item={item} index={index} />;
  };

  const goBack = () => {
    navigation.goBack();
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.ItemSeparatorComponent} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerItem}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons
            name="chevron-back-circle"
            size={35}
            color={MindNightBule}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textCart}>My Cart</Text>
      </View>

      <View>
        <FlatList
          data={storeData}
          renderItem={renterItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>

      
    </SafeAreaView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: White,
    marginBottom: 60,
  },
  textCart: {
    textAlign: 'center',
    fontFamily: PoppinsBold,
    fontSize: 20,
    marginTop: 20,
    color: Black,
  },
  headerItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 999,
  },
  ItemSeparatorComponent: {
    height: 2,
    backgroundColor: Gray,
    marginHorizontal: 20,
  },
});
