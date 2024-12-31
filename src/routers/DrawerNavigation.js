import {Dimensions, Image} from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import {Category} from './../screens/index';
import DrawerContent from '../components/DrawerContent';
import {
  igloo,
  world,
  euro,
  vote,
  heart,
  technology,
  atom,
  settings,
} from './../assets/icons/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();

const categories = [
  {id: 1, name: 'Gündem', icon: world},
  {id: 2, name: 'Dünya-Ekonomi', icon: euro},
  {id: 3, name: 'Siyaset', icon: vote},
  {id: 4, name: 'Sağlık-Spor', icon: heart},
  {id: 5, name: 'Teknoloji', icon: technology},
  {id: 6, name: 'Bilim-Eğitim', icon: atom},
];

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Anasayfa"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        drawerActiveBackgroundColor: '#B4B2B2FF',
        drawerType: 'back',
        drawerItemStyle: {
          borderRadius: 0,
          width: windowWidth * 0.55,
          right: windowWidth * 0.029,
        },
        drawerLabelStyle: {
          fontSize: windowWidth * 0.04,
          fontFamily: 'Alata',
          marginLeft: windowWidth * 0.05,
        },
        drawerStyle: {
          backgroundColor: 'white',
          width: windowWidth * 0.55,
          height: windowHeight * 1,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Anasayfa"
        component={BottomNavigation}
        options={{
          drawerIcon: () => (
            <Image
              source={igloo}
              style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              resizeMode="contain"
            />
          ),
        }}
      />
      {categories.map(category => (
        <Drawer.Screen
          key={category.id}
          name={category.name}
          component={Category}
          initialParams={{categoryId: category.id}}
          options={({focused}) => ({
            drawerIcon: ({focused}) => (
              <Image
                source={category.icon}
                style={{
                  width: windowWidth * 0.05,
                  height: windowWidth * 0.05,
                  tintColor: focused ? 'white' : 'black',
                }}
                resizeMode="contain"
              />
            ),
          })}
        />
      ))}
      <Drawer.Screen
        name="Ayarlar"
        component={Category}
        options={{
          drawerIcon: () => (
            <Image
              source={settings}
              style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
