import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  position: {
    marginTop: windowHeight * 0.03,
  },
  view: {
    height: windowWidth * 0.15,
    width: windowWidth * 0.3,
    backgroundColor: '#F8F8F8',
    borderRadius: windowWidth * 0.01,

    borderWidth: windowWidth * 0.001,
    borderColor: '#D4D6D7FF',
  },
  text2: {
    fontSize: windowWidth * 0.033,
    fontFamily: 'Alata',
    color: '#363535',
  },
  

  text_position: {
    marginLeft: windowWidth * 0.03,
    marginTop: windowHeight * 0.005,
  },
});
