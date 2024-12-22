import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: windowWidth * 0.15,
    width: windowWidth * 0.95,
    borderRadius: windowWidth * 0.08,
    borderLeftColor: 'black',
    borderLeftWidth: windowWidth * 0.015,
    paddingLeft: windowWidth * 0.11,
  },
  position: {
    position: 'absolute',
    left: windowWidth * 0.05,
    top: windowWidth * 0.04,
  },
  icon: {
    height: windowWidth * 0.06,
    width: windowWidth * 0.06,
  },
});
