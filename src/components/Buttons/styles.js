import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  view: {
    height: windowWidth * 0.11,
    width: windowWidth * 0.94,
    backgroundColor: '#B7403E',
    borderRadius: windowWidth * 0.02,
    marginTop: windowHeight * 0.03,
    alignSelf: 'center',
  },
  position: {alignItems: 'center', marginTop: windowHeight * 0.01},
  name_button: {
    color: 'white',
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.04,
  },
});
