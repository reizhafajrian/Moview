import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../../Provider";
import {MemoDetailUserItem} from "../../components/DetailUserItem";
import { getUser } from "../../utils/Firebase";

export default function User() {
  const { colors } = useTheme();
  const { signOut } = React.useContext(AuthContext);
  const [data, setdata] = React.useState([
    {
      "email":"johndoe@gmail.com",
      "name":"john doe",
      "address":"Jl Margonda",
      "phone":"0812345678"
    }
  ])
  const api = React.useRef(false);

  const getData = async () => {
    if (api.current) {
      const data = await getUser();
      setdata(data)

      api.current = false;
    }
  };
 
  React.useEffect(() => {
    console.log("tes");
    api.current=true
    getData();
    return () => {
      api.current = false;
    };
  }, [data[0].email]);

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
          <Text style={{color:"white",fontSize:30,fontWeight:"500"}}>{data[0].name}</Text>
          <Text style={{color:colors.textGrey,fontSize:15,fontWeight:"500"}}>{" "}</Text>
          </View>   
  
          <MemoDetailUserItem title={`Email :`} name={data[0].email} style={false}/>
          <MemoDetailUserItem title={`Phone :`} name={data[0].phone} style={false}/>
          <MemoDetailUserItem title={`Address :`} name={data[0].address} style={false}/>

       
          <View style={{height:48}}/>
          <View style={{alignItems:"center"}}>
    
          <TouchableHighlight style={{alignItems:"center",height:30,width:100,justifyContent:"center"}} onPress={()=>signOut()} >
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
