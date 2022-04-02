import React, {useState} from "react";
import {
    KeyboardAvoidingView, View, 
    Text,
    TextInput,
    TouchableOpacity,
  
    
    
 } from "react-native";

import styles from "./style"
import firebase from "../../config/firebaseconfig"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Platform } from "react-native";
import 'firebase/compat/auth'





export default function NewUser ({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState ("");
  const [isSelected, setSelected] = useState(false);
  
  const register =()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      let user = userCredential.user;
      
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
     
    });
  }

   








    return (
     <KeyboardAvoidingView
      behavior={Platform.OS ==="ios" ? "padding" : "height"}
      style ={styles.container}>
        
    <Text style={styles.title}>Crie uma nova conta</Text>
     
     <TextInput
      style ={styles.input}
      placeholder ="insira seu e-mail"
      type ="text"
      onChangeText={(text) => setEmail(text)}
      value={email}
      />
    
     <TextInput
      style ={styles.input}
      secureTextEntry={true}
      placeholder ="insira uma senha"
      type ="text"
      onChangeText={(text) => setPassword(text)}
      value={password}
      />


      {errorRegister === true
      ?
      <View style={styles.contentAlert}>
          <MaterialCommunityIcons
           name="alert-circle"
           size={24}
           color="#bdbdbd"
          />
          <Text style ={styles.warningAlert}>E-mail ou senha inválidos</Text>
      </View>
      :
      <View/>

      }
       


      
           <Text 
           style ={styles.linkTermo}
           onPress={()=> navigation.navigate("Login")} 
           >
        
               Leia nosso termo de uso e privacidade antes do cadastro
       </Text>
       

     

        
           

           
           

      



       {email === "" || password  === ""
       ?
         <TouchableOpacity
         disable={true}
         style={styles.buttonRegister}
         >
            <Text style={styles.textButtonRegister}>Registre-se</Text>
         </TouchableOpacity>
       :
        <TouchableOpacity   
         style={styles.buttonRegister}
         onPress={register}
         >
            <Text style={styles.textButtonRegister}>Register</Text>
         </TouchableOpacity>
       }

       <Text style={styles.login}>
          Já tem conta?
         </Text>
           <Text 
           style ={styles.linkLogin}
           onPress={()=> navigation.navigate("Login")} 
           >
               Acesse o Login
       </Text>
       <View style={{height:100}}/>


      </KeyboardAvoidingView >
    );

}