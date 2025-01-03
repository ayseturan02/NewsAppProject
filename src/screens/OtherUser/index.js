import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Back} from '../../components';
import {RouterNames} from '../../config';
import styles from './styles';
const getUserAvatarColor = username => {
  const colors = ['FF5733', 'FF6F61', 'FF8D1A', 'FFB03B', 'FFEB3B'];
  const hash = username
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

const OtherUser = ({route, navigation}) => {
  const {authorName, news, authorPhoto} = route.params;
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (authorPhoto) {
      setProfileImage({uri: authorPhoto});
    } else {
      const avatarColor = getUserAvatarColor(authorName || 'Kullanıcı');
      const generatedPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        authorName || 'Kullanıcı',
      )}&size=256&background=${avatarColor}&color=ffffff`;

      setProfileImage({uri: generatedPhoto});
    }
  }, [authorName, authorPhoto]);

  const renderNews = ({item}) => (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll_view}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate(RouterNames.NEWS_DETAIL, {
              dish: {
                title: item.title,
                content: item.content,
                photo: item.photo,
                AuthorName: authorName,
                AuthorPhoto: authorPhoto,
                date: item.date,
              },
            })
          }>
          <View style={styles.text_view}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.content_position}>
              <Text style={styles.content} numberOfLines={3}>
                {item.content}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {item.photo && (
          <Image source={{uri: item.photo}} style={styles.image} />
        )}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <Back />
      <View style={styles.view}>
        <View style={styles.w}></View>
      </View>
      <View style={styles.headerContainer}>
        {profileImage ? (
          <Image source={profileImage} style={styles.authorPhoto} />
        ) : (
          <Text>Profil resmi yükleniyor...</Text>
        )}
        <Text style={styles.authorName}>{authorName}</Text>
      </View>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

export default OtherUser;
