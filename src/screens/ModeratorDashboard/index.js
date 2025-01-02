import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width;
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {RouterNames} from '../../config';
import styles from './styles';

const ModeratorDashboard = () => {
  const [newsList, setNewsList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchNews = firestore()
      .collection('News')
      .onSnapshot(snapshot => {
        const news = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNewsList(news);
      });

    return () => fetchNews();
  }, []);

  const deleteNews = id => {
    firestore()
      .collection('News')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert('Başarılı', 'Haber silindi.');
      })
      .catch(error => {
        Alert.alert('Hata', `Haber silinemedi: ${error.message}`);
      });
  };

  const keepPublished = () => {
    Alert.alert('Bilgi', 'Haber yayında bırakıldı.');
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate(RouterNames.OTHER_USER, {
            authorName: item.AuthorName,
            news: newsList.filter(news => news.AuthorName === item.AuthorName),
          })
        }>
        <Text
          style={{
            fontSize: windowWidth * 0.05,
            fontFamily: 'Alata',

          }}>
          {item.AuthorName}-profili görüntüle
        </Text>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.content}>{item.content}</Text>

      {item.photo && <Image source={{uri: item.photo}} style={styles.image} />}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteNews(item.id)}>
          <Text style={styles.buttonText}>Sil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.publishButton}
          onPress={() => keepPublished()}>
          <Text style={styles.buttonText}>Yayında Bırak</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: windowHeight * 0.03,
          marginLeft: windowWidth * 0.03,
        }}>
        <Text
          style={{
            fontSize: windowWidth * 0.15,
            fontFamily: 'ZillaSlabHighlight_Bold',
            color: '#262825',
          }}>
          Moderatör Paneli
        </Text>
      </View>
      <FlatList
        data={newsList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ModeratorDashboard;
