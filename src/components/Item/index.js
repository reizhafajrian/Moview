import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { navigate } from "../../../RootNavigation";

import { IMGCarousel } from "../../assets";
import { getMoviesCategory } from "../../utils/Firebase";
import Stars from "../Rating";

export default function Item({ item, onPress }) {
  const [state, setstate] = useState(item.data);
  const { colors } = useTheme();

  const getMovieCtageory = async () => {
    const hasil = await getMoviesCategory(item.id);

    setstate(hasil);
  };

  useEffect(() => {
    getMovieCtageory();
  }, [state]);

  return (
    <View style={{ flexDirection: "column", flex: 1, width: "100%" }}>
      <Text style={styles.text(colors.textPrimary)}>{item.category}</Text>

      <FlatList
        data={state}
        renderItem={({ item, index }) => <RenderItem item={item} key={index} />}
        horizontal
       
        keyExtractor={(item, index) => item.title}
        key={(item, index) => Math.random()}
        ListHeaderComponent={() => (
          <Text style={styles.textTest(colors.textPrimary)}> </Text>
        )}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ flex: 1, width: "100%" }}
        style={{ flex: 1, width: "100%" }}
      />
      {/* 
        <ScrollView style={{ flex: 1, flexDirection: "row", }} horizontal>
          {state.map((item, key) => {
            return <RenderItem item={item} key={key} />;
          })}
        </ScrollView> */}
    </View>
  );
}

const RenderItem = ({ item, index }) => {
  const { colors } = useTheme();
  const rate = () => {
    return;
  };
  const mean = (data) => {
    let rate = 0;
    if (typeof item.rating !== "undefined") {
      data.forEach((element) => {
        rate = rate + element;
      });

      return rate / data.length;
    } else {
      return 0;
    }
  };

  return (
    <TouchableOpacity
      style={{ width: 150, justifyContent: "center" }}
      onPress={() =>
        navigate("Detail", {
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
        <Stars rating={mean(item.rating)} />
        <Text style={styles.tag(colors.textSecondary)}>{item.tag}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
// export const ItemMemo = React.memo(Item, Compare);
// const Compare = (prevProps, nextProps) => {
//   return prevProps === nextProps;
// };

// const Compare = (prevProps, nextProps) => {
//   console.log(prevProps === nextProps, "ini props");
//   // return JSON.stringify(prevProps) === JSON.stringify(nextProps);
// };
