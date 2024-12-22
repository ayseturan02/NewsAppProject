import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  image: {
    height: windowWidth * 0.55,
    width: windowWidth * 0.5,
    transform: [{rotate: '-35deg'}],
  },
  text: {
    color: '#282D28',
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.1,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowWidth * 0.04,
  },
  remember: {
    height: windowWidth * 0.05,
    width: windowWidth * 0.05,
    borderRadius: windowWidth * 0.005,
    borderWidth: windowWidth * 0.004,
    borderColor: '#898989',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tic: {
    height: windowWidth * 0.02,
    width: windowWidth * 0.02,
    backgroundColor: 'white',
  },
  rememberI: {
    marginLeft: windowWidth * 0.02,
    fontSize: windowWidth * 0.04,
    color: '#282D28',
  },
  haveAccount: {
    fontSize: windowWidth * 0.04,
    color: '#282D28',
    fontFamily: 'Alata',
  },
  account_text: {alignItems: 'center', marginTop: windowWidth * 0.02},
});
