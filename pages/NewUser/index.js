import React, { useState } from 'react';
import {
  KeyboardAvoidingView, View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Platform,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from './style';
import firebase from '../../config/firebaseconfig';
import 'firebase/compat/auth';
import Modal from './Modal';

const styles = style()

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorRegister, setErrorRegister] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        setErrorRegister(false)
        navigation.navigate('Login')
      })
      .catch(() => {
        setErrorRegister(true)
      });
  };

  const isDisabled = !email || !password || !isSelected

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <Text style={styles.title}>Crie uma nova conta</Text>

      <TextInput
        style={styles.input}
        placeholder="insira seu e-mail"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="insira uma senha"
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {errorRegister === true
        ? (
          <View style={styles.contentAlert}>
            <MaterialCommunityIcons
              name="alert-circle"
              size={24}
              color="#bdbdbd"
            />
            <Text style={styles.warningAlert}>E-mail ou senha inválidos</Text>
          </View>
        )
        : <View />}

      <View style={styles.termsWrapper}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />

        <View>
          <Text style={styles.termText}>Declaro que li e concordo com todos os</Text>
          <Text
            style={styles.linkTermo}
            onPress={() => setModalVisible(true)}
          >
            termos de uso e privacidade.
          </Text>
        </View>
      </View>

      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <TouchableOpacity
        disabled={isDisabled}
        style={style(isDisabled).buttonRegister}
        onPress={register}
      >
        <Text style={styles.textButtonRegister}>Registre-se</Text>
      </TouchableOpacity>

      <Text style={styles.login}>
        Já tem conta?
      </Text>
      <Text
        style={styles.linkLogin}
        onPress={() => navigation.navigate('Login')}
      >
        Acesse o Login
      </Text>
      <View style={{ height: 100 }} />

    </KeyboardAvoidingView>
  );
}
