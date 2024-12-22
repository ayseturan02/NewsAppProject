import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  text: {
    fontSize: windowWidth * 0.07,
    fontFamily: 'SongMyung',
    color: '#262825',
  },
});
