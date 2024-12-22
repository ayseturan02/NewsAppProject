import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, Image, Dimensions, Text} from 'react-native';
import {PlaceApi} from './../../service';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';
const FlatListHome = () => {
  const [news, setNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const fetchData = async () => {
    try {
      const data = await PlaceApi.getNewsApi('?country=tr&tag=general');
      console.log('API Yanıtı:', data);
      if (data.result) {
        setNews(data.result);
      } else {
        console.log('API sonucu boş!');
        setNews([]);
      }
    } catch (error) {
      console.error('Veri çekme hatası:', error);
      setNews([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % news.length;
          if (flatListRef.current) {
            flatListRef.current.scrollToOffset({
              offset: nextIndex * windowWidth,
              animated: true,
            });
          }
          return nextIndex;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [news]);

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / windowWidth);
    setActiveIndex(index);
  };

  if (!news || news.length === 0) {
    return <Text style={styles.no}>Henüz haber bulunmamaktadır.</Text>;
  }

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={item => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
        renderItem={({item}) => (
          <View style={styles.position}>
            <View style={styles.imageContainer}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.text_container}>
                <Text style={styles.text}>{item.description}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.pagination}>
        {news.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? '#B8001F' : '#ccc'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default FlatListHome;
