import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  position: {
    margin: windowWidth * 0.02,
  },
  imageContainer: {
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.96,
    borderWidth: windowWidth * 0.001,
    borderColor: '#8F8D8DFF',
    height: windowWidth * 0.62,
  },
  image: {
    borderTopLeftRadius: windowWidth * 0.02,
    borderTopRightRadius: windowWidth * 0.02,
    width: windowWidth * 0.96,
    height: windowWidth * 0.45,
  },
  no: {
    fontSize: windowWidth * 0.06,
  },
  text_container: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.15,
    padding: windowWidth * 0.02,
  },
  text: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alatsi',
    color: '#363535',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight * 0.01,
  },
  dot: {
    width: windowWidth * 0.02,
    height: windowWidth * 0.01,
    borderRadius: windowWidth * 0.02,
    marginHorizontal: windowWidth * 0.01,
  },
  noNewsText: {
    textAlign: 'center',
    marginTop: windowWidth * 0.02,
    fontSize: windowWidth * 0.03,
  },
});
