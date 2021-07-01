import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import { AuthContext } from "../../../Provider";
import { FormText, TitlePage } from "../../components";
import TextInfoClick from "../../components/TextInfoClick/TextInfoClick";



export default function Masuk() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const { signIn } = React.useContext(AuthContext);

  const moveToSignUp = () => {
    navigation.replace("Daftar");
  };

  const toSignIn = async () => {

    const data=await signIn(email,password)
  };
  return (
    <SafeContainer>
      <View
        style={{
          backgroundColor: colors.pages,
          flex: 1,

          paddingHorizontal: 16,

          paddingTop: 85,
        }}
      >
        <TitlePage
          title={`Selamat Datang Di Moview`}
          secondText={`Masuk dan mulai review film favorite anda`}
        />
        <View style={{ height: 42 }} />
        <FormText
          title={"Email"}
          placeholder={"reizha77@gmail.com"}
          secure={false}
          ChangeInput={setemail}
        />
        <FormText title={"Password"} placeholder={"Password"} secure={true}  ChangeInput={setpassword} />
        <View style={{ height: 60 }} />

        <TextInfoClick
          btnText={"Masuk"}
          text={"Tidak memiliki akun?"}
          clickText={"Daftar"}
          onPressClickText={moveToSignUp}
          onPressBtn={toSignIn}
        />
      </View>
    </SafeContainer>
  );
}
const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

// const styles=StyleSheet.create({
//     pages:()=>({})
// })
// import React from 'react';
// import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

// const Masuk = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: "space-around"
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48
//   },
//   textInput: {
//     height: 40,
//     borderColor: "#000000",
//     borderBottomWidth: 1,
//     marginBottom: 36
//   },
//   btnContainer: {
//     backgroundColor: "white",
//     marginTop: 12
//   }
// });

// export default Masuk;
