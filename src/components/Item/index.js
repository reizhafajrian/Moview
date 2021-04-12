import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView
} from "react-native";
import { navigate } from "../../../RootNavigation";

import { IMGCarousel } from "../../assets";

export default function Item({ item, onPress }) {
  const { colors } = useTheme();
  

  const renderItem = ({ item,index }) => {
 
    return <ItemClick item={item} />;
  };
  const ItemClick = ({item}) => {
    return (
      <TouchableHighlight onPress={()=>navigate("Detail",{
        item
      })}>
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.itemContainer}>
            <Image source={IMGCarousel} style={styles.image} />
          </View>
          <Text style={styles.title(colors.textPrimary)}>{item.name}</Text>
          <Text style={styles.tag(colors.textSecondary)}>{item.tag}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.text(colors.textPrimary)}>{item.category}</Text>
      <ScrollView horizontal>
        <SafeAreaView style={{flex: 1, flexDirection: "column" }}>
          <FlatList
            data={item.data}
            renderItem={renderItem}
            horizontal
            keyExtractor={(item) => item.id}
            key={(index) => index}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  }),
  tag: (color) => ({
    color: color,
  }),
  text: (style) => ({
    color: style,
    fontSize: 18,
    marginVertical: 20,
    marginHorizontal: 20,
  }),
});
