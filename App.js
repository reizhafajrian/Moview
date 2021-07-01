import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router/MainStack";
import { Theme } from "./src/theme";
import { navigationRef } from "./RootNavigation";
import Provider from "./Provider";
import { TouchableOpacity, Text } from "react-native";
import CodePush from "react-native-code-push";


export const AuthContext = createContext();

 function App() {
  const [state, setstate] = React.useState(0);
  return (
    <Provider/>
    // <>
    // <TouchableOpacity onPress={setstate(state+1)}><Text>plus</Text></TouchableOpacity>
    // </>
  
  );
}
export default CodePush(App)