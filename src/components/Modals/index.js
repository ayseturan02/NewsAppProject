import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {add_image, no_photo} from './../../assets/icons/index';
import styles from './styles';
const Modals = ({isVisible, onClose, onImagePick, onRemoveImage}) => {
  if (!isVisible) return null;

  return (
    <Modal transparent={true} animationType="none" visible={isVisible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.container}></View>
              <TouchableOpacity onPress={onImagePick}>
                <View style={styles.view}>
                  <Image source={add_image} style={styles.icon} />
                  <Text style={styles.modalOption}>Profil Ekle/Değiştir</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onRemoveImage}>
                <View style={styles.position}>
                  <Image source={no_photo} style={styles.icon} />
                  <Text style={styles.modalOption}>Profil Kaldır</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Modals;
