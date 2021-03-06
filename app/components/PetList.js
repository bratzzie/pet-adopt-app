import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { FlatList } from "react-native-gesture-handler";

import SinglePet from "./SinglePet";

const PetList = ({ petdata }) => {
  return (
    <Container>
      <FlatList
        style={styles.flatList}
        data={petdata}
        renderItem={({ item }) => <SinglePet pet={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </Container>
  );
};

export default PetList;
const Container = styled.View`
  width: 100%;
`;

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0,
    width: "100%",
    height: 400,
  },
});
