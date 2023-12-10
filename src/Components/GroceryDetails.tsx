import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {GreenLight} from './Color';

const GroceryDetails = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.groceryDetailsContainer}>
        <View style={styles.ImageContainer}>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg',
            }}
            style={styles.imageBox}
          />
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productTitle} numberOfLines={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            laborum earum hic placeat quaerat reprehenderit repellat optio
            aspernatur natus iste saepe soluta, deleniti blanditiis amet
            nesciunt molestias ratione adipisci necessitatibus!
          </Text>
          <Text style={styles.productDis} numberOfLines={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            adipisci ducimus harum quam tempora quo suscipit quae, corporis,
            modi enim quibusdam aspernatur molestiae fugiat necessitatibus
            minima ipsum vero! Autem, fugiat.
          </Text>
          <Text style={styles.productDiscount}>
            <Text>Discount</Text> $70
          </Text>
          <Text style={styles.productPrice}>
            <Text>Price</Text> $77778
          </Text>
        </View>
        {/* <Text>{item.name}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default GroceryDetails;

const styles = StyleSheet.create({
  groceryDetailsContainer: {
    width: 182,
    height: 260,
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
});
