import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  input: {
    height: windowWidth * 0.11,
    width: windowWidth * 0.94,
    borderRadius: windowWidth * 0.01,
    backgroundColor: 'white',
    borderWidth: windowWidth * 0.004,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input_text: {
    color: '#898989',
    fontSize: windowWidth * 0.035,
    fontFamily: 'Alata',
  },
  focusedInput: {
    borderColor: '#B63E39',
    borderWidth: windowWidth * 0.005,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: windowWidth * 0.03, // Sağ tarafa yerleştirme
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    width: 20, // İkonun boyutu
    height: 20,
    resizeMode: 'contain',
  },
});
