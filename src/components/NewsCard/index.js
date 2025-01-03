import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {RouterNames} from '../../config';
import auth from '@react-native-firebase/auth';

const NewsCard = () => {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        console.log('Kullanıcı giriş yapmamış.');
        return;
      }

      const username = currentUser.displayName;
      const querySnapshot = await firestore()
        .collection('News')
        .where('AuthorName', '==', username)
        .get();

      const fetchedDishes = querySnapshot.docs.map(doc => ({
        id: doc.id, // Belge ID'sini dahil et
        ...doc.data(),
      }));
      setDishes(fetchedDishes);
    } catch (error) {
      console.error('Veri alınırken hata oluştu:', error);
    } finally {
      setLoading(false);
    }
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
      {loading ? (
        <Text>Loading...</Text>
      ) : dishes.length > 0 ? (
        <ScrollView>
          {dishes.map((dish, index) => (
            <View key={index} style={styles.container}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scroll_view}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate(RouterNames.NEWS_DETAIL, {
                      dish: dish, // Tüm dish nesnesini id ile birlikte aktar
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
                </TouchableWithoutFeedback>
                {dish.photo && (
                  <Image source={{uri: dish.photo}} style={styles.image} />
                )}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default NewsCard;