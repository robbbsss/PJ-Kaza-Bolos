import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView , Platform} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import firebase from "../../config/firebaseconfig"
import style from "./style";

export default function Login ({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState ("");

  const styles = style()
  const loginFirebase = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const {user} = userCredential;
      navigation.navigate("Task",{ idUser: user.uid })
    })
    .catch(() => {
      setErrorLogin(true)
    });
  }
  const isDisabled = !email  || !password
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS ==="ios" ? "padding" : "height"}
      style ={styles.container}
      >

     <Text style={styles.title}>Kaza Bolos</Text>

     <TextInput
      style ={styles.input}
      placeholder ="Insira seu e-mail"
      type ="text"
      onChangeText={(text) => setEmail(text)}
      value={email}
      />

     <TextInput
      style ={styles.input}
      secureTextEntry
      placeholder ="Insira sua senha"
      type ="text"
      onChangeText={(text) => setPassword(text)}
      value={password}
      />
      {errorLogin === true
      ?
      <View style={styles.contentAlert}>
          <MaterialCommunityIcons
           name="alert-circle"
           size={24}
           color="#c95514"
          />
          <Text style ={styles.warningAlert}>E-mail ou senha inválidos</Text>
      </View>
      :
      <View/>
      }

      <TouchableOpacity
        disabled={isDisabled}
        style={style(isDisabled).buttonLogin}
        onPress={loginFirebase}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>

       <Text style={styles.registration}>
          ainda não tem login?
       </Text>
           <Text
           style ={styles.linkSubscribe}
           onPress={()=> navigation.navigate("NewUser")}
           >
               Crie uma conta
       </Text>
       <View style={{height:100}}/>

      </KeyboardAvoidingView>
    );

}
