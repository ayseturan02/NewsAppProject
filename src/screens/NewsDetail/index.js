import React from 'react';
import {
  SafeAreaView,
  Image,
  Dimensions,
  View,
  Text,
  ScrollView,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';
import {ayse, world} from './../../assets/images/index';
import {Back} from './../../components/index';
const StyledText = ({text, firstLetterSize, textSize, style}) => {
  if (!text) {
    return null;
  }

  const firstLetter = text.charAt(0);
  const remainingText = text.slice(1);

  return (
    <Text style={style}>
      <Text style={{fontSize: firstLetterSize}}>{firstLetter}</Text>
      <Text style={{fontSize: textSize}}>{remainingText}</Text>
    </Text>
  );
};
const formatDate = timestamp => {
  if (timestamp && typeof timestamp.toDate === 'function') {
    return timestamp.toDate().toLocaleString();
  }
  return 'No Date Provided';
};
const NewsDetail = ({route}) => {
  const {dish} = route.params;
  const longText = {_html: dish.content};
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {dish.photo && (
          <Image source={{uri: dish.photo}} style={styles.image} />
        )}
        <Back />
        <View style={styles.position}>
          <View style={{marginLeft: windowWidth * 0.02}}>
            <Image source={ayse} style={styles.photo} />
          </View>
          <View style={styles.user_name_position}>
            <Text style={styles.user_name}>{dish.AuthorName}</Text>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.date_text}>{formatDate(dish.date)}</Text>
          <View style={styles.title_position}>
            <Text style={styles.title}>{dish.title}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <StyledText
            text={dish?.content || 'No content available'}
            firstLetterSize={windowWidth * 0.1}
            textSize={windowWidth * 0.04}
            style={styles.content_text}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetail;
