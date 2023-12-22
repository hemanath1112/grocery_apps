import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTopNavigation from './src/Navigation/BottomTopNavigation';
import {CartPage, CheckoutPage, LoginPage} from './src/Screens';
import {ProductDetails, ProductItems} from './src/Components/index';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store';
import EntryPage from './src/Screens/EntryPage';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="entrypage"
          screenOptions={{
            headerShown: false,
          }}>
          <stack.Screen
            name="bottomNavigation"
            component={BottomTopNavigation}
          />
          <stack.Screen name="cart" component={CartPage} />
          <stack.Screen name="checkOut" component={CheckoutPage} />
          <stack.Screen name="productDetails" component={ProductDetails} />
          <stack.Screen name="productItems" component={ProductItems} />
          <stack.Screen name="entrypage" component={EntryPage} />
          <stack.Screen name="login" component={LoginPage} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
