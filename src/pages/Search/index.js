import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { ICSearchWhite } from "../../assets";
import { searchFirebase } from "../../utils/Firebase";
import Item from "../../components/Item/index";
import Stars from "../../components/Rating";
import Loading from "../../components/Loading/loading";
export default function Search({ navigation }) {
  const { colors } = useTheme();
  const [search, setsearch] = useState("");
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState(false);
  const RenderItem = ({ item, index }) => {
    console.log(item, "ini render");
    return (
      <TouchableHighlight
        style={{ width: 150, justifyContent: "center" }}
        onPress={() =>
          navigation.navigate("Detail", {
            item,
          })
        }
      >
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <Text style={styles.title(colors.textPrimary)} numberOfLines={1}>
            {item.title}
          </Text>
          <Stars rating={4.6} />
          <Text style={styles.tag(colors.textSecondary)}>{item.tag}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  const searchFunction = async (key) => {
    setloading(true);
    const data = await searchFirebase(key);
    setdatas(data);
    setloading(false);
  };

  return (
    <SafeAreaView style={styles.pages(colors.pages)}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 15,
                backgroundColor: "#242425",
                overflow: "hidden",
                width: "100%",
                marginTop: 28,
                paddingHorizontal: 17,
                height: 40,
              }}
            >
              <ICSearchWhite />
              <TextInput
                placeholder={"Search"}
                placeholderTextColor={"white"}
                onChangeText={setsearch}
                onSubmitEditing={() => searchFunction(search)}
                style={{
                  backgroundColor: "#242425",
                  width: "100%",
                  color: "white",
                  borderRadius: 12,
                  paddingHorizontal: 30,
                }}
              />
            </View>
          </View>

          <FlatList
            data={datas}
            renderItem={RenderItem}
            style={{ marginTop: 20 }}
          />
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  pages: (color) => ({
    backgroundColor: color,
    flex: 1,
  }),
  itemContainer: {
    height: 156,
    width: 113,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: null,
    height: null,
    resizeMode: "cover",
    flex: 1,
  },
  title: (color) => ({
    color: color,
    fontSize: 15,
    width: "100%",
  }),
  tag: (color) => ({
    color: color,
  }),
  textTest: (style) => ({
    color: style,
    fontSize: 18,
    marginVertical: 1,
    marginHorizontal: 1,
  }),
  text: (style) => ({
    color: style,
    fontSize: 18,
    marginVertical: 20,
    marginHorizontal: 20,
  }),
});
