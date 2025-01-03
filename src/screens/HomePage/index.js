import React from 'react';
import {Dimensions, SafeAreaView, Text, View, FlatList} from 'react-native';
import {
  AuthorList,
  ExchangeCard,
  FlatListHome,
  Header,
  Newspaper,
  PopularNews,
  WeatherCard,
} from './../../components/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';

const HomePage = () => {
  const data = [
    {id: '1', component: <Header />},
    {
      id: '2',
      component: (
        <View style={{padding: windowWidth * 0.02, flexDirection: 'row'}}>
          <Text style={styles.text}>
            <Text style={{fontSize: windowWidth * 0.18}}>NEWS </Text>from the
            world
          </Text>
          <View style={styles.weather}>
            <WeatherCard />
          </View>
        </View>
      ),
    },
    {id: '3', component: <FlatListHome />},
    {id: '6', component: <ExchangeCard />},
    {
      id: '4',
      component: (
        <View style={{margin: windowWidth * 0.02}}>
          <Text style={styles.title}>En çok okunan haberler</Text>
        </View>
      ),
    },
    {id: '5', component: <PopularNews />},
    {
      id: '4',
      component: (
        <View style={{margin: windowWidth * 0.02}}>
          <Text style={styles.title}>Köşe yazarları</Text>
        </View>
      ),
    },
    {id: '8', component: <AuthorList />},
    {id: '7', component: <Newspaper />},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => item.component}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomePage;
