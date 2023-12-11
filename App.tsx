import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTopNavigation from './src/Navigation/BottomTopNavigation';
import {CartPage, CheckoutPage} from './src/Screens';
import {ProductDetails, ProductItems} from './src/Components/index';

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
        <stack.Screen
          name="cart"
          component={CartPage}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="checkOut"
          component={CheckoutPage}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="productItems"
          component={ProductItems}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
