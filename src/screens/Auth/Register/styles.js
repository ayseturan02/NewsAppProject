import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: windowWidth * 0.55,
    width: windowWidth * 0.5,
    transform: [{rotate: '-35deg'}],
  },
  title_text: {
    color: '#282D28',
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: windowHeight * 0.02,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: windowHeight * 0.07,
  },
  headerText: {
    fontSize: windowWidth * 0.26,
    color: '#0A1C4E',
    fontFamily: 'SixCaps',
  },
  inputContainer: {
    width: '94%',
    marginBottom: windowHeight * 0.02,
  },
  loginText: {
    marginTop: windowHeight * 0.01,
    color: '#282D28',
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.04,
  },
});
