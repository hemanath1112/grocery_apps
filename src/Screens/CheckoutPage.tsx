import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Green, MindNightBule, White} from '../Components/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PoppinsRegular} from '../Components/Fonts';
import {useNavigation} from '@react-navigation/native';

const CheckoutPage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <MaterialIcons name="verified" size={70} color={Green} />
      <Text style={styles.verifiy}>
        Congrats,Your Oder Places Successfully!!
      </Text>
    </View>
  );
};

export default CheckoutPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiy: {
    fontSize: 16,
    fontFamily: PoppinsRegular,
    color: MindNightBule,
  },
});
