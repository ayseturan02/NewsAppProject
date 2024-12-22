import auth from '@react-native-firebase/auth';

const SignOut = async () => {
  try {
    await auth().signOut();
    console.log('Çıkış başarılı!');
    // Kullanıcıyı giriş sayfasına yönlendirebilirsin
  } catch (error) {
    console.error('Çıkış işlemi başarısız:', error);
  }
};
