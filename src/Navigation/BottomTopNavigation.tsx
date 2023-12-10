import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage, SearchPage, UserPage} from '../Screens/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Gray, Green} from '../Components/Color';

const BottomTopNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="home"
                size={28}
                color={focused ? Green : Gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="search"
                size={26}
                color={focused ? Green : Gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={UserPage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome5
                name="user-alt"
                size={24}
                color={focused ? Green : Gray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTopNavigation;
