import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getUser } from "../../utils/Firebase";

function DetailUserItem({ title, name, style }) {
  const { colors } = useTheme();

  return (
    <View style={styles.pages(style)}>
      <View style={{ height: 27 }} />
      <Text style={{ color: colors.textGrey, fontSize: 15, fontWeight: "500" }}>
        {title}
      </Text>
      <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: (styles) => ({
    alignItems: styles === false ? "flex-start" : "center",
  }),
});
export  const MemoDetailUserItem = React.memo(DetailUserItem);

