import {Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {getWeather} from './../../service';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const fetchData = city => {
    const urlSent = `?data.lang=tr&data.city=${city}`;
    getWeather
      .getWeatherApi(urlSent)
      .then(data => {
        console.log('Tüm veriler:', data);
        if (data && data.result) {
          const today = new Date().toLocaleDateString('tr-TR');
          const todayWeather = data.result.find(item => item.date === today);
          setWeather(todayWeather || null);
        }
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    fetchData('Elazig');
  }, []);

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>
          Yükleniyor veya veri bulunamadı...
        </Text>
      </View>
    );
  }
  return (
  
      <View style={styles.view}>
        <View style={styles.text_position}>
          <Text style={styles.text2}>Elazig /{weather.degree}°C</Text>
          <Text style={styles.text2}>{weather.description}</Text>
        </View>
      </View>

  );
};

export default WeatherCard;
