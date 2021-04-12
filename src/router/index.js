import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNav } from "../components";
import { Daftar, Detail, Masuk } from "../pages";

export default function Router() {
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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Masuk"
        component={Masuk}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
