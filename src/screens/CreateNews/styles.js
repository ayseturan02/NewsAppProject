import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowHeight * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  cancelButton: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'Alatsi',
    color: '#B53D38',
  },
  publishButton: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'Alatsi',
    color: '#007AFF',
  },
  contentContainer: {
    padding: windowHeight * 0.02,
  },
  titleInput: {
    fontSize: windowWidth * 0.035,
    marginBottom: windowHeight * 0.01,
    borderBottomWidth: windowHeight * 0.001,
    borderBottomColor: '#E0E0E0',
    padding: windowHeight * 0.01,
  },
  contentInput: {
    fontSize: windowWidth * 0.035,
    textAlignVertical: 'top',
    minHeight: windowHeight * 0.2,
    borderBottomWidth: windowWidth * 0.001,
    borderBottomColor: '#E0E0E0',
    marginBottom: windowHeight * 0.01,
    padding: windowWidth * 0.02,
  },
  imagePicker: {
    backgroundColor: '#F8F8F8',
    borderWidth: windowWidth * 0.002,
    borderColor: '#E0E0E0',
    borderRadius: windowWidth * 0.02,
    padding: windowWidth * 0.04,
    alignItems: 'center',
    marginBottom: windowHeight * 0.01,
  },
  imagePickerText: {
    color: ' #B53D38',
    fontSize: windowWidth * 0.035,
  },
  imagePreview: {
    width: '100%',
    height: windowWidth * 0.4,
    marginBottom: windowHeight * 0.01,
    borderRadius: windowWidth * 0.02,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: windowWidth * 0.02,
  },
  categoryButton: {
    borderWidth: windowWidth * 0.003,
    borderColor: '#E0E0E0',
    borderRadius: windowWidth * 0.02,
    padding: windowWidth * 0.02,
    margin: windowWidth * 0.01,
  },
  selectedCategory: {
    borderWidth: 1,
    borderColor: '#B53D38',
    borderRadius: 8,
    padding: windowWidth * 0.02,
    margin: windowWidth * 0.01,
    backgroundColor: '#B53D38',
  },
  categoryText: {
    color: '#333333',
  },
  selectedCategoryText: {
    color: 'white',
  },
});
