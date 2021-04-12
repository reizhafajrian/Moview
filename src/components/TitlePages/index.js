import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TitlePage({title,secondText}) {
  const { colors } = useTheme();
  return (
    <View style={{width:300,maxWidth:"100%"}}>
      <Text style={{ color: colors.white, fontWeight: "600", fontSize: 33 }}>
      {title}
      </Text>
      <Text style={{ color: colors.white, fontWeight: "400", fontSize: 24,marginTop:24}}>
        {secondText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
