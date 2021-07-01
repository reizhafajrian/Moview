import { useTheme } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SwipeablePanel from "react-native-sheets-bottom";
import WebView from "react-native-webview";

import { CarouselComponent } from "../../components";
import Item from "../../components/Item";
import Loading from "../../components/Loading/loading";
import { getCarousel, getMoviesHome } from "../../utils/Firebase";

export default function Home({ navigation }) {
  const { colors } = useTheme();

  const [data, setdata] = React.useState([
    {
      id: "0",
    },
  ]);
  const [loading, setloading] = React.useState(true);
  const [change, setchange] = React.useState(false);

  React.useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const res = async () => {
    setloading(true);
    const datas = await getMoviesHome();
    setdata(datas);
    setchange(true);
    setloading(false);
  };

  useEffect(() => {
    res();
  }, [change]);

  const RenderItem = ({ item }) => {
    return (
      <>
        <Item item={item} />
      </>
    );
  };
  const [webview, setwebview] = React.useState(false);

  const ref = React.useRef(false);
  const [datum, setdatum] = React.useState([]);
  const GetImageCarousel = async () => {
    const data = await getCarousel();

    setdatum(data);
  };
  React.useEffect(() => {
    ref.current = true;
    GetImageCarousel();

    return () => {
      ref.current = false;
    };
  }, []);
  return (


 
    <View style={styles.page(colors.pages)}>
      {loading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item) => item.id}
            key={(item, index) => index}
            ListHeaderComponent={() => <CarouselComponent item={datum} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        // <SafeAreaView>
        //   {/* <WebViews /> */}
        //   <TouchableOpacity
        //     onPress={() => {
        //       setwebview(true);
        //     }}
        //   >
        //     <Text style={{ color: "white" }}>test</Text>
        //   </TouchableOpacity>
        // </SafeAreaView>
      )}
      {/* {webview ? (
        <TouchableOpacity
          onPress={() => {
            setwebview(false);
          }}
          style={{flex:1}}
        >
          <WebViews />
        </TouchableOpacity>
      ) : (
        <></>
      )} */}
      <SwipeablePanel/>
      <View style={{ height: 60 }} />
    </View>

  );
}

const styles = StyleSheet.create({
  page: (colorPages) => ({
    backgroundColor: colorPages,
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
