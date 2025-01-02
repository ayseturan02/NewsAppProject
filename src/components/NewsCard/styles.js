import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  position: {
    marginTop: windowHeight * 0.03,
  },
  one: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    backgroundColor: 'black',
  },
  scroll_view: {
    width: windowWidth * 1.5,
    height: windowWidth * 0.3,
    backgroundColor: 'white',
    borderWidth: windowWidth * 0.001,
    borderColor: '#D4D6D7FF',
  },
  container: {
    height: windowWidth * 0.3,
    width: windowWidth * 1,
    flexDirection: 'row',
    marginTop: windowHeight * 0.02,
  },
  text_view: {
    width: windowWidth * 0.9,
    margin: windowWidth * 0.025,
  },
  title: {
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.056,
    color: 'black',
  },
  content_position: {marginTop: windowWidth * 0.01},
  content: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alata',
    color: '#363535',
  },
  image: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.53,
  },
});
