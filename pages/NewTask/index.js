import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/firebaseconfig.js'
import styles from "./style";


export default function NewTask({ navigation }, props) {
 
    const [description, setDescription] = useState(null);
    const database = firebase.firestore()
    function addTask(){
      database.collection('Tasks').add({
        description: description,
        status: false
      })
      navigation.navigate("Task");
    }

return(
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: Seu bolo favorito da Kaza Bolos"
      onChangeText={setDescription}
      value={description}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}