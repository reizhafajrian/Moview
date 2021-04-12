import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function FormText({title,placeholder}) {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.white }}>{title}</Text>
      <View style={{height:12}}/>
      <View
        style={{
          borderColor: colors.borderColorForm,
          backgroundColor: colors.bottomNav,
          borderRadius:12,
          overflow:"hidden",
          borderWidth:1
        }}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textGrey}
          secureTextEntry={true}
          style={{
            color: colors.white,
            borderColor: "black",
            paddingHorizontal:20
  
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
