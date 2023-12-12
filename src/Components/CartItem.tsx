import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {Black, MindNightBule, Red, White} from '../Components/Color';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../Components/Fonts';
import {useDispatch} from 'react-redux';
import {itemDecrement, itemIncrement, removeToCart} from '../Redux/CartSlice';
import {useNavigation} from '@react-navigation/native';

const CartItem = ({item, index}: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(item);
  console.log(index);

  const goToDetails = () => {
    navigation.navigate('productDetails', {main: item});
  };
  return (
    <View style={styles.itemBox}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={goToDetails}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.productImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.discriptionCondainer}>
        <TouchableOpacity onPress={goToDetails}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.discription} numberOfLines={2}>
            {item.discription}
          </Text>
        </TouchableOpacity>
        <View style={styles.addItemContainer}>
          <View style={styles.itemAdd}>
            <TouchableOpacity onPress={() => dispatch(itemIncrement(item))}>
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={35}
                color={Black}
              />
            </TouchableOpacity>

            <Text style={styles.itemNumber}>{item.quantity}</Text>

            <TouchableOpacity onPress={() => dispatch(itemDecrement(item))}>
              <MaterialCommunityIcons
                name="minus-circle-outline"
                size={35}
                color={Black}
              />
            </TouchableOpacity>
          </View>
          <Text>
            <Text style={{fontSize: 22, color: Red}}>₹</Text>
            <Text style={styles.price}>{item.quantity * item.price}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.removeItem}
          onPress={() => dispatch(removeToCart(item))}>
          <MaterialCommunityIcons
            name="tooltip-remove-outline"
            size={30}
            color={Black}
          />
          {/* <Text style={styles.removeName}>Remove</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemBox: {
    marginHorizontal: 20,
    height: 190,
    marginTop: 10,
    // borderBottomColor: Gray,
    // borderBottomWidth: 2,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 0.35,
    // backgroundColor: Green,
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  discriptionCondainer: {
    flex: 0.65,
    // backgroundColor: Blue,
    // paddingVertical: 20,
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 10,
  },
  productImage: {
    height: 170,
    width: 120,
    resizeMode: 'contain',
  },
  removeItem: {
    position: 'absolute',
    top: 5,
    right: 20,
    // backgroundColor: Red,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  removeName: {
    fontFamily: PoppinsRegular,
    color: White,
  },
  addItemContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  itemAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 15,
  },
  itemNumber: {
    fontFamily: PoppinsSemiBold,
    fontSize: 16,
    color: MindNightBule,
    marginHorizontal: 15,
  },
  price: {
    fontFamily: PoppinsSemiBold,
    fontSize: 22,
    color: Red,
  },
  title: {
    fontFamily: PoppinsBold,
    color: MindNightBule,
    fontSize: 20,
  },
  discription: {
    fontFamily: PoppinsRegular,
    fontSize: 14,
  },
});
