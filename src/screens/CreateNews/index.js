import React, {useState, useRef} from 'react';
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
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';

const categories = [
  {id: 1, name: 'Gündem'},
  {id: 2, name: 'Ekonomi'},
  {id: 3, name: 'Teknoloji'},
  {id: 4, name: 'Sağlık'},
  {id: 5, name: 'Spor'},
  {id: 6, name: 'Siyaset'},
  {id: 7, name: 'Bilim'},
  {id: 8, name: 'Dünya'},
  {id: 9, name: 'Çevre'},
  {id: 10, name: 'Eğitim'},
  {id: 11, name: 'Diğer'},
];

const CreateNews = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photoUri, setPhotoUri] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const contentInputRef = useRef(null);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('Image selection cancelled');
      } else if (response.errorMessage) {
        Alert.alert('Hata', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setPhotoUri(uri);
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
    if (!title || !content || !selectedCategory) {
      Alert.alert('Hata', 'Tüm alanları doldurduğunuzdan emin olun.');
      return;
    }

    try {
      const photoUrl = await uploadPhoto(photoUri);
      await firestore()
        .collection('News')
        .add({
          title,
          content,
          category: selectedCategory.name,
          date: new Date(),
          photo: photoUrl || null,
        });
      Alert.alert('Başarılı', 'Haber başarıyla yayınlandı!');
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
