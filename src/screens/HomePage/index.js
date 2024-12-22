import React from 'react';
import {Dimensions, SafeAreaView, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ExchangeCard,
  FlatListHome,
  Header,
  NewsCard,
  WeatherCard,
} from './../../components/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';

const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Header />
      <View style={{padding: windowWidth * 0.02}}>
        <Text style={styles.text}>
          <Text style={{fontSize: windowWidth * 0.16}}>NEWS </Text>from the
          world
        </Text>
      </View>
      <FlatListHome />
      <View style={{flexDirection: 'row', marginTop: windowHeight * 0.03}}>
        {/*  <ExchangeCard />  */}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
