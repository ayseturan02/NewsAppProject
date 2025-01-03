import {Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {getWeather} from './../../service';

const WeatherCard = () => {
  const [weatherElazig, setWeatherElazig] = useState(null);
  const [weatherIstanbul, setWeatherIstanbul] = useState(null);

  const fetchData = city => {
    const urlSent = `?data.lang=tr&data.city=${city}`;
    getWeather
      .getWeatherApi(urlSent)
      .then(data => {
        console.log('Tüm veriler:', data);
        if (data && data.result) {
          const today = new Date().toLocaleDateString('tr-TR');
          const todayWeather = data.result.find(item => item.date === today);
          if (city === 'Elazig') {
            setWeatherElazig(todayWeather || null);
          } else if (city === 'Istanbul') {
            setWeatherIstanbul(todayWeather || null);
          }
        }
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    fetchData('Elazig');
    fetchData('Istanbul');
  }, []);

  if (!weatherElazig || !weatherIstanbul) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>
          Yükleniyor veya veri bulunamadı...
        </Text>
      </View>
    );
  }

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {/* Elazığ Hava Durumu */}
      <View style={styles.text_position}>
        <Text style={styles.text2}>Elazig /{weatherElazig.degree}°C</Text>
        <Text style={styles.text2}>{weatherElazig.description}</Text>
      </View>

      {/* İstanbul Hava Durumu */}
      <View style={styles.text_position}>
        <Text style={styles.text2}>Istanbul /{weatherIstanbul.degree}°C</Text>
        <Text style={styles.text2}>{weatherIstanbul.description}</Text>
      </View>
    </View>
  );
};

export default WeatherCard;
