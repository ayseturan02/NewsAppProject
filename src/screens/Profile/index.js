import {
  Dimensions,
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ayse} from './../../assets/images/index';
import {Header, Plus} from '../../components/index';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text>BURAYA Bİ ARAYUZ TASARIMI</Text>
      <Plus />
    </SafeAreaView>
  );
};

export default Profile;
