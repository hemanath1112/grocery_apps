import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MindNightBule, White, Red} from './Color';
import {PoppinsBold, PoppinsMedium, PoppinsSemiBold} from './Fonts';

const ProductDetails = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
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
          uri: 'https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg',
        }}
        style={styles.detailsImage}
      />
      <View style={styles.details}>
        <View style={styles.topDetails}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceItem}>
            <Text style={styles.productDiscount}>
              <Text>Off</Text> $70
            </Text>
            <Text style={styles.price}>Product</Text>
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
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
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
});
