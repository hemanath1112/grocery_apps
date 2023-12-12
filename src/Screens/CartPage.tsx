/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
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
import {useNavigation} from '@react-navigation/native';

const CartPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.CartSlice);

  let Amount = 0;
  storeData.forEach(element => {
    Amount += element.price;
  });

  const renterItem = ({item, index}) => {
    return <CartItem item={item} index={index} />;
  };

  const goBack = () => {
    navigation.goBack();
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.ItemSeparatorComponent} />;
  };

  const emptyCart = () => {
    return (
      <View style={styles.emptyImageContainer}>
        <View>
          <Image
            source={{
              uri: 'https://www.ruuhbythebrandstore.com/images/cart_is_empty.png',
            }}
            style={styles.emptyImage}
          />
        </View>
      </View>
    );
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
          ListEmptyComponent={emptyCart}
        />
      </View>

      <View style={styles.checkOutItem}>
        <View style={styles.checkOutPage}>
          <Text>
            <Text
              style={{
                fontFamily: PoppinsBold,
                fontSize: 20,
                color: Black,
              }}>
              Totel Amount:{' '}
            </Text>

            <Text style={{fontSize: 16, color: Red}}>
              ₹<Text style={styles.Amount}>{Amount}</Text>
            </Text>
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (Amount !== 0) {
                navigation.navigate('checkOut');
              }
            }}>
            <Text style={styles.checkOut}>Go To Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  emptyImage: {
    width: 200,
    height: 200,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
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
    paddingVertical: 10,
    paddingHorizontal: 25,
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
    fontFamily: PoppinsBold,
    fontSize: 16,
    color: Red,
  },
  flatList: {
    flex: 0.93,
  },
  emptyImageContainer: {
    paddingTop: 200,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
