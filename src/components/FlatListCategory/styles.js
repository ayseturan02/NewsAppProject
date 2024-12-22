import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    paddingVertical: windowWidth * 0.05,
  },
  categoryItem: {
    marginHorizontal: windowWidth * 0.03,
  },
  categoryText: {
    fontSize: windowWidth * 0.07,
    color: 'black',
    fontFamily: 'Ranga_Regular',
  },
  line: {
    backgroundColor: '#DEDEDE',
    height: windowWidth * 0.003,
    width: windowWidth * 1,
  },
});
