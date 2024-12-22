import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouterNames} from './../config/index';
import {
  NewsDetail,
  Splash,
  Login,
  Register,
  Category,
  HomePage,
  CreateNews,
} from './../screens/index';
import BottomNavigation from './BottomNavigation';
import DrawerNavigation from './DrawerNavigation';
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen
        name={RouterNames.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.REGISTER}
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={RouterNames.HOMEPAGE}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.CREATE_NEWS}
        component={CreateNews}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.CATEGORY}
        component={Category}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.NEWS_DETAIL}
        component={NewsDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.SPLASH}
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Root;
