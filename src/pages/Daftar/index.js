import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import { ICHome } from "../../assets";
import { FormText, TitlePage } from "../../components";
import Loading from "../../components/Loading/loading";
import TextInfoClick from "../../components/TextInfoClick/TextInfoClick";
import { SignUp } from "../../utils/Firebase";

export default function Daftar() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confpassword, setconfpassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const checkField =
    name !== "" &&
    email !== "" &&
    password !== "" &&
    confpassword !== "" &&
    phone !== "" &&
    address !== "";
  const checkpass = password === confpassword;
  const [loading, setloading] = useState(false);
  const moveToSignIn = () => {
    navigation.navigate("Masuk");
  };
  let get = React.useRef(false);
  const regist = async () => {
    setloading(true);
    if (get.current) {
      if (checkField && checkpass) {
        const json = {
          name: name,
          email: email,
          password: password,
          confpassword: confpassword,
          phone: phone,
          address: address,
        };
        try {
          await SignUp(json);
        } catch (error) {
          setloading(false);
        }
    
      }
      setname("");
      setemail("");
      setpassword("");
      setconfpassword("");
      setphone("");
      setaddress("");
    }
    setloading(false);
  };
  React.useEffect(() => {
    get.current = true;
    return () => {
      get.current = false;
    };
  }, []);
  return (
    <SafeContainer>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View
            style={{
              backgroundColor: colors.pages,
              flex: 1,

              paddingHorizontal: 16,

              paddingTop: 85,
            }}
          >
            <TitlePage
              title={`Selamat Datang Di Moview`}
              secondText={`Daftar dan mulai review film favorite anda`}
            />
            <View style={{ height: 30 }} />
            <FormText
              title={"Nama"}
              placeholder={"John Doe"}
              secure={false}
              ChangeInput={setname}
            />
            <FormText
              title={"Email"}
              placeholder={"JohnDoe@gmail.com"}
              secure={false}
              ChangeInput={setemail}
            />
            <FormText
              title={"Password"}
              placeholder={"Password"}
              secure={true}
              ChangeInput={setpassword}
            />
            <FormText
              title={"Conf-Password"}
              placeholder={"Conf-Password"}
              secure={true}
              ChangeInput={setconfpassword}
            />
            <FormText
              title={"Phone"}
              placeholder={"0812345678"}
              secure={false}
              ChangeInput={setphone}
            />
            <FormText
              title={"Address"}
              placeholder={"jl parung belimbing"}
              secure={false}
              ChangeInput={setaddress}
            />
            <View style={{ height: 40 }} />
            <TextInfoClick
              text={"Sudah memiliki akun?"}
              clickText={"Masuk"}
              btnText={"Daftar"}
              onPressClickText={moveToSignIn}
              onPressBtn={regist}
            />
            <View style={{ height: 30 }} />
          </View>
        </ScrollView>
      )}
    </SafeContainer>
  );
}
const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;


