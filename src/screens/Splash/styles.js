import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFFFF',
  },
  view: {
    height: windowWidth * 0.245,
    marginLeft: windowWidth * 0.02,
    marginTop: windowHeight * -0.06,
  },
  text_position: {marginTop: windowHeight * 0.072, left: windowWidth * 0.02},
  text_position1: {marginTop: windowHeight * -0.041, left: windowWidth * 0.026},
  position: {flexDirection: 'row', marginTop: windowHeight * 0.2},
  text_news: {
    fontSize: windowWidth * 0.137,
    fontFamily: 'Bevan',
    color: 'black',
  },
  image: {
    height: windowWidth * 0.45,
    width: windowWidth * 0.4,
    transform: [{rotate: '-20deg'}],
  },
  image_position: {
    marginLeft: windowWidth * -0.015,
  },
  text: {
    fontSize: windowWidth * 0.066,
    fontFamily: 'Bevan',
    color: 'black',
  },
});
