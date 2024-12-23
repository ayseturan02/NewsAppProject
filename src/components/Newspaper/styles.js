import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  card: {
    height: windowWidth * 0.72,
    width: windowWidth * 0.48,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.01,
    margin: windowWidth * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: windowWidth * 0.6,
    width: windowWidth * 0.44,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: windowWidth * 0.03,
    color: 'black',
    fontFamily: 'Alata',
  },
  position: {
    padding: windowHeight * 0.01,
  },
});
