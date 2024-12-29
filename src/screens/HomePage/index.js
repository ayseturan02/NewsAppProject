import React from 'react';
import {Dimensions, SafeAreaView, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ExchangeCard,
  FlatListHome,
  Header,
  NewsCard,
  Newspaper,
  WeatherCard,
} from './../../components/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';

const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
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
        {/*  <Newspaper /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
