import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  position: {
    marginTop: windowWidth * 0.02,
  },
  one: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    backgroundColor: 'black',
  },
  container: {
    height: windowWidth * 0.3,
    width: windowWidth * 1.5,
    flexDirection: 'row',
  },
  text_view: {
    width: windowWidth * 0.9,
    margin: windowWidth * 0.025,
  },
  title: {
    fontFamily: 'SongMyung',
    fontSize: windowWidth * 0.06,
  },
  content_position: {marginTop: windowWidth * 0.02},
  content: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alatsi',
  },
  image: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.53,
    borderRadius: windowWidth * 0.01,
  },
});
