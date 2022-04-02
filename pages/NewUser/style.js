import { Platform, StyleSheet } from "react-native";




const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems : 'center',
     justifyContent: 'center',
     paddingTop: Platform.OS ==="ios"? 0 : 50,
   },
   title: {
      fontSize: 30,
      color:"#602e1c",
      marginBottom: 10,
      fontWeight:"bold"
   },
   input: {
     width:300,
     marginTop: 10,
     padding: 10,
     height: 50,
     borderBottomWidth: 1,
     borderBottomColor:"#c9b4a9",
     marginLeft: "auto",
     marginRight:"auto",
     color: "#c9b4a9",
   },
   buttonRegister:{
      width :200,
      height: 50,
      justifyContent: "center",
      backgroundColor: "#602e1c",
      borderRadius: 50,
      marginTop: 30,
   },
   textButtonRegister: {
   textAlign:"center",
   color:"#FFFFFF",
   },
   contentAlert:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
   },
   warningAlert: {
      paddingLeft:10,
      color:"#bdbdbd",
      fontSize:16,
   },
   login: {
      marginTop:20,
      color:"#4d5156",    
   },
   linkLogin:{
    color:"#1877f2",
    fontSize:16,

   },
   linkTermo:{
      color:"#1877f2",
      fontSize:10,
   }
   



   


   

});

export default styles