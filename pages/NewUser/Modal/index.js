import React  from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import styles from './styles'

const termsModal = ({modalVisible, setModalVisible}) => (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ok, estou ciente</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );



export default termsModal;