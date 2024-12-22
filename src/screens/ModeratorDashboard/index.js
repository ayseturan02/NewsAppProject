import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const ModeratorDashboard = () => {
  const [newsList, setNewsList] = useState([]);
  const navigation = useNavigation();

  // Verileri çekme
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

    return () => fetchNews(); // Unsubscribe işlemi
  }, []);

  // Silme fonksiyonu
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

  // Yayında bırakma fonksiyonu
  const keepPublished = () => {
    Alert.alert('Bilgi', 'Haber yayında bırakıldı.');
  };

  // Çıkış yapma fonksiyonu
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login'); // Login sayfasına yönlendirme
      })
      .catch(error => {
        Alert.alert('Hata', `Çıkış yapılamadı: ${error.message}`);
      });
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      
      <Text style={styles.content}>{item.content}</Text>
      
      {item.photo && (
        <Image source={{uri: item.photo}} style={styles.image} />
      )}

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
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
      <FlatList
        data={newsList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ModeratorDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f9f9f9',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  publishButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
