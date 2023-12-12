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
import {PoppinsBold, PoppinsSemiBold} from '../Components/Fonts';
import {
  Black,
  White,
  MindNightBule,
  Gray,
  Green,
  Red,
} from '../Components/Color';
import {useDispatch, useSelector} from 'react-redux';
import {CartItem} from '../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartPage = ({navigation}) => {
  const dispatch = useDispatch();

  const storeData = useSelector(state => state.CartSlice);

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
        <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
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

      <View style={styles.flatList}>
        <FlatList
          data={storeData}
          renderItem={renterItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>

      <View style={styles.checkOutItem}>
        <View style={styles.checkOutPage}>
          <Text style={styles.checkOutAmount}>
            Totel Amount: <Text style={styles.Amount}>300</Text>
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.checkOut}>Go To Checkout</Text>
          </TouchableOpacity>
        </View>
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
  checkOut: {
    textAlign: 'center',
    fontFamily: PoppinsSemiBold,
    color: White,
    fontSize: 14,
    backgroundColor: Green,
    padding: 20,
    alignContent: 'center',
    borderRadius: 20,
  },
  checkOutItem: {
    // flex: 0.9,
    height: 70,
    justifyContent: 'flex-end',
  },
  checkOutAmount: {
    fontFamily: PoppinsBold,
    fontSize: 20,
    color: Black,
  },
  checkOutPage: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Amount: {
    fontSize: 16,
    color: Red,
  },
  flatList: {
    flex: 0.93,
  },
});
