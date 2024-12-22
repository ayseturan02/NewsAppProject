import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {RouterNames} from '../../config';
const NewsCard = () => {
  const navigation = useNavigation();
  const [dish, setDish] = useState();
  const getData = async () => {
    const NewsCollection = await firestore().collection('News').get();
    console.log(NewsCollection.docs[0].data());
    setDish(NewsCollection.docs[0].data());
  };
  useEffect(() => {
    getData();
  }, []);

  const formatDate = timestamp => {
    if (timestamp && typeof timestamp.toDate === 'function') {
      return timestamp.toDate().toLocaleString();
    }
    return '';
  };
  return (
    <View style={styles.position}>
      {dish ? (
        <>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouterNames.NEWS_DETAIL, {
                    dish: dish,
                  })
                }>
                <View style={styles.text_view}>
                  <Text style={styles.title}>{dish.title}</Text>
                  <View style={styles.content_position}>
                    <Text style={styles.content} numberOfLines={3}>
                      {dish.content}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {dish.photo && (
                <Image source={{uri: dish.photo}} style={styles.image} />
              )}
            </View>
          </ScrollView>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default NewsCard;
