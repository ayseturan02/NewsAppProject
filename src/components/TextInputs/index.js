import {Text, View, Dimensions, TextInput} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {user, visible, hidden} from './../../assets/icons/index';
import styles from './styles';

const TextInputs = props => {
  const [isFocused, setIsFocused] = useState(false);
  const {name, placeholder, value} = props;
  return (
    <View style={{marginTop: windowHeight * 0.02}}>
      <Text style={styles.input_text}>{name}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={
          name === 'Password' || name === 'Confirm Password' ? true : false
        }
        padding={windowWidth * 0.03}
        style={[styles.input, isFocused && styles.focusedInput]}
        onChangeText={props.onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default TextInputs;
