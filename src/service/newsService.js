import firestore from '@react-native-firebase/firestore';

export const incrementViewCount = async newsId => {
  try {
    const newsRef = firestore().collection('News').doc(newsId);
    await newsRef.update({
      views: firestore.FieldValue.increment(1),
    });
    console.log('Okunma sayısı başarıyla artırıldı.');
  } catch (error) {
    console.error('Okunma sayısı artırılamadı:', error);
  }
};

export const fetchPopularNews = async () => {
  try {
    const newsRef = firestore().collection('News'); // Firestore'daki News koleksiyonu
    const snapshot = await newsRef.orderBy('views', 'desc').limit(10).get(); // En popüler 10 haberi alıyoruz (views'a göre azalan sıralama)

    const newsList = snapshot.docs.map(doc => {
      return {...doc.data(), id: doc.id}; // Firestore belge verilerini alıyoruz ve id'yi de ekliyoruz
    });

    return newsList; // Verileri döndürüyoruz
  } catch (error) {
    console.error('Popüler haberler alınamadı:', error);
    return [];
  }
};

export const likeNews = async newsId => {
  const newsRef = firestore().collection('news').doc(newsId);

  await newsRef.update({
    likes: firestore.FieldValue.increment(1),
  });
};

export const addComment = async (newsId, text) => {
  const comment = {text, timestamp: new Date()};
  const newsRef = firestore().collection('news').doc(newsId);
  const commentsRef = newsRef.collection('comments');

  await commentsRef.add(comment);
  return comment;
};
