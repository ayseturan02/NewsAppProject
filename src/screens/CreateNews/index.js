import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';

const categories = [
  {id: 1, name: 'Gündem'},
  {id: 2, name: 'Dünya-Ekonomi'},
  {id: 3, name: 'Teknoloji'},
  {id: 4, name: 'Sağlık-Spor'},
  {id: 5, name: 'Siyaset'},
  {id: 6, name: 'Bilim-Eğitim'},
  {id: 7, name: 'Diğer'},
];

const CreateNews = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photoUri, setPhotoUri] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [username, setUsername] = useState('');
  const contentInputRef = useRef(null);

  useEffect(() => {
    const fetchUsername = () => {
      const user = auth().currentUser;
      if (user) {
        setUsername(user.displayName || 'Anonim');
      }
    };
    fetchUsername();
  }, []);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('Image selection cancelled');
      } else if (response.errorMessage) {
        Alert.alert('Hata', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setPhotoUri(response.assets[0].uri);
      }
    });
  };

  const uploadPhoto = async uri => {
    if (!uri) return null;
    const fileName = uri.substring(uri.lastIndexOf('/') + 1);
    const reference = storage().ref(fileName);
    await reference.putFile(uri);
    return await reference.getDownloadURL();
  };

  const saveToFirestore = async () => {
    if (!title.trim() || !content.trim() || !selectedCategory) {
      Alert.alert('Hata', 'Tüm alanları doldurduğunuzdan emin olun.');
      return;
    }

    try {
      const photoUrl = await uploadPhoto(photoUri);
      const data = {
        title: title.trim(),
        content: content.trim(),
        category: selectedCategory.name || 'Diğer',
        date: new Date(),
        photo: photoUrl || null,
        AuthorName: username || 'Anonim',
      };

      await firestore().collection('News').add(data);
      Alert.alert('Başarılı', 'Haber Moderatör onayından sonra yayınlanacak!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Hata', 'Haber kaydedilirken bir sorun oluştu.');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButton}>İptal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={saveToFirestore}>
            <Text style={styles.publishButton}>Yayınla</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Başlık Ekle"
            value={title}
            onChangeText={setTitle}
            returnKeyType="next"
            onSubmitEditing={() => contentInputRef.current.focus()}
          />
          <TextInput
            ref={contentInputRef}
            style={styles.contentInput}
            placeholder="Haber İçeriği"
            value={content}
            onChangeText={setContent}
            multiline
            autoFocus
          />

          {photoUri && (
            <Image source={{uri: photoUri}} style={styles.imagePreview} />
          )}

          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            <Text style={styles.imagePickerText}>Fotoğraf Ekle</Text>
          </TouchableOpacity>

          <View style={styles.categoryContainer}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.id}
                style={
                  selectedCategory?.id === category.id
                    ? styles.selectedCategory
                    : styles.categoryButton
                }
                onPress={() => setSelectedCategory(category)}>
                <Text
                  style={
                    selectedCategory?.id === category.id
                      ? styles.selectedCategoryText
                      : styles.categoryText
                  }>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateNews;
