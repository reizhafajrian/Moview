import { useTheme } from "@react-navigation/native";
import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import styled from "styled-components";

const width = Dimensions.get("screen").width;
export default function FormText({ title, placeholder, secure, ChangeInput,type,onFocus }) {
  const [email, setemail] = React.useState("");
  const { colors } = useTheme();
  return (
    <ContainerForm width={width - (width * 10) / 100}>
      <Text style={{ color: colors.white }}>{title}</Text>
      <View style={{ height: 12 }} />
      <TextInputWrapper
        borderColor={colors.borderColorForm}
        backgroundColor={colors.bottomNav}
        type={type}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textGrey}
          secureTextEntry={true}
          style={{
            color: colors.white,
            borderColor: "black",
            paddingHorizontal: 20,
            height: type==="textarea"?250:40,
            textAlignVertical:"top"
          }}
          onFocus={onFocus}
          multiline={type==="textarea"?true:false}
          onChangeText={ChangeInput}
          secureTextEntry={secure}
        />
      </TextInputWrapper>
    </ContainerForm>
  );
}

const ContainerForm = styled.View`
  margin-bottom: 12px;
  width: ${(props) => props.width}px;
 
`;

const TextInputWrapper = styled.View`
  border-radius: 12px;
  overflow: hidden;
  border-width: 1px;
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  height: 40px;
  justify-content: center;
  height: ${(props)=>props.type==="textarea"?250:40}px
`;
