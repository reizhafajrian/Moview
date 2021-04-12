import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ICHome } from "../../assets";
import { FormText, TitlePage } from "../../components";


export default function Masuk() {
  const { colors } = useTheme();
  return (
            
    <KeyboardAvoidingView behavior={null} style={{flex:1} } >
      
      <ScrollView>



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
            <ICHome/>
      <FormText title={"Email"} placeholder={"reizha77@gmail.com"}/>
      <FormText title={"Password"} placeholder={"reizha77@gmail.com"}/>
      <FormText title={"Password"} placeholder={"reizha77@gmail.com"}/>
      <FormText title={"Password"} placeholder={"reizha77@gmail.com"}/>
      <FormText title={"Password"} placeholder={"reizha77@gmail.com"}/>



   

      
    </View>
    </ScrollView>
    </KeyboardAvoidingView>

  
  );
}
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