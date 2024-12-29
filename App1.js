import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App1 = () => {
  const [borderColor, setBorderColor] = useState('#262825');
  const [buttonColor, setButtonColor] = useState('#262825');

  const handleFocus = () => {
    setBorderColor('#B53D38');
    setButtonColor('#B53D38');
  };

  const handleBlur = () => {
    setBorderColor('#262825');
    setButtonColor('#262825');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'flex-end',
          height: windowHeight * 0.4,
          alignItems: 'center',
          width: windowWidth * 1,
        }}>
        <Text
          style={{
            fontSize: windowWidth * 0.05,
            fontFamily: 'Alata',
            color: 'black',
          }}>
          Kullanıcı adı belirleyiniz
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={{
            borderWidth: windowWidth * 0.006,
            borderRadius: windowWidth * 0.1,
            height: windowWidth * 0.13,
            width: windowWidth * 0.9,
            paddingLeft: windowWidth * 0.03,
            borderColor: borderColor,
          }}
          placeholderTextColor={'#ABABAB'}
          placeholder="ayseturan02"
          onFocus={handleFocus} // Odaklanma
          onBlur={handleBlur} // Odaktan çıkma
        />

        <View
          style={{
            marginTop: windowHeight * -0.061,
            left: windowWidth * 0.385,
          }}>
          <TouchableOpacity>
            <View
              style={{
                height: windowWidth * 0.11,
                width: windowWidth * 0.11,
                borderRadius: windowWidth * 0.1,
                backgroundColor: buttonColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{marginTop: windowHeight * -0.01}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: windowWidth * 0.07,
                    fontFamily: 'Asap',
                  }}>
                  →
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App1;
