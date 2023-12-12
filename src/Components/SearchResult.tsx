import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {Black, GreenLight, MindNightBule} from './Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {PoppinsRegular} from './Fonts';

const SearchResult = ({item}) => {
  const navigation = useNavigation();
  const goToDetails = () => {
    navigation.navigate('productDetails', {main: item});
  };
  return (
    <TouchableOpacity onPress={goToDetails} activeOpacity={0.6}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.productImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.textName}>
            {item.name}
          </Text>
          <MaterialIcons name="chevron-right" size={40} color={Black} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SearchResult);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: GreenLight,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 0.2,
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.8,
  },
  textName: {
    color: MindNightBule,
    fontFamily: PoppinsRegular,
    flex: 1,
    fontSize: 16,
  },
});
