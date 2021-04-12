import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ICSearchWhite } from "../../assets";

export default function Search() {
  const {colors} =useTheme();

  return (
    <ScrollView style={styles.pages(colors.pages)}>
    <View>
      <View style={{flexDirection:"row",alignItems:"center",borderRadius:15,backgroundColor:"#242425",overflow:"hidden",width:"100%",marginTop:28,paddingHorizontal:17}}>
              <ICSearchWhite/>
     <TextInput
        placeholder={"Search"}
        placeholderTextColor={"white"}
        
        style={{backgroundColor:"#242425",width:"100%",color:"white",borderRadius:12,paddingHorizontal:30}}
        />
      </View> 
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  pages:(color)=>({
    backgroundColor: color,
    flex:1
  })
});


