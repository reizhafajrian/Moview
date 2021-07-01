import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  ICHome,
  ICHomeActive,
  ICSearch,
  ICSearchActive,
  ICUser,
  ICUserActive,
} from "../../assets";
import { Home, Search, User } from "../../pages";
import { useTheme } from "@react-navigation/native";
const Tab = createMaterialBottomTabNavigator();
export default function BottomNav() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      labeled={false}
      shifting={false}
      initialRouteName={`Home`}
      barStyle={{
        backgroundColor: colors.bottomNav,
        position: "absolute",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
      }}
      style={{ position: "relative" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? <ICHomeActive /> : <ICHome />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? <ICSearchActive /> : <ICSearch />,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? <ICUserActive /> : <ICUser />,
        }}
      />
    </Tab.Navigator>
  );
}
