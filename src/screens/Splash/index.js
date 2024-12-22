import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
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
  const timerRef = useRef(null);
  const rotation = useRef(new Animated.Value(10)).current;

  const checkUserStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('user_token');
      if (isLoggedIn) {
        navigation.replace('Drawer');
      } else {
        navigation.replace('Register');
      }
    } catch (error) {
      console.error('Error checking user status:', error);
      navigation.replace('Register');
    }
  };

  const navigateToHome = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    checkUserStatus();
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigateToHome();
    }, 30000);

    // Animasyon başlatma
    Animated.timing(rotation, {
      toValue: -20,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [-20, 10],
    outputRange: ['-20deg', '10deg'],
  });

  return (
    <TouchableWithoutFeedback onPress={navigateToHome}>
      <SafeAreaView style={styles.container}>
        <View style={styles.position}>
          <View>
            <View style={styles.text_position}>
              <Text style={styles.text_news}>NEWS</Text>
            </View>
            <View style={styles.text_position1}>
              <Text style={styles.text}>form the world</Text>
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
