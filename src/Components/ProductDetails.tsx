import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {MindNightBule, White, Red, Black} from './Color';
import {PoppinsBold, PoppinsMedium, PoppinsSemiBold} from './Fonts';
import {useRoute} from '@react-navigation/native';

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  console.log(item);
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
          uri: item.image,
        }}
        style={styles.detailsImage}
      />
      <View style={styles.details}>
        <View style={styles.topDetails}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.priceItem}>
            <Text style={styles.productDiscount}>
              <Text>Off</Text> &#8377;{item.offer}
            </Text>
            <Text style={styles.price}> &#8377;{item.price}</Text>
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
          <Text style={styles.descriptionContent}>{item.discription}</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addItemButton}>
            <Fontisto name="shopping-bag" size={28} color={White} />
          </TouchableOpacity>
        </View>
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
    marginTop: 12,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyNowButton: {
    backgroundColor: Black,
    padding: 10,
    borderRadius: 25,
    width: '80%',
  },
  buyNowText: {
    color: White,
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
