import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export default styles = StyleSheet.create({
  view: {
    height: windowWidth * 0.08,
    width: windowWidth * 1,
    backgroundColor: 'white',
  },
  position: {
    marginTop: windowWidth * 0.02,
    marginLeft: windowWidth * 0.003,
  },
  image: {
    height: windowWidth * 0.045,
    width: windowWidth * 0.045,
    opacity: 0.5,
  },
});
