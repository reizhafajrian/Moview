import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { IMGCarousel } from "../../assets";
import { getCarousel } from "../../utils/Firebase";

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
export default function CarouselComponent({item}) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const ref = React.useRef(false);
  const [datum, setdatum] = React.useState(["1","3"]);
  // console.log(datum)
  // const GetImageCarousel = async () => {
  //   if (ref.current) {
  //     const data = await getCarousel();
  //     console.log(data)
  //     setdatum(data);

  //   }

  // };
  // React.useEffect(() => {
  //   ref.current = true;
  //   GetImageCarousel();

  //   return () => {
  //     ref.current = false;
  //   };
  // }, []);
  const RenderItem = ({ item, index }) => {

    return (
      <View
        style={{
          width: sliderWidth,

          height: 308,
        }}
      >
        <FastImage
          style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          source={{ uri: item }}
        />
      </View>
    );
  };

  const animated = () => {};

  const Paginations = ({data}) => {
    return (
      <Pagination
        dotsLength={data}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        activeOpacity={0}
      />
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        overflow: "hidden",
        width: sliderWidth,
      }}
    >
      <Carousel
        slideInterpolatedStyle={animated}
        data={item}
        renderItem={({ item }) => <RenderItem item={item} />}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
        autoplay={true}
        lockScrollWhileSnapping={true}
        enableMomentum={false}
        autoplayInterval={8000}
        windowSize={1}
        sliderWidth={sliderWidth}
        sliderHeight={308}
        itemWidth={sliderWidth}
        activeOpacity={0}
        
      />
      <Paginations data={item.length} />
    </View>
  );
}
