import {Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {positive, negative} from './../../assets/images/index';
import {currencyToAll} from './../../service';

const ExchangeCard = () => {
  const [exchangeData, setExchangeData] = useState([]);

  const fetchData = () => {
    const currencies = `?currency=USD,EUR`;
    currencyToAll
      .currencyToAllApi(currencies)
      .then(data => {
        console.log("API'den dönen veri:", JSON.stringify(data, null, 2));
        if (data && data.result && Array.isArray(data.result)) {
          const filteredData = data.result.filter(item =>
            ['USD', 'EUR'].includes(item.code),
          );
          setExchangeData(filteredData);
        } else {
          console.error('Veri beklenilen formatta değil:', data);
        }
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (exchangeData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={{alignItems: 'center'}}>
      <View style={[styles.container, {flexDirection: 'row'}]}>
        {exchangeData.map((exchange, index) => (
          <View key={index} style={styles.view}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{exchange.name}/</Text>
              <Text style={styles.rate}>{exchange.rate}</Text>
              <View style={styles.image_position}>
                <Image
                  source={exchange.rate > 0 ? negative : positive}
                  style={styles.image}
                />
              </View>
              <Text style={styles.buying}>{exchange.buying} ||</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExchangeCard;
