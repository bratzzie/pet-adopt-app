import React from "react";
import styled from "styled-components/native";

import PetList from "../components/PetList";
import SearchBar from "../components/SearchBar";

const PetListScreen = ({ getdata, navigation }) => {
  return (
    <PetListSection>
      <Container>
        <Title>Are you ready to adopt a pet?</Title>
        <SearchBar />
        <ListContainer>
          <PetList petdata={getdata} />
        </ListContainer>
      </Container>
    </PetListSection>
  );
};

export default PetListScreen;
const PetListSection = styled.View`
  flex: 1;
  background-color: #ecf0f3;

  flex-direction: column;
`;

const Container = styled.View`
  width: 100%;
`;

const ListContainer = styled.View`
  width: 100%;
`;
const Title = styled.Text`
  font-weight: bold;
  color: tomato;
  padding: 30px;
  padding-bottom: 15px;
  font-size: 18px;
`;
