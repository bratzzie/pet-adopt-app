import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import PetList from '../components/PetList'

import PetOptionList from '../components/PetOptionList'
import SearchBar from '../components/SearchBar'
import SinglePet from '../components/SinglePet'

const PetListScreen = () => {
    return (
        <PetListSection>
          <Container>
              <SearchBar />
              <PetOptionList />
                <ListContainer> 
                   <PetList />
                </ListContainer>
          </Container>
        </PetListSection>
    )
}

export default PetListScreen
const PetListSection = styled.View`
flex: 1;
background-color: #ecf0f3;
align-items: center;
justify-content: center;
flex-direction: column;`

const Container = styled.View``

const ListContainer = styled.View``
