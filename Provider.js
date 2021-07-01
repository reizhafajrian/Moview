import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/router/MainStack";
import { Theme } from "./src/theme";
import { navigationRef } from "./RootNavigation";
import AuthStack from "./src/router/AuthStack";
import { SignIn } from "./src/utils/Firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./src/components/Loading/loading";
import { Text, View } from "react-native";

export const AuthContext = createContext();

export default function Provider() {
  const [login, setlogin] = React.useState(false);

  const reducer = (prevState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...prevState,
          isLoading: action.isLoading,
          login: action.login,
        };
      case "SIGN_OUT":
        return {
          ...prevState,
          isLoading: action.isLoading,
          login: action.login,
        };
      case "CHECK_LOGIN":
        return {
          ...prevState,
          isLoading: action.isLoading,
          login: action.login,
        };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    login: false,
  });

  React.useEffect(() => {
    const getValue = async () => {
      let value;
      value = await AsyncStorage.getItem("login");
      setlogin(value);

      
      // setTimeout(() => {
      //   dispatch({
      //     type: "CHECK_LOGIN",
      //     login: value === "true" ? true : false,
      //     isLoading: true,
      //   });
      // }, 1000);
      dispatch({
        type: "CHECK_LOGIN",
        login: value === "true" ? true : false,
        isLoading: false,
      });
    
    };

    getValue();
  
  
  },[]);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        dispatch({ type: "SIGN_IN", isLoading: true });
        const res = await SignIn(email, password);
        if (res) {
          try {
            dispatch({ type: "SIGN_IN", login: true, isLoading: false });
            setlogin(true);

            await AsyncStorage.setItem("login", "true");
            await AsyncStorage.setItem("email", email );
          } catch (e) {
            dispatch({ type: "SIGN_IN", login: false, isLoading: false });
            console.log(e);
          }
        } else {
          dispatch({ type: "SIGN_IN", login: false, isLoading: false });
        }
      },
      signOut: async () => {
        dispatch({ type: "SIGN_OUT", login: false, isLoading: false });
        await AsyncStorage.removeItem("login");
        setlogin(false);
      },
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef} theme={Theme}>
        {/* {state.isLoading?(<AuthStack/>):(<MainStack/>)} */}
        {state.isLoading ? (
          <Loading />
        ) : state.login === false ? (
          <AuthStack reduceState={state} />
        ) : (
          <MainStack />
        )}
    
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
