
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Task from"./pages/Tasks";
import NewTask from"./pages/NewTask";
import Details from "./pages/Details"
import Login from "./pages/Login"
import NewUser from "./pages/NewUser"



import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); //

const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewUser"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            headerTintColor: "#c9b4a9",
          }}
        />
        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#c9b4a9",
          }}
          />
          <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#c9b4a9",
          }}
          />



        
          





        
      </Stack.Navigator>
    </NavigationContainer>
  );
}