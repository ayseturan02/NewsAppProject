import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

const HomeNews = props => {
  const navigation = useNavigation();
  const {image, date, description, name} = props;
  return (
    <View style={{marginTop: windowHeight * 0.02}}>
      <View style={styles.view_card}>
        <Image source={{uri: image}} style={styles.photo_size} />
        <View
          style={{
            height: windowWidth * 0.12,
            width: windowWidth * 0.9,
            padding: windowWidth * 0.012,
          }}>
          <Text style={{fontFamily: 'Alata', fontSize: windowWidth * 0.035}}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeNews;
