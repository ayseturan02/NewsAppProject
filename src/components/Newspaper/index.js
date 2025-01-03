import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from './styles';

const Newspaper = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const response = await axios.get(
          'https://api.worldnewsapi.com/retrieve-front-page',
          {
            params: {
              'source-country': 'au',
              date: today,
            },
            headers: {
              'x-api-key': '3b18f024822f40fda237385ebd5d8fec',
            },
          },
        );

        console.log('API Yanıtı:', response.data);

        if (response.data && response.data.front_page) {
          setNewsData(response.data.front_page);
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

  const moveItemToTop = (item) => {
    setNewsData((prevNews) => {
      const filteredNews = prevNews.filter((news) => news !== item);
      return [item, ...filteredNews];
    });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => moveItemToTop(item)}>
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
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={newsData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={false} 
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<Text>Veri mevcut değil</Text>}
    />
  );
};

export default Newspaper;
