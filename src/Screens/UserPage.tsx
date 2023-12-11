import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PoppinsRegular} from '../Components/Fonts';

const UserPage = () => {
  return (
    <View style={styles.userContainer}>
      <Text style={styles.textContainer}> No User</Text>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  userContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontFamily: PoppinsRegular,
    fontSize: 20,
  },
});
