import React from "react";
import { SafeAreaView, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList} from "@react-navigation/drawer";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import person from "../../assets/girl.jpg";
const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopWrapper>
        <Avatar source={person} />
        <Name>Erica Veselnyak</Name>
      </TopWrapper>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Wrapper>
        <Ionicons
          name="ios-settings-outline"
          size={24}
          color="grey"
          style={{ paddingHorizontal: 10 }}
        />
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
            paddingRight: 4,
          }}
        >
          Settings |
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          {" "}
          Log out
        </Text>
      </Wrapper>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;

const TopWrapper = styled.View`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
  padding-top: 60px;
  padding-left: 30px;
`;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  align-self: center;
  margin-right: 15px;
`;
const Name = styled.Text`
  font-weight: 800;
  font-size: 20px;
`;
