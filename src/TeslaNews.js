import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {getTeslaNews} from './api/newsApi';

const TeslaNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await getTeslaNews();
        console.log('Gelen Makaleler:', articles); // API yanıtını konsolda kontrol edin.
        setNews(articles);
      } catch (error) {
        console.error('Haberler yüklenirken hata:', error); // Hata durumunu göster.
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>
        {new Date(item.publishedAt).toLocaleString()}
      </Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={news}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  newsItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default TeslaNews;
