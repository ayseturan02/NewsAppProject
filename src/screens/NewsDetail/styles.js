import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  image: {
    height: windowWidth * 0.75,
    width: windowWidth,
    position: 'absolute',
  },
  position: {marginTop: windowHeight * 0.35, flexDirection: 'row'},
  photo: {
    height: windowWidth * 0.13,
    borderRadius: windowWidth * 1,
    width: windowWidth * 0.13,
  },
  user_name_position: {
    justifyContent: 'center',
    marginLeft: windowWidth * 0.02,
  },
  user_name: {fontSize: windowWidth * 0.06, fontFamily: 'Alata'},
  date: {width: windowWidth * 0.95, marginLeft: windowWidth * 0.02},
  date_text: {
    color: '#E5E5E5',
    fontFamily: 'SongMyung',
    fontSize: windowWidth * 0.09,
  },
  title: {
    color: 'black',
    fontFamily: 'SongMyung',
    fontSize: windowWidth * 0.08,
  },
  title_position: {marginTop: windowHeight * -0.02},
  content: {
    width: windowWidth * 0.95,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: windowHeight * 0.015,
  },
  content_text: {
    fontFamily: 'Alike',
    color: '#484343',
    textAlign: 'justify',
    lineHeight: windowHeight * 0.045 * 1.1,
  },
});