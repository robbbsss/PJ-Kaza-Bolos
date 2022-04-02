import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList} 
  from "react-native";
import firebase from "../../config/firebaseconfig.js";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";




export default function Task({ navigation }) {
  const [task, setTask] = useState([]);
    const database = firebase.firestore()
  function deleteTask(id) {
    database.collection("Tasks").doc(id).delete();
  }
 
  useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);
    return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={( { item } )=>{
           return(
          <View style={styles.Tasks}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => {
                deleteTask(item.id)
              }}
            >
            <FontAwesome
              name="star"
              size={23}
              color="#c95514"
            >
            </FontAwesome>
            </TouchableOpacity>
            <Text
              style={styles.DescriptionTask}
              onPress={()=>
                navigation.navigate("Details",{
                  id: item.id,
                  description: item.description,
                })
              }
            >
            {item.description}  
            </Text>  

          </View>
          )
        }}
      />
      <TouchableOpacity style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}