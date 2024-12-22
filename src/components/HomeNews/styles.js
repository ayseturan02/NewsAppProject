import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  view_card: {
    backgroundColor: 'white',
    height: windowWidth * 0.54,
    width: windowWidth * 1,
    backgroundColor: 'white',
    borderWidth: windowWidth * 0.001,
  },
  photo_size: {
    height: windowWidth * 0.4,
    width: windowWidth * 1,
  },
});
