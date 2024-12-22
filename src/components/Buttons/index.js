import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const Buttons = props => {
  const {name, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.view}>
        <View style={styles.position}>
          <Text style={styles.name_button}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Buttons;
