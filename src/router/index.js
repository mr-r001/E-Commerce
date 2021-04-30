import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Home, IntroSlider, ProductDetail, Profile, SplashScreen} from '../pages';
import {BottomNavigation} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  const [token] = useState(true);
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transaksi" component={Home} />
      <Tab.Screen name="Al-Qur'an" component={Home} />
      {token ? (
        <Tab.Screen name="Profile" component={Profile} />
      ) : (
        <Tab.Screen name="Masuk" component={Home} />
      )}
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroSlider"
        component={IntroSlider}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
