import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {parseString} from 'react-native-xml2js';
import moment from 'moment';
import styles from './styles';
const URL = 'https://www.sabah.com.tr/rss/yazarlar.xml';
import {
  Bülent,
  Dilek,
  Haşmet,
  Hilal,
  İdil,
  Kerem,
  Mahmut,
  Melih,
  Mevlüt,
  Nebi,
  Nihat,
  Yavuz,
  Yüksel,
  DefaultImage, // Varsayılan resim eklenmeli
} from './../../assets/images/index';

// Yazar isimlerinin ilk 3 harfleri ile resimleri eşleştiren obje
const authorImages = {
  'BÜL': Bülent,
  'DİL': Dilek,
  'HAŞ': Haşmet,
  'HİL': Hilal,
  'İDİ': İdil,
  'KER': Kerem,
  'MAH': Mahmut,
  'MEL': Melih,
  'MEV': Mevlüt,
  'NEB': Nebi,
  'NİH': Nihat,
  'YAV': Yavuz,
  'YÜK': Yüksel,
};

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAuthorData();
  }, []);

  const fetchAuthorData = async () => {
    try {
      const response = await axios.get(URL);
      parseString(response.data, (err, result) => {
        if (err) {
          console.error('XML Parse Error:', err);
          return;
        }

        const authorsArray = result.rss.channel[0].item
          .map(item => {
            const imageUrl = item.enclosure ? item.enclosure[0].$.url : null;
            const pubDate = item.pubDate ? item.pubDate[0] : null;
            const authorName = item.title[0];
            const authorInitials = authorName.substring(0, 3).toUpperCase();
            if (!imageUrl) {
              const authorImage = authorImages[authorInitials] || DefaultImage;
              return {
                title: authorName,
                description: item.description[0],
                link: item.link[0],
                image: authorImage,
                pubDate: pubDate,
              };
            }
            return {
              title: authorName,
              description: item.description[0],
              link: item.link[0],
              image: imageUrl,
              pubDate: pubDate,
            };
          })
          .filter(Boolean); 
        const sortedAuthors = authorsArray
          .sort((a, b) => moment(b.pubDate).diff(moment(a.pubDate))) 
          .slice(0, 3);

        setAuthors(sortedAuthors);
        setLoading(false);
      });
    } catch (error) {
      console.error('Error fetching author data:', error);
      setLoading(false);
    }
  };

  const handlePress = link => {
    Linking.openURL(link).catch(err =>
      console.error('Error opening URL:', err),
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handlePress(item.link)}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.position}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.date}>
            {item.pubDate
              ? moment(item.pubDate).format('DD MMM YYYY')
              : 'No date available'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={authors}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default AuthorList;
