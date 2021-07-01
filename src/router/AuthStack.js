import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNav } from "../components";
import { Daftar, Detail, Masuk } from "../pages";

export default function AuthStack({ reduceState }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Masuk"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <Masuk {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Daftar"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <Daftar {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
