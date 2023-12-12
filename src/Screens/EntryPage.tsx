import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Green, White} from '../Components/Color';
import {PoppinsBold, PoppinsSemiBold} from '../Components/Fonts';

interface EntryPageProps {
  navigation: any;
}

const EntryPage: React.FC<EntryPageProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('bottomNavigation');
    }, 1000);
  }, []);

  return (
    <View style={styles.entryPage}>
      <View>
        <Text style={styles.firstName}>Nature's</Text>
        <Text style={styles.secondText}>Grocery online store</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  entryPage: {
    flex: 1,
    backgroundColor: Green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  firstName: {
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'uppercase',
    letterSpacing: 10,
    fontFamily: PoppinsBold,
    color: White,
  },
  secondText: {
    textAlign: 'center',
    fontFamily: PoppinsSemiBold,
    color: White,
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 5,
  },
});

export default EntryPage;
