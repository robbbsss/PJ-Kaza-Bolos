import React, { useState } from 'react';
import {
  KeyboardAvoidingView, View,
  Text,
  TextInput,
  TouchableOpacity,

  Platform,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';
import firebase from '../../config/firebaseconfig';
import 'firebase/compat/auth';
import Modal from './Modal';

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorRegister, setErrorRegister] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential)
        // const { user } = userCredential;
        setErrorRegister(false)
      })
      .catch((error) => {
        console.log(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setErrorRegister(true)
      });
  };

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

      <Text
        style={styles.linkTermo}
        onPress={() => setModalVisible(true)}
      >
        Leia nosso termo de uso e privacidade antes do cadastro
      </Text>

      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      {email === '' || password === ''
        ? (
          <TouchableOpacity
            disable
            style={styles.buttonRegister}
          >
            <Text style={styles.textButtonRegister}>Registre-se</Text>
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={register}
          >
            <Text style={styles.textButtonRegister}>Register</Text>
          </TouchableOpacity>
        )}

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
