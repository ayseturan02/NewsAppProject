import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  image_position: {
    marginLeft: windowWidth * 0.45,
    marginTop: windowHeight * -0.06,
  },
  image: {
    height: windowWidth * 0.65,
    width: windowWidth * 0.65,
    marginLeft: windowWidth * 0.3,
    marginTop: windowHeight * -0.05,
  },
  image: {
    height: windowWidth * 0.85,
    width: windowWidth * 0.85,
     borderRadius: windowWidth * 1,
  },
  user_name_position: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',

    backgroundColor: 'red',
    right: windowWidth * 0.04,
    width: windowWidth * 0.95,
  },
  text: {
    fontSize: windowWidth * 0.055,
    fontFamily: 'Alatsi',
    color: '#000000FF',
  },
});
