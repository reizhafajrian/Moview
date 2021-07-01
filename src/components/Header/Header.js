import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { ICBACK } from "../../assets";

export default function Header(props) {
  const safeArea = useSafeArea();
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { title, scrollA } = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = React.useState(isFloating);

  React.useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a) => {
      const topNaviOffset = 350 - 10 - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View
        style={styles.container(
          safeArea,
          isFloating,
          isTransparent,
          colors.pages
        )}
      >
        <TouchableOpacity style={{paddingHorizontal:20}} onPress={() => navigation.goBack()}>
         <ICBACK/>
        </TouchableOpacity>
      
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: (safeArea, isFloating, isTransparent, color) => ({
    marginBottom: isFloating ? -10 - safeArea.top : 0,
    height: 10 + safeArea.top,
    justifyContent: "space-around",
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? "#0001" : color,
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,


    
    
  }),
  title: (isTransparent) => ({
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,

    color: isTransparent ? "#000" : "#FFF",
  }),
});
