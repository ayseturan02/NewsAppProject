import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {positive} from './src/assets/images';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const today = new Date().toISOString().split('T')[0]; // Bugünün tarihi (YYYY-MM-DD formatında)
        const response = await axios.get(
          'https://api.worldnewsapi.com/retrieve-front-page',
          {
            params: {
              'source-country': 'au', // İstediğiniz ülke kodu
              date: today,
              // 'source-name': 'herald-sun', // Belirli bir gazete ismi (isteğe bağlı)
            },
            headers: {
              'x-api-key': '7e4e8faac1b1457da3d2dd6502d33', // API anahtarınızı buraya ekleyin
            },
          },
        );

        console.log('API Yanıtı:', response.data);

        if (response.data && response.data.front_page) {
          setNewsData([response.data.front_page]);
        } else {
          console.log('Beklenen veri yapısı bulunamadı:', response.data);
        }
      } catch (error) {
        console.error('API Hatası:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({item}) => (
    <View style={styles.card}>
      {item.image ? (
        <View style={styles.position}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      ) : (
        <Text>Görsel mevcut değil</Text>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name || 'Başlık mevcut değil'}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={newsData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={<Text>Veri mevcut değil</Text>}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    height: windowWidth * 0.72,
    width: windowWidth * 0.48,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: windowWidth*0.01,
    margin: windowWidth * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: windowWidth * 0.6,
    width: windowWidth * 0.44,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingLeft: windowWidth * 0.015,
  },
  title: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontFamily: 'Alata',
  },
  position: {
    padding: windowHeight * 0.01,
  },
});

export default NewsPage;
