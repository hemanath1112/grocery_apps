import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import {PoppinsRegular, PoppinsSemiBold} from '../Components/Fonts';
import {Black, Green, White} from '../Components/Color';
import {
  SearchItem,
  SliderItem,
  GroceryItem,
  SeeMore,
} from '../Components/index';
import {useSelector} from 'react-redux';

const HomePage = ({navigation}: any) => {
  const storeData = useSelector((state: any) => state.CartSlice);
  const goToCartPage = () => {
    navigation.navigate('cart');
  };

  return (
    <SafeAreaView style={styles.conatainer}>
      <View style={styles.topBar}>
        <View style={styles.topItem}>
          <View>
            <Text style={styles.headerText}>
              Nature's <Text style={{color: Green}}>Grocery..</Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={goToCartPage}>
              <View style={styles.cartCount}>
                {storeData.length == 0 ? (
                  <></>
                ) : (
                  <Text style={styles.countText}>{storeData.length}</Text>
                )}
              </View>
              <Fontisto name="shopping-bag" size={28} color={Black} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <SearchItem />
        <SliderItem />
        <SeeMore />
        <GroceryItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  topBar: {
    marginHorizontal: 22,
    marginTop: 12,
  },
  topItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 22,
    fontFamily: PoppinsSemiBold,
    textTransform: 'uppercase',
    color: Black,
    alignSelf: 'baseline',
    marginTop: 12,
  },
  cartCount: {
    position: 'absolute',
    bottom: 18,
    right: -4,
    zIndex: 9999,
  },
  countText: {
    color: White,
    fontFamily: PoppinsRegular,
    fontWeight: '700',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#27ae60',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
