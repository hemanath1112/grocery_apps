import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MindNightBule, White, Red, Black} from './Color';
import {PoppinsBold, PoppinsMedium, PoppinsSemiBold} from './Fonts';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeToCart} from '../Redux/CartSlice';

interface ProductDetailsProps {
  route: {
    params: {
      main: {
        name: string;
        price: number;
        discription: string;
        offer: number;
        image: string;
      };
    };
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.CartSlice);
  const {name, price, discription, offer, image} = route.params.main;
  const dataItem = route.params.main;

  const goBack = () => {
    navigation.goBack();
  };

  const addToCartHandler = () => {
    console.log('Adding to cart');
    dispatch(addToCart(dataItem));
    navigation.navigate('Cart');
  };

  const removeToCartHandler = () => {
    console.log('Adding to cart');
    dispatch(removeToCart(dataItem));
  };

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.headerItem}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons
            name="chevron-back-circle"
            size={35}
            color={MindNightBule}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.detailsImage}
      />
      <View style={styles.details}>
        <View style={styles.topDetails}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.priceItem}>
            <Text>
              <Text style={styles.productDiscount}>Off</Text>
              <Text style={{fontSize: 14, color: Red}}> ₹</Text>
              <Text style={styles.productDiscount}>{offer}</Text>
            </Text>
            <Text>
              {' '}
              <Text style={{fontSize: 20, color: MindNightBule}}>₹</Text>
              <Text style={styles.price}>{price}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            <>
              {[1, 2, 3, 4, 5].map(index => (
                <Ionicons name="star" key={index} size={24} color="gold" />
              ))}
            </>

            <Text style={styles.ratingRank}> (4.9)</Text>
          </View>
        </View>

        <View style={styles.itemDescription}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionContent}>{discription}</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        {storeData.some(value => value.name == dataItem.name) ? (
          <TouchableOpacity
            disabled={true}
            style={styles.buyNowButton2}
            onPress={removeToCartHandler}
            activeOpacity={0.8}>
            <Text style={styles.buyNowText2}>Added to Your Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={addToCartHandler}
            activeOpacity={0.8}>
            <Text style={styles.buyNowText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: White,
    height: '100%',
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
  detailsImage: {
    aspectRatio: 1,
    objectFit: 'cover',
  },
  details: {
    marginTop: -20,
    backgroundColor: White,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  topDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontFamily: PoppinsBold,
    fontSize: 20,
    color: MindNightBule,
    width: 250,
  },
  price: {
    fontFamily: PoppinsBold,
    fontSize: 20,
    color: MindNightBule,
  },
  priceItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    lineHeight: 1,
    gap: 5,
  },
  productDiscount: {
    fontFamily: PoppinsSemiBold,
    fontSize: 14,
    color: Red,
  },
  ratingRow: {
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  ratingRank: {
    fontSize: 12,
    fontFamily: PoppinsMedium,
  },
  itemDescription: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  descriptionTitle: {
    fontFamily: PoppinsSemiBold,
    color: Black,
    fontSize: 18,
  },
  descriptionContent: {
    fontFamily: PoppinsMedium,
    fontSize: 14,
    textAlign: 'justify',
  },
  buttonRow: {
    // backgroundColor: 'red',
    flex: 0.9,
    marginTop: 12,
    marginHorizontal: 20,
    // flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  buyNowButton: {
    // height: 60,
    backgroundColor: Black,
    padding: 10,
    borderRadius: 25,
    width: '100%',
  },
  buyNowButton2: {
    // height: 60,
    // backgroundColor: Red,
    padding: 10,
    borderRadius: 25,
    width: '100%',
  },
  buyNowText: {
    color: White,
    textAlign: 'center',
    fontFamily: PoppinsBold,
    textTransform: 'uppercase',
    fontSize: 16,
  },
  buyNowText2: {
    color: Black,
    textAlign: 'center',
    fontFamily: PoppinsBold,
    textTransform: 'uppercase',
    fontSize: 16,
  },
  addItemButton: {
    backgroundColor: Black,
    padding: 10,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
