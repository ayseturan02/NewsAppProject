import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  view: {
    height: windowWidth * 0.12,
    width: windowWidth,
  },
  row: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.01,
  },
  text_rotate: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: windowWidth * 0.05,
    fontFamily: 'Alatsi',
  },
  position: {
    position: 'absolute',
  },
  red: {
    height: windowWidth * 0.12,
    width: windowWidth * 0.45,
    backgroundColor: '#B63E39',
  },
  icon_text: {flexDirection: 'row', alignItems: 'center'},
  icon_position: {padding: windowWidth * 0.025},
  icon: {
    height: windowWidth * 0.05,
    width: windowWidth * 0.05,
  },
  dk: {
    width: windowWidth * 0.45,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: windowHeight * 0.01,
  },
  dk_text: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontFamily: 'Lalezar',
  },
});
