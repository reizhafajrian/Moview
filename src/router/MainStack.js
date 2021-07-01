import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNav } from "../components";
import { Daftar, Detail, Masuk, Search } from "../pages";
import { Text } from "react-native";

export default function MainStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={BottomNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown:false,
          
       

       
          
        }}
      />
      
    </Stack.Navigator>
  );
}
