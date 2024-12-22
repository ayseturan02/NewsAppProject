import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {round} from './../../assets/icons/index';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const Plus = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.position}
      onPress={() => {
        navigation.navigate(RouterNames.CREATE_NEWS);
      }}>
      <Image source={round} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Plus;
