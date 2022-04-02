import React, { useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import firebase from "../../config/firebaseconfig"
import style from "./style"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import styles from "./style";
import { Platform } from "react-native";
import { LogBox } from 'react-native';




import { NavigationContainer } from "@react-navigation/native";
export default function Login ({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState ("");

  const loginFirebase = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user =userCredential.user;
      console.log(user)
      navigation.navigate("Task",{ idUser: user.uid })
      
    })
    .catch((error) => {
      setErrorLogin(true)
      let errorCode = error.code;
      let errorMessage = error.message;
      
    });
  }
  




  useEffect(()=>{


  }, []);



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
      secureTextEntry={true}
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
       {email === "" || password  === ""
       ?
         <TouchableOpacity
         disable={true}
         style={styles.buttonLogin}
         >
            <Text style={styles.textButtonLogin}>Login</Text>
         </TouchableOpacity>
       :
        <TouchableOpacity   
         style={styles.buttonLogin}
         onPress={loginFirebase}
         >
            <Text style={styles.textButtonLogin}>Login</Text>
         </TouchableOpacity>
       }
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