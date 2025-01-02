import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export default styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  authorPhoto: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: (windowWidth * 0.3) / 2,
  },
  authorName: {
    fontSize: windowWidth * 0.1,
    fontFamily: 'Alata',
    textAlign: 'center',
  },
  container: {
    height: windowWidth * 0.3,
    width: windowWidth * 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  scroll_view: {
    width: windowWidth * 1.5,
    height: windowWidth * 0.3,
    backgroundColor: 'white',
    borderWidth: windowWidth * 0.001,
    borderColor: '#D4D6D7FF',
  },
  text_view: {
    width: windowWidth * 0.9,
    margin: windowWidth * 0.025,
  },
  title: {
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.056,
    color: 'black',
  },
  content_position: {marginTop: windowWidth * 0.01},
  content: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alata',
    color: '#363535',
  },
  image: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.53,
  },
});
