import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeNews = props => {
  const navigation = useNavigation();
  const {image, description} = props;
  return (
    <View style={styles.top}>
      <View style={styles.view_card}>
        <Image source={{uri: image}} style={styles.photo_size} />
        <View style={styles.card}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeNews;
