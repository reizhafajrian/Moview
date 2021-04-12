import { useTheme } from "@react-navigation/native";
import React from "react";
import { LogBox, SafeAreaView, StyleSheet, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { IMGCarousel } from "../../assets";
import { CarouselComponent } from "../../components";
import Item from "../../components/Item";
const data = [
  {
    category: "Sedang Tayang",
    data: [
      {
        id: "0",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
      {
        id: "1",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
      {
        id: "2",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
    ],
  },
  {
    category: "Action",
    data: [
      {
        id: "0",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
      {
        id: "1",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
      {
        id: "2",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
    ],
  }, {
    category: "Romance",
    data: [
      {
        id: "0",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
      {
        id: "1",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
      {
        id: "2",
        name: "Elona Holmes",
        tag: ["Action", "Mystery"],
        image: IMGCarousel,
      },
    ],
  },
];

export default function Home({ navigation }) {
  const { colors } = useTheme();
  React.useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const renderItem = ({ item, navigation }) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.page(colors.pages)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselComponent />
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            key={(index) => index}
          />
        </SafeAreaView>
        <View style={{ height: 70 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: (colorPages) => ({
    backgroundColor: colorPages,
    flex: 1,
  }),
});
