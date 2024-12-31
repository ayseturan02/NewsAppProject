import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView, // ScrollView'ı ekliyoruz
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {launchImageLibrary} from 'react-native-image-picker';
import userImage from './../../assets/images/user.png';
import Modals from './../../components/Modals';
import styles from './styles';
import {NewsCard, Plus} from '../../components';

const windowWidth = Dimensions.get('window').width;

const Profile = () => {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(userImage);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Kullanıcıya özel renk seçici
  const getUserAvatarColor = username => {
    const colors = ['B53D38', '9E2A2F', 'A34F39', '8B2F2B', 'C14A4A'];
    const hash = username
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth().currentUser;
      if (user) {
        setUsername(user.displayName || 'Kullanıcı Adı Yok');
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();

        if (userDoc.exists && userDoc.data().profileImage) {
          setProfileImage({uri: userDoc.data().profileImage});
        } else {
          const avatarColor = getUserAvatarColor(
            user.displayName || 'Kullanıcı',
          );
          const generatedPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.displayName || 'Kullanıcı',
          )}&size=256&background=${avatarColor}&color=ffffff`;

          setProfileImage({uri: generatedPhoto});
        }
      }
    };
    fetchUserData();
  }, []);

  const handleImagePick = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.didCancel || !result.assets || !result.assets[0].uri) {
      alert('Resim seçimi iptal edildi.');
      return;
    }

    const imageUri = result.assets[0].uri;
    const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const reference = storage().ref(
      `profiles/${auth().currentUser.uid}/${filename}`,
    );

    try {
      setLoading(true);
      await reference.putFile(imageUri);
      const url = await reference.getDownloadURL();

      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .set({profileImage: url}, {merge: true});

      setProfileImage({uri: url});
      setModalVisible(false);
    } catch (error) {
      alert('Resim yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = async () => {
    try {
      setLoading(true);
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .set({profileImage: ''}, {merge: true});

      const avatarColor = getUserAvatarColor(username);
      const generatedPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        username,
      )}&size=256&background=${avatarColor}&color=ffffff`;

      setProfileImage({uri: generatedPhoto});
      setModalVisible(false);
    } catch (error) {
      alert('Profil resmi silinirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.profile_position}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          {profileImage.uri ? (
            <Image source={profileImage} style={styles.profile_size} />
          ) : (
            <View style={styles.user}>
              <Text style={styles.username}>
                {username.charAt(0).toUpperCase() || '?'}
              </Text>
            </View>
          )}
        </TouchableWithoutFeedback>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.name}>{username}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <NewsCard />
      </ScrollView>

      <Plus />
      <Modals
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onImagePick={handleImagePick}
        onRemoveImage={handleRemoveImage}
      />
    </SafeAreaView>
  );
};

export default Profile;
