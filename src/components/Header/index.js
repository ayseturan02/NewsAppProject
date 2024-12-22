import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {hamburger} = require('./../../assets/icons/index');
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
  const navigation = useNavigation();
  const translateX = useRef(new Animated.Value(windowWidth)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -windowWidth,
        duration: 5000,
        useNativeDriver: true,
      }),
    ).start();
  }, [translateX]);

  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <Animated.View
          style={[styles.text_rotate, {transform: [{translateX}]}]}>
          <Text style={styles.text}>
            BURAYA SON DAKİKA HABERLERİ YAZILACAK!
          </Text>
        </Animated.View>
      </View>
      <View style={styles.position}>
        <View style={styles.red}>
          <View style={styles.icon_text}>
            <View style={styles.icon_position}>
              <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                <Image source={hamburger} style={styles.icon} />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.dk}>
              <Text style={styles.dk_text}>SON DAKİKA</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
