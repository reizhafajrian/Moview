import MaskedView from "@react-native-community/masked-view";
import { SafeAreaView, View } from "react-native";
import { ICStar } from "../../assets/index";
import React from 'react'

export default function Stars({ rating }) {
  const widthStars = 5 / rating;

  let loop = [];

  for (let i = 0; i < 5; i++) {
    loop.push(<ICStar key={i} />);
  }
  return (
    <MaskedView
      style={{ height:19, flexDirection: "row", width: 100,marginVertical:11, }}
      maskElement={
        <SafeAreaView
          style={{
            flexDirection: "row",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {loop}
        </SafeAreaView>
      }
    >
      <View
        style={{ width: `${100/widthStars}%`, backgroundColor: "#FFC833" }}
      />
      <View style={{ width: "100%", backgroundColor: "#EBF0FF" }} />
    </MaskedView>
  );
}
