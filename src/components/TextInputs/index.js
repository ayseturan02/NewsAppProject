import {Text, View, Dimensions, TextInput} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
import styles from './styles';

const TextInputs = props => {
  const [isFocused, setIsFocused] = useState(false);
  const {name, placeholder, value, onChangeText} = props;
  const isSecureField = name === 'Password' || name === 'Confirm Password';

  return (
    <View style={styles.input_container}>
      <Text style={styles.input_text}>{name}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={isSecureField}
        padding={windowWidth * 0.03}
        style={[styles.input, isFocused && styles.focusedInput]}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default TextInputs;
