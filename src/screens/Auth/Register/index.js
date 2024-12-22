import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {TextInputs, Buttons} from './../../../components/index';
import {RouterNames} from '../../../config';
import {Logo2} from './../../../assets/images/index';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      Alert.alert('Başarılı', 'Kayıt işlemi tamamlandı!');
      console.log('User registered:', userCredential.user);
      navigation.navigate(RouterNames.LOGIN);
    } catch (error) {
      console.error('Firebase error:', error);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Hata', 'Bu e-posta adresi zaten kullanılıyor.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Hata', 'Geçersiz bir e-posta adresi girdiniz.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert(
          'Hata',
          'Şifre çok zayıf. Lütfen daha güçlü bir şifre kullanın.',
        );
      } else {
        Alert.alert('Hata', 'Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <Image source={Logo2} style={styles.image} />
          </View>
          <View style={{marginTop: windowHeight * 0.03}}>
            <Text style={styles.title_text}>REGISTER</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInputs
              name="Email"
              value={email}
              placeholder="E-posta adresinizi girin"
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInputs
              name="Password"
              value={password}
              placeholder="Şifrenizi girin"
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInputs
              name="Confirm Password"
              value={confirmPassword}
              placeholder="Şifrenizi tekrar girin"
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
          <Buttons name="Register now" onPress={handleRegister} />
          <TouchableOpacity
            onPress={() => navigation.navigate(RouterNames.LOGIN)}>
            <Text style={styles.loginText}>Hesabın var mı?</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
