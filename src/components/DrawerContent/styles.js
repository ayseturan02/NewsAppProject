import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  text: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Alatsi',
    color: '#B53D38',
    padding: windowWidth * 0.02,
  },
  icon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    tintColor: '#B53D38',
    marginRight: windowWidth * 0.04,
  },
  container: {
    marginTop: windowHeight * 0.03,
    flexDirection: 'row',
    left: windowWidth * 0.02,
    alignItems: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: windowHeight * 0.02,
  },
  position: {marginTop: windowHeight * -0.02},
  logo: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.26,
    transform: [{rotate: '-35deg'}],
  },
});
