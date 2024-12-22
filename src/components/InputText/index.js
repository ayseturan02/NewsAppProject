import {View, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {search} from './../../assets/icons/index';
const index = props => {
  const {placeholder} = props;
  return (
    <View>
      <TextInput
        placeholderTextColor={'#DCDCDC'}
        placeholder={placeholder}
        style={styles.input}></TextInput>
      <View style={styles.position}>
        <Image source={search} style={styles.icon} />
      </View>
    </View>
  );
};
export default index;
