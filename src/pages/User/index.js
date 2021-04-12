import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DetailUserItem } from "../../components";

export default function User() {
  const { colors } = useTheme();
  return (
    <ScrollView style={styles.pages(colors.pages)}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop:229,
          maxHeight:"100%"
        }}
      >
        <View
          style={{
            position: "absolute",
            top:81,
            right: 0,
            left: 0,
            alignItems:"center",
            zIndex:1
          }}
        >
          <Image
            style={{
              width: 159,
              height: 159,
              maxHeight: "100%",
              maxWidth: "100%",
              resizeMode: "cover",
              borderRadius: 159 / 2,
            }}
            source={{
              uri: `https://i.pinimg.com/originals/c5/c1/f7/c5c1f753795d4184bc2f1261f35054a9.jpg`,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#131A22",
            borderRadius: 30,
            height:500,
            maxHeight:"100%",
            width: "100%",
            paddingHorizontal:33,
            paddingVertical:38
          }}
        >
          <View>
          <Text style={{color:"white",fontSize:30,fontWeight:"500"}}>Reizha Fajrian</Text>
          <Text style={{color:colors.textGrey,fontSize:15,fontWeight:"500"}}>Developer</Text>
          </View>   
  
          <DetailUserItem title={`Email :`} name={`Reizha77@gmail.com`} style={false}/>
          <DetailUserItem title={`Phone :`} name={`081211897997`} style={false}/>
          <DetailUserItem title={`Address :`} name={`jl.parung belimbing rt 05/17 no 47`} style={false}/>
          <DetailUserItem title={`Kontribusi`} name={`90`} style={true}/>
          <View style={{height:28}}/>
          <View style={{alignItems:"center"}}>
    
          <TouchableHighlight style={{alignItems:"center",height:30,width:100,justifyContent:"center"}}>
            <Text style={{color:colors.textSecondary}}>Logout</Text>
          </TouchableHighlight>
                  
          </View>
          

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pages: (color) => ({
    backgroundColor: color,
    flex: 1,
  }),
});
