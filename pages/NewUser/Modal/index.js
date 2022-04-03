import React  from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import styles from './styles'

const style = styles()
const termsModal = ({modalVisible, setModalVisible}) => (
  <>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Hello World!</Text>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.textStyle}>Ok, estou ciente</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles(modalVisible).blur} visible={modalVisible}/>
      </>
  );



export default termsModal;
