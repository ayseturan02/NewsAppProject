import {Dimensions} from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import {Category} from './../screens/index';
import DrawerContent from '../components/DrawerContent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();

const categories = [
  {id: 1, name: 'Gündem'},
  {id: 2, name: 'Dünya-Ekonomi'},
  {id: 3, name: 'Siyaset'},
  {id: 4, name: 'Sağlık-Spor'},
  {id: 5, name: 'Teknoloji'},
  {id: 6, name: 'Bilim-Eğitim'},
];
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Anasayfa"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        drawerActiveBackgroundColor: '#B63E39',
        drawerType: 'back',
        drawerItemStyle: {
          borderRadius: 0,
          width: windowWidth * 0.55,
          right: windowWidth * 0.029,
        },
        drawerLabelStyle: {
          fontSize: windowWidth * 0.034,
          fontFamily: 'ABeeZee',
          marginLeft: windowWidth * 0.05,
        },
        drawerStyle: {
          backgroundColor: 'white',
          width: windowWidth * 0.55,
          height: windowHeight * 1,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Anasayfa" component={BottomNavigation} />
      {categories.map(category => (
        <Drawer.Screen
          key={category.id}
          name={category.name}
          component={Category}
          initialParams={{categoryId: category.id}}
        />
      ))}
      <Drawer.Screen name="Ayarlar" component={Category} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
