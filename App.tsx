import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.Text}>Hiiii</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Text: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
  },
});
