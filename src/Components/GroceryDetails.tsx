import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Green, GreenLight, MindNightBule, Red} from './Color';
import {PoppinsBold, PoppinsMedium, PoppinsSemiBold} from './Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../Redux/CartSlice';

interface GroceryDetailsProps {
  item: {
    id: number;
    name: string;
    image: string;
    discription: string;
    price: number;
    offer: number;
  };
}

const GroceryDetails: React.FC<GroceryDetailsProps> = ({item}) => {
  const navigation = useNavigation();

  const gotoDetailsPage = () => {
    navigation.navigate('productDetails', {main: item});
  };
  const dispatch = useDispatch();

  const storeData = useSelector(state => state.CartSlice);

  return (
    <TouchableOpacity onPress={gotoDetailsPage}>
      <View style={styles.groceryDetailsContainer}>
        <View style={styles.ImageContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.imageBox}
          />
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.productDis} numberOfLines={1}>
            {item.discription}
          </Text>
          <View style={styles.priceItem}>
            <Text style={styles.productPrice}>&#8377;{item.price}</Text>
            <Text style={styles.productDiscount}>
              <Text>Off</Text> &#8377;{item.offer}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addItem}
          onPress={() => dispatch(addToCart(item))}>
          <MaterialIcons name="add-circle" size={35} color={MindNightBule} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default GroceryDetails;

const styles = StyleSheet.create({
  groceryDetailsContainer: {
    width: 180,
    height: 270,
    marginEnd: 22,
    borderRadius: 15,
    backgroundColor: GreenLight,
  },
  ImageContainer: {
    flex: 1,
    width: 170,
    marginLeft: 6,
    marginTop: 6,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageBox: {
    aspectRatio: 1,
    objectFit: 'cover',
  },
  productDetails: {
    padding: 12,
  },
  productTitle: {
    fontFamily: PoppinsBold,
    fontSize: 18,
    color: MindNightBule,
  },
  productDis: {
    fontFamily: PoppinsSemiBold,
    fontSize: 12,
    color: MindNightBule,
  },
  priceItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    lineHeight: 1,
    gap: 5,
  },
  productDiscount: {
    fontFamily: PoppinsMedium,
    fontSize: 12,
    color: Red,
  },
  productPrice: {
    fontSize: 16,
    fontFamily: PoppinsBold,
    color: Green,
  },
  addItem: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});
