import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const OtherUser = ({route}) => {
  const {authorName, news} = route.params;

  const renderNews = ({item}) => (
    <View style={styles.newsCard}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.authorName}>{authorName}</Text>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={renderNews}
      />
    </View>
  );
};

export default OtherUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  authorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newsCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsContent: {
    fontSize: 14,
    color: '#555',
  },
});
