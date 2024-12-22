import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    height: windowWidth * 0.1,
    width: windowWidth * 1,
    backgroundColor: '#F8F8F8',
    borderRadius: windowWidth * 0.01,
    borderWidth: windowWidth * 0.001,
    borderColor: '#D4D6D7FF',
  },
  image_position: {marginTop: windowHeight * 0.01},
  view: {
    marginRight: windowWidth * 0.02,
    marginTop: windowHeight * 0.005,
  },
  image: {
    height: windowWidth * 0.04,
    width: windowWidth * 0.05,
  },

  name: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alata',
    color: '#363535',
  },
  rate: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alata',
    color: '#363535',
  },
  buying: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alata',
    color: '#363535',
  },
});
