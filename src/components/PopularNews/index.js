import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Dimensions,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {fetchPopularNews} from './../../service/newsService';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PopularNews = () => {
  const [popularNews, setPopularNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const getPopularNews = async () => {
      const news = await fetchPopularNews();
      setPopularNews(news);
      setLoading(false);
    };

    getPopularNews();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={popularNews}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetail', {dish: item})}>
          <View style={{margin: windowWidth * 0.01}}>
            <View
              style={{
                height: windowWidth * 0.6,
                width: windowWidth * 0.4,
                backgroundColor: 'white',
                shadowColor: '#000',
                borderWidth: windowWidth * 0.005,
                borderColor: '#D4D6D7FF',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                borderRadius: windowWidth * 0.02,
              }}>
              <View>
                <Image
                  source={{uri: item.photo}}
                  style={{
                    width: windowWidth * 0.395,
                    height: windowWidth * 0.4,
                    borderTopLeftRadius: windowWidth * 0.02,
                    borderTopRightRadius: windowWidth * 0.02,
                  }}
                />
              </View>
              <View style={{paddingLeft: windowWidth * 0.02}}>
                <Text
                  style={{
                    fontFamily: 'Alata',
                    fontSize: windowWidth * 0.04,
                  }}>
                  {item.AuthorName}
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, fontFamily: 'SixCaps'}}>
                  {item.title}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      nestedScrollEnabled={true}
    />
  );
};

export default PopularNews;
