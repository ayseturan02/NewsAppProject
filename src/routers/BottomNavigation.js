import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouterNames} from './../config/index';
import {HomePage, Profile, Notifications, LiveChat} from './../screens/index';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={RouterNames.HOMEPAGE} component={HomePage} />
      <Tab.Screen name={RouterNames.LIVE_CHAT} component={LiveChat} />
      <Tab.Screen name={RouterNames.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={RouterNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
