import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";


const width=Dimensions.get('screen').width
export default function TextInfoClick({ text, clickText,onPressClickText,btnText ,onPressBtn}) {
  const { colors } = useTheme();
  
  return (
    <ContainerComponent>
      <WrapperText>
        <TextComponentOnly color={colors.textPrimary}>{text}</TextComponentOnly>
        <TextComponentOnly
          color={colors.textSecondary}
          onPress={onPressClickText}
        >
          {clickText}
        </TextComponentOnly>
      </WrapperText>
      <Button width={width-(width*30/100)} onPress={onPressBtn}  >
        <TextComponentOnly color={"black"}>{btnText}</TextComponentOnly>
      </Button>
    </ContainerComponent>
  );
}

const ContainerComponent = styled.View`
  display: flex;
  justify-content:center;
  align-items:center;


`;
const WrapperText = styled.View`
flex-direction:row;
`;
const TextComponentOnly = styled.Text`
  color: ${(props) => props.color};
`;

const Button=styled.TouchableOpacity`
width:${props=>props.width}px;
background-color:white;
height:47px;
border-radius:22px;
justify-content:center;
align-items:center;
margin-top:18px
`
