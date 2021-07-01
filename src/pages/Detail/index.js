import { useTheme } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ICPLAY, IMGCarousel } from "../../assets";
import { Comment, FormText } from "../../components";
import FloatButton from "../../components/FloatButton";
import SwipeablePanel from "react-native-sheets-bottom";
import styled from "styled-components";
import Stars from "../../components/Rating";
import StarRating from "react-native-star-rating";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postComment, getComment } from "../../utils/Firebase";
import Loading from "../../components/Loading/loading";
import MemoComment from "../../components/Comment";
import WebView from "react-native-webview";
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";
import Header from "../../components/Header/Header"
import FastImage from "react-native-fast-image";

export default function Detail({ route, navigation }) {
  const { colors } = useTheme();
  const { item } = route.params;
  const [active, setactive] = React.useState(false);
  const [ratings, setratings] = React.useState(0);
  const [text, settext] = React.useState("");
  const [change, setchange] = React.useState(false);
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setloading(true);
    getCommentDetail();

    return () => {};
  }, [change]);

  const postCommentDetail = async () => {
    if (text !== "" && ratings !== 0) {
      const email = await AsyncStorage.getItem("email_user");
      setloading(true);
      const json = {
        emailUser: email,
        id: item.id,
        comment: text,
        rating: ratings,
      };
      await postComment(json);
      setloading(false);
      setactive(false);
      getCommentDetail();
    }
  };
  const [getComments, setgetComments] = React.useState([{}]);
  const getCommentDetail = async () => {
    setloading(true);
    const comment = await getComment(item.id);
    setgetComments(comment);
    setchange(true);
    setloading(false);
  };
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <>
         <Header scrollA={scrollA}/>
         
          <View style={styles.mainMenu(colors.pages)}>
            <ListMemo data={getComments} headerData={item} scrollA={scrollA} />
          </View>

          <FloatButton
            onPress={() => {
              setactive(true);
            }}
          />
          <SwipeablePanel
            fullWidth
            isActive={active}
            onClose={() => {
              setactive(false);
            }}
            // onPressCloseButton={setactive(false)}
            style={{ backgroundColor: colors.pages }}
            openLarge={true}
            closeOnTouchOutside={true}
            onlyLarge={true}
          >
            <View
              style={{
                backgroundColor: colors.pages,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormText
                title={"Comment"}
                type={"textarea"}
                ChangeInput={settext}
              />
              <StarRating
                disabled={false}
                maxStars={5}
                rating={ratings}
                selectedStar={(rate) => setratings(rate)}
                fullStarColor={"yellow"}
                starSize={23}
              />
              <Button
                onPress={() => {
                  postCommentDetail();
                }}
              >
                <Text style={{ color: colors.text }}>Save</Text>
              </Button>
            </View>
          </SwipeablePanel>
        </>
      )}
    </SafeAreaView>
  );
}
const HeaderComponent = ({ data, scroll }) => {
  const { colors } = useTheme();
  const [webview, setwebview] = React.useState(false);
  const [video, setvideo] = React.useState("");
  React.useEffect(() => {
    setvideo(data.video);
    return () => {
      setwebview(false);
    };
  }, []);

  return (
    <>
      <View style={styles.containerImage}>
        <TouchableOpacity
          onPress={() => {
            setwebview(true);
          }}
          style={{ flex: 1 }}
          activeOpacity={1}
          bac
        >
          <Animated.View style={styles.animated(scroll)}>
          {webview ? (
            <VideoPlayer
              source={{
                uri: video,
              }}
              toggleResizeModeOnFullscreen={false}
              disableFullscreen
              tapAnywhereToPause={true}
              disableBack
              disableVolume
              onPause={() => {
                setwebview(false);
              }}
            />
          ) : (
            <>
              <FastImage style={styles.image} source={{ uri: data.image }} />
              <View
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  backgroundColor: "transparent",
                  bottom: 0,
                  top: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ICPLAY />
              </View>
            </>
          )}
            </Animated.View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: colors.pages,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: 24,
            fontWeight: "500",
          }}
        >
          {data.title}
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: 18,
            textAlign: "center",
            marginVertical: 24,
          }}
        >
          {data.text}
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: 18,
            marginVertical: 24,
          }}
        >
          Review
        </Text>
      </View>
    </>
  );
};
const List = ({ data, headerData,scrollA }) => {

  const { colors } = useTheme();
  return (
  
      <Animated.FlatList
        data={data}
        renderItem={(item) => (
          <View
            style={{ paddingHorizontal: 16, backgroundColor: colors.pages }}
          >
            <MemoComment item={item} />
          </View>
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollA,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => index}
        // key={(index) => index}
        ListHeaderComponent={() => (
          <HeaderComponent data={headerData} scroll={scrollA} />
        )}
      />
   
  );
};
const ListMemo = React.memo(List);

const Compare = (prevProps, nextProps) => {
  console.log(prevProps === nextProps, "ini props");
  // return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

const styles = StyleSheet.create({
  page: (colorPages) => ({
    backgroundColor: colorPages,
    flex: 1,
    paddingHorizontal: 16,
    alignItem,
  }),
  containerImage: {
    position: "relative",
    top: 0,
    right: 0,
    height: 350,
    left: 0,

  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "cover",
  },
  animated: (scroll) => ({

    width: "100%",
    height: 350,
    backgroundColor:"white",
    transform: [
      {
        translateY: scroll.interpolate({
          inputRange:[-350,0,350,351],
          outputRange:[-150/2,0,350*0.75,350*0.75]
        }),
      },
      {scale: scroll.interpolate({
        inputRange:[-350,0,350,351],
        outputRange:[2,1,1,1]
      })},
    ],
  }),
  mainMenu: (colorsPages) => ({
    backgroundColor: colorsPages,
  }),
});
const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: white;
  height: 47px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;
