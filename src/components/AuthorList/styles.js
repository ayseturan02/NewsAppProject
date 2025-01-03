import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: windowWidth * 0.02,
  },
  item: {
    height: windowWidth * 0.25,
    width: windowWidth * 0.95,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: windowWidth * 0.02,
    backgroundColor: '#fff',
    borderRadius: windowWidth * 0.02,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    borderTopLeftRadius: windowWidth * 0.02,
    borderBottomLeftRadius: windowWidth * 0.02,
    width: windowWidth * 0.3,
    height: windowWidth * 0.25,
  },
  name: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'Alata',
    padding: windowWidth * 0.02,
  },
  date: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'Alata',
    padding: windowWidth * 0.02,
    color: '#666',
  },
  position: {width: windowWidth * 0.55, justifyContent: 'space-around'},
});
