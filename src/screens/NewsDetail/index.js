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
import {Back} from './../../components/index';
const getUserAvatarColor = username => {
  const colors = ['B53D38', '9E2A2F', 'A34F39', '8B2F2B', 'C14A4A'];
  const hash = username
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};
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

const generateProfilePhoto = name => {
  const avatarColor = getUserAvatarColor(name);
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || 'Kullanıcı',
  )}&size=256&background=${avatarColor}&color=ffffff`;
};

const NewsDetail = ({route}) => {
  const {dish} = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <Back />
      <ScrollView>
        {dish.photo ? (
          <Image source={{uri: dish.photo}} style={styles.image} />
        ) : (
          <View style={{top: windowHeight * -0.06}} />
        )}

        <View style={styles.position}>
          <View style={{marginLeft: windowWidth * 0.02}}>
            {dish.AuthorPhoto ? (
              <Image source={{uri: dish.AuthorPhoto}} style={styles.photo} />
            ) : (
              <Image
                source={{uri: generateProfilePhoto(dish.AuthorName)}}
                style={styles.photo}
              />
            )}
          </View>
          <View style={styles.user_name_position}>
            <Text style={styles.user_name}>
              {dish.AuthorName || 'Anonim Kullanıcı'}
            </Text>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.date_text}>{formatDate(dish.date)}</Text>
          <View style={styles.title_position}>
            <Text style={styles.title}>{dish.title}</Text>
          </View>
        </View>
        <View
          style={[
            styles.content,
            {alignItems: dish.photo ? 'flex-start' : 'flex-start'},
          ]}>
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
