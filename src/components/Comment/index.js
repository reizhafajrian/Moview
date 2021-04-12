import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { IMGCarousel } from "../../assets";

const width = Dimensions.get("window").width;
export default function Comment({item}) {
  const { colors } = useTheme();

  return (
    <View style={styles.container(width)}>
      <View style={{flexDirection:"row"}}>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={item.item.image} />
        </View>
        <View style={{marginStart:10,justifyContent:"space-around",paddingVertical:8}}>
        <Text style={styles.textName(colors.textPrimary)}>{item.item.name}</Text>
        <Text style={styles.textJob(colors.textSecondary)}>{item.item.job}</Text>
        </View>
     
     
      </View>
      <Text style={styles.textComment(colors.textPrimary)}>
          {item.item.review}
       </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (width) => ({
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#1C2533",
    width:"100%",
    maxHeight:"100%",
    paddingHorizontal:21,
    paddingVertical:16,
    marginVertical:16
  }),
  textName: (color) => ({
    color: color,
    fontSize:16
  }),
  textJob: (color) => ({
    color: color,
    fontSize:12
  }),
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "cover",
  },
  containerImage:{
    width: 60,
    height: 60,
    borderRadius: 40,
    overflow: "hidden",
  },
  textComment:(color)=>({
    color:color,
    marginVertical:10,
    fontSize:16
  })
});
