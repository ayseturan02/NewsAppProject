import {View, Dimensions, Text, Alert, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
import styles from './styles';
import {power} from './../../assets/icons/index';
import {Logo2} from './../../assets/images/index';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

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
        <Image source={Logo2} style={styles.logo} />
      </View>
      <View style={styles.position}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.view}>
        <View style={styles.container}>
          <Image source={power} style={styles.icon} resizeMode="contain" />
          <Text style={styles.text} onPress={confirmLogout}>
            Çıkış Yap
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
