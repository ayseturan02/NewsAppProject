import firebase from '@react-native-firebase/app';

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: 'AIzaSyBb6tcZNkoNQCs_B_kk1f1RrrkBSNjtpcQ',
  authDomain: 'newsapp-49c48.firebaseapp.com',
  projectId: 'newsapp-49c48',
  storageBucket: 'newsapp-49c48.firebasestorage.app',
  messagingSenderId: '918175875895',
  appId: '1:807463938456:android:16fff8f16dfd22276123ed',
};

// Firebase uygulamasının başlatılmamış olduğuna dair kontrol
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Eğer başlatıldıysa mevcut uygulamayı kullan
}

export default firebase;
