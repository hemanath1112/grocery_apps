import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTopNavigation from './src/Navigation/BottomTopNavigation';
import {CartPage, CheckoutPage, HomePage} from './src/Screens';
import {ProductDetails, ProductItems} from './src/Components/index';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store';
import EntryPage from './src/Screens/EntryPage';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="entrypage">
          <stack.Screen
            name="bottomNavigation"
            component={BottomTopNavigation}
            options={{headerShown: false}}
          />
          {/* <stack.Screen
            name="Home"
            component={HomePage}
            options={{headerShown: false}}
          /> */}
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
          <stack.Screen
            name="entrypage"
            component={EntryPage}
            options={{headerShown: false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
