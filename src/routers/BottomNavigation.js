import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouterNames} from './../config/index';
import {HomePage, Profile, Notifications, LiveChat} from './../screens/index';
import {Image, View, Dimensions} from 'react-native';
import {people, live, home, notification} from '../assets/icons/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({focused}) => {
          let icon;
          switch (route.name) {
            case RouterNames.HOMEPAGE:
              icon = home;
              break;
            case RouterNames.LIVE_CHAT:
              icon = live;
              break;
            case RouterNames.NOTIFICATIONS:
              icon = notification;
              break;
            case RouterNames.PROFILE:
              icon = people;
              break;
            default:
              icon = home;
          }
          return (
            <View style={{alignItems: 'center'}}>
              <Image
                source={icon}
                style={{
                  width: windowWidth * 0.055,
                  height: windowWidth * 0.055,
                  tintColor: focused ? '#B63E39' : 'gray',
                }}
              />
              {focused && (
                <View
                  style={{
                    height: windowWidth * 0.006,
                    width: windowWidth * 0.06,
                    backgroundColor: '#B63E39',
                    marginTop: windowHeight * 0.005,
                  }}
                />
              )}
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: windowWidth * 0.11,
        },
      })}>
      <Tab.Screen name={RouterNames.HOMEPAGE} component={HomePage} />
      <Tab.Screen name={RouterNames.LIVE_CHAT} component={LiveChat} />
      <Tab.Screen name={RouterNames.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={RouterNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
