import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import person from '../../assets/girl.jpg'
const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";

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
        <Ionicons name="ios-settings-outline" size={24} color="grey"
        style={{paddingHorizontal: 10}} />
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey", paddingRight: 4}}>
          Settings |
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        {" "}Log out
        </Text>
      </Wrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;

const TopWrapper = styled.View`
padding: 20px 0;
flex-direction: row;
align-items: center;
border-bottom-color: #f3f3f3;
border-bottom-width: 1px;
padding-top: 60px;
padding-left: 30px;
`
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
`
const Name = styled.Text`
font-weight: 800;
font-size: 20px;`
