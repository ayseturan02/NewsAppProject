import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  text: {
    fontSize: windowWidth * 0.07,
    fontFamily: 'SixCaps',
    color: '#262825',
  },
  weather: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: windowWidth * 0.55,
  },
  title: {
    fontSize: windowWidth * 0.055,
    fontFamily: 'Bevan',
    color: 'black',
  },
});
