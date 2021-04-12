import { useTheme } from "@react-navigation/native";
import React from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { IMGCarousel } from "../../assets";
import { Comment } from "../../components";


const data=[
  {
    id:"0",
    name:"reizha fajrian",
    job:"developer",
    image:IMGCarousel,
    review:`It sort of tries to be too many things at once.
    You think it's going to puzzle your brain a lot based on how things are set up, but it doesn't.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.`     
  },{
    id:"1",
    name:"reizha fajrian",
    job:"developer",
    image:IMGCarousel,
    review:`It sort of tries to be too many things at once.
    You think it's going to puzzle your brain a lot based on how things are set up, but it doesn't.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.`     
  },{
    id:'2',
    name:"reizha fajrian",
    job:"developer",
    image:IMGCarousel,
    review:`It sort of tries to be too many things at once.
    You think it's going to puzzle your brain a lot based on how things are set up, but it doesn't.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.`     
  },{
    id:'3',
    name:"reizha fajrian",
    job:"developer",
    image:IMGCarousel,
    review:`It sort of tries to be too many things at once.
    You think it's going to puzzle your brain a lot based on how things are set up, but it doesn't.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.
    There're commentaries on oppression and class/privilege differences thrown in there, which were alright, but sometimes annoying.`     
  },
]
export default function Detail({ route, navigation }) {
  const { colors } = useTheme();
  return (
    <ScrollView>

    <View >
      <View style={styles.containerImage}>
        <Image style={styles.image} source={IMGCarousel} />
      </View>
      <View style={styles.mainMenu(colors.pages)}>
        <Text
          style={{ color: colors.textPrimary, fontSize: 24, fontWeight: "500" }}
        >
          Enola Holmes
        </Text>
        <Text style={{ color: colors.textPrimary, fontSize: 18,textAlign:"center",marginVertical:24 }}>
          When Enola Holmes-Sherlock's teen sister-discovers her mother missing,
          she sets off to find her, becoming a super-sleuth in her own right as
          she outwits her famous brother and unravels a dangerous conspiracy
          around a mysterious young Lord.
        </Text>  
        <Text style={{ color: colors.textPrimary, fontSize: 18,marginVertical:24 }}>
            Review
        </Text>
        <FlatList
        data={data}
        renderItem={(item)=><Comment item={item}/>}
        keyExtractor={(item) => item.id}
        key={(index) => index}
        />
 
      </View>
                
  
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  page: (colorPages) => ({
    backgroundColor: colorPages,
    flex: 1,
    paddingHorizontal:16
  }),
  containerImage: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 342,
    left: 0,
    
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "cover",
  },
  mainMenu: (colorsPages) => ({
    backgroundColor: colorsPages,
    marginTop: 300,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 34,
  }),
});
