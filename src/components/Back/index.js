import {TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {image} from './../../assets/icons/index';
import styles from './styles';
const Back = () => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => Navigation.goBack()}>
      <View style={styles.view}>
        <View style={styles.position}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Back;
