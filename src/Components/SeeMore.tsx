import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import {PoppinsBold} from './Fonts';
import {MindNightBule, Red} from './Color';
import {useNavigation} from '@react-navigation/native';
const SeeMore = ({}) => {
  const navigation = useNavigation();
  const goToProductItem = () => {
    navigation.navigate('productItems');
  };
  return (
    <View style={styles.seeContainer}>
      <Text style={styles.titleName}>Products</Text>
      <View>
        <TouchableOpacity onPress={goToProductItem} activeOpacity={0.8}>
          <Foundation name="indent-more" size={25} color={MindNightBule} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeeMore;

const styles = StyleSheet.create({
  seeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  titleName: {
    fontFamily: PoppinsBold,
    color: MindNightBule,
    fontSize: 20,
  },
});
