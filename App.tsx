import React from 'react';
import {StyleSheet} from 'react-native';
import {PoppinsBold} from './src/Components/Fonts';
import {Green} from './src/Components/Color';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTopNavigation from './src/Navigation/BottomTopNavigation';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="bottomNavigation"
          component={BottomTopNavigation}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  Text: {
    fontFamily: PoppinsBold,
    fontWeight: '500',
    color: Green,
  },
});
