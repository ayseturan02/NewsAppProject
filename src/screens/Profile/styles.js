import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  background: {
    backgroundColor: '#262825',
    height: windowWidth * 0.3,
    width: windowWidth * 1,
    position: 'absolute',
  },
  white: {
    height: windowWidth * 0.38,
    width: windowWidth * 0.38,
    backgroundColor: 'white',
    borderRadius: windowWidth * 1,
  },

  container: {flex: 1, backgroundColor: 'white'},
  profile_position: {alignItems: 'center', marginTop: windowHeight * 0.05},
  profile_size: {
    height: windowWidth * 0.35,
    width: windowWidth * 0.35,
    borderRadius: (windowWidth * 0.35) / 2,
  },
  user: {
    height: windowWidth * 0.35,
    width: windowWidth * 0.35,
    backgroundColor: '#B63E39',
    borderRadius: (windowWidth * 0.35) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    textAlign: 'center',
    fontSize: windowWidth * 0.1,
    color: 'white',
  },
  name: {
    color: 'black',
    fontSize: windowWidth * 0.07,
    fontFamily: 'Alata',
  },
});
