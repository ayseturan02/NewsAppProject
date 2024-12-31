import {View, Dimensions, Text, Alert, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth'; // Firebase auth'u ekle

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';
import {power} from './../../assets/icons/index';
import {Logo2} from './../../assets/images/index';

const DrawerContent = props => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        await auth().signOut();
        console.log('Firebase oturumu kapatıldı.');
      } else {
        console.log('Zaten oturum açmış bir kullanıcı yok.');
      }

      await AsyncStorage.removeItem('user_token');
      console.log('Yerel token temizlendi.');

      navigation.replace('Login');
    } catch (error) {
      console.error('Çıkış işlemi sırasında hata:', error);
      Alert.alert(
        'Hata',
        'Çıkış işlemi sırasında bir sorun oluştu. Lütfen tekrar deneyin.',
        [{text: 'Tamam'}],
      );
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Çıkış Yap',
      'Çıkış yapmak istediğinizden emin misiniz?',
      [
        {text: 'Hayır', style: 'cancel'},
        {text: 'Evet', onPress: handleLogout},
      ],
      {cancelable: true},
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: windowWidth * 0.1}}>
        <Image
          source={Logo2}
          style={{
            height: windowWidth * 0.3,
            width: windowWidth * 0.26,
            transform: [{rotate: '-35deg'}],
          }}
        />
      </View>
      <View style={{marginTop: windowHeight * -0.02}}>
        <DrawerItemList {...props} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: windowHeight * 0.02,
        }}>
        <View
          style={{
            marginTop: windowHeight * 0.03,
            flexDirection: 'row',
            left: windowWidth * 0.02,
            alignItems: 'center',
          }}>
          <Image
            source={power}
            style={{
              width: windowWidth * 0.05,
              height: windowWidth * 0.05,
              tintColor: '#B53D38',
              marginRight: windowWidth * 0.04,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: windowWidth * 0.04,
              fontFamily: 'Alatsi',
              color: '#B53D38',
              padding: windowWidth * 0.02,
            }}
            onPress={confirmLogout}>
            Çıkış Yap
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
