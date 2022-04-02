import { Platform, StyleSheet } from "react-native";




const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#E9DBD3",
     alignItems : 'center',
     justifyContent: 'center',
     paddingTop: Platform.OS ==="ios"? 0 : 50,
   },
   title: {
      fontSize: 48,
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
     borderBottomColor:"#602e1c",
     marginLeft: "auto",
     marginRight:"auto",
     color: "#602e1c",
   },
   buttonLogin:{
      width :200,
      height: 50,
      justifyContent: "center",
      backgroundColor: "#602e1c",
      borderRadius: 50,
      marginTop: 30,
   },
   textButtonLogin: {
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
      color:"#c95514",
      fontSize:16,
   },
   registration: {
      marginTop:20,
      color:"#4d5156",    
   },
   linkSubscribe:{
    color:"#1877f2",
    fontSize:16,

   }

});

export default styles