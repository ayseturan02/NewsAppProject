import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    height: windowWidth * 0.015,
    width: windowWidth * 0.12,
    backgroundColor: '#404040',
    alignSelf: 'center',
    borderRadius: (windowWidth * 0.15) / 2,
    marginTop: windowHeight * 0.01,
  },
  view: {
    flexDirection: 'row',
    margin: windowWidth * 0.02,
    marginTop: windowHeight * 0.02,
  },
  icon: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
  },
  position: {flexDirection: 'row', margin: windowWidth * 0.02},
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    height: windowWidth * 0.34,
    width: windowWidth * 1,
  },
  modalOption: {
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.04,
    left: windowWidth * 0.02,
    color: '#5E5E5E',
  },
});
