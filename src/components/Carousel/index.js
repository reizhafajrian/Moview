import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { IMGCarousel } from "../../assets";

const data = [IMGCarousel, IMGCarousel];
const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
export default function CarouselComponent() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: sliderWidth,
          backgroundColor: "white",
          height: 308,
        }}
      >
        <Image
          style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          source={item}
        />
      </View>
    );
  };

  const animated=()=>{

  }

  const Paginations = () => {
    return (
      <Pagination
        dotsLength={2}
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
      />
    );
  };

  return (
    
    <View
      style={{
        backgroundColor: "white",
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        overflow: "hidden",
        width: sliderWidth,
      }}
    >
      <Carousel
        slideInterpolatedStyle={animated}
        data={data}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
        autoplay={true}
        autoplay={true}
        lockScrollWhileSnapping={true}
       
        enableMomentum={false}
        autoplayInterval={8000}
        windowSize={1}
        sliderWidth={sliderWidth}
        sliderHeight={308}
        itemWidth={sliderWidth}
      />
      <Paginations />
    </View>
  );
}
