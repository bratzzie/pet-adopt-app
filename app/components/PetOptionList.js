import React from "react";
import styled from "styled-components/native";

import PetOption from "./PetOption";

const PetOptionList = () => {
  return (
    <Section>
      <PetOption title="Dogs" icon="dog-side" active />
      <PetOption title="Cats" icon="cat" />
      <PetOption title="Parrots" icon="twitter" />
      <PetOption title="Bunnies" icon="rabbit" />
    </Section>
  );
};

export default PetOptionList;
const Section = styled.View`
  flex-direction: row;
`;
