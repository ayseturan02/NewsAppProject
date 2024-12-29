import React, {useEffect, useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {Logo2} from '../../assets/images/index';

const Splash = () => {
  const navigation = useNavigation();
  const rotation = useRef(new Animated.Value(0)).current;
  const checkUserStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('user_token');
      if (isLoggedIn) {
        navigation.replace('Drawer');
      } else {
        navigation.replace('Login');
      }
    } catch (error) {
      console.error('Error checking user status:', error);
      navigation.replace('Login');
    }
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    const timer = setTimeout(() => {
      checkUserStatus();
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-15deg', '10deg'],
  });

  return (
    <TouchableWithoutFeedback onPress={checkUserStatus}>
      <SafeAreaView style={styles.container}>
        <View style={styles.position}>
          <View>
            <View style={styles.text_position}>
              <Text style={styles.text_news}>NEWS</Text>
            </View>
            <View style={styles.text_position1}>
              <Text style={styles.text}>from architetto fazıl</Text>
            </View>
          </View>
          <View style={styles.image_position}>
            <Animated.Image
              source={Logo2}
              style={[styles.image, {transform: [{rotate: rotateInterpolate}]}]}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Splash;
