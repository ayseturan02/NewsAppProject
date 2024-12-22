import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: windowHeight * 0.03,
    right: windowWidth * 0.05,
    zIndex: 1,
  },
  image: {
    height: windowWidth * 0.1,
    width: windowWidth * 0.1,
    position: 'static',
  },
});
