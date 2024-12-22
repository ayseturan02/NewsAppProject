import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const categories = [
  {id: 1, name: 'Gündem'},
  {id: 2, name: 'Ekonomi'},
  {id: 3, name: 'Teknoloji'},
  {id: 4, name: 'Sağlık'},
  {id: 5, name: 'Spor'},
  {id: 6, name: 'Siyaset'},
  {id: 7, name: 'Bilim'},
  {id: 8, name: 'Dünya'},
  {id: 9, name: 'Çevre'},
  {id: 10, name: 'Eğitim'},
  {id: 11, name: 'Diğer'},
];

const FlatListCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();

  const handleCategoryPress = (id, name) => {
    setSelectedCategory(id);
    navigation.navigate(RouterNames.CATEGORY, {
      categoryId: id,
      categoryName: name,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          const isSelected = selectedCategory === item.id;
          return (
            <View style={styles.categoryItem}>
              <TouchableOpacity
                onPress={() => handleCategoryPress(item.id, item.name)}>
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && {color: '#B8001F'},
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.line}></View>
    </View>
  );
};

export default FlatListCategory;
