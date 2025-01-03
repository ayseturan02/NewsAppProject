import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {RouterNames} from '../../config';
import Header from '../../components/Header';

const windowWidth = Dimensions.get('window').width;

const Category = ({route}) => {
  const {categoryName, categoryId} = route.params;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchNewsByCategory = async () => {
      try {
        const querySnapshot = await firestore()
          .collection('News')
          .where('category', '==', categoryName)
          .get();

        const fetchedNews = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(fetchedNews);
      } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsByCategory();
  }, [categoryName]);

  const formatDate = timestamp => {
    if (timestamp && typeof timestamp.toDate === 'function') {
      return timestamp.toDate().toLocaleString();
    }
    return '';
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Header />
      <Text style={styles.text}>{categoryName}</Text>
      <View style={{flex: 1}}>
        {loading ? (
          <Text>Loading...</Text>
        ) : news.length > 0 ? (
          <ScrollView>
            {news.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.navigate('NewsDetail', {news: item})}>
                <View style={styles.newsItem}>
                  <Text style={styles.newsTitle}>{item.title}</Text>
                  <Text style={styles.newsContent} numberOfLines={3}>
                    {item.content}
                  </Text>
                  {item.photo && (
                    <Image
                      source={{uri: item.photo}}
                      style={styles.newsImage}
                    />
                  )}
                  <Text style={styles.newsDate}>{formatDate(item.date)}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        ) : (
          <Text></Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  text: {
    fontSize: windowWidth * 0.08,
    fontFamily: 'Alata',
    textAlign: 'center',
    marginVertical: 10,
  },
  newsItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsContent: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  newsDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});
