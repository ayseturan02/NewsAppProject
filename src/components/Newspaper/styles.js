import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  card: {
    marginTop: windowHeight * 0.02,
    height: windowWidth * 0.62,
    width: windowWidth * 0.37,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.01,
    margin: windowWidth * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalImage: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    modalDescription: {
      fontSize: 14,
      textAlign: 'center',
      marginVertical: 10,
    },
    closeButton: {
      marginTop: 20,
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    closeText: {
      color: 'white',
      fontSize: 16,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: windowWidth * 0.48,
    width: windowWidth * 0.34,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: windowWidth * 0.03,
    color: 'black',
    fontFamily: 'Alata',
  },
  position: {
    padding: windowHeight * 0.01,
  },
});
