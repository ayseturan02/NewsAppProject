import {
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {TextInputs, Buttons} from './../../../components/index';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logo2} from './../../../assets/images/index';
import styles from './styles';
import {RouterNames} from '../../../config';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const userId = userCredential.user.uid;

      console.log('Giriş başarılı!');
      if (userId === 'uSqIjVGiA7UXOLScINS2nBeinb33') {
        console.log('Moderatör girişi yapıldı.');
        navigation.replace(RouterNames.MODERATOR_DASHBOARD);
      } else {
        console.log('Normal kullanıcı girişi yapıldı.');
        if (isChecked) {
          await AsyncStorage.setItem('user_token', 'logged_in');
        }
        navigation.replace('Drawer');
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Hata', 'Kullanıcı bulunamadı.');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Hata', 'Hatalı şifre.');
      } else {
        Alert.alert('Hata', 'Bir sorun oluştu, lütfen tekrar deneyin.');
      }
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={{alignItems: 'center', marginTop: windowHeight * 0.05}}>
            <Image source={Logo2} style={styles.image} />
            <View style={{marginTop: windowHeight * 0.03}}>
              <Text style={styles.text}>LOGIN</Text>
            </View>
          </View>
          <View style={{alignSelf: 'center'}}>
            <TextInputs
              name="Email"
              placeholder="Email giriniz"
              onChangeText={text => setEmail(text)}
            />
            <TextInputs
              name="Password"
              placeholder="Şifre giriniz"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
            <View style={styles.view}>
              <TouchableOpacity
                onPress={() => setIsChecked(!isChecked)}
                style={[
                  styles.remember,
                  {backgroundColor: isChecked ? '#282D28' : 'white'},
                ]}>
                {isChecked && <View style={styles.tic} />}
              </TouchableOpacity>
              <Text style={styles.rememberI}>Beni hatırla</Text>
            </View>
            <Buttons name="Login now" onPress={handleLogin} />
            <View style={styles.account_text}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.haveAccount}>Hesabın yok mu?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
