import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const PetOption = ({title, icon, active}) => {
    return (
        <Container>
            <Wrapper active={active}
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.26,
                shadowRadius: 4.99,
                
                elevation: 9,
              }}>
            <MaterialCommunityIcons name={`${icon}`} size={44} color={`${(active ? '#fff' : '#565656')}`} />
            </Wrapper>
            <Title>{title}</Title>
        </Container>
    )
}

export default PetOption
const Container = styled.View`
align-items: center;
justify-content: center;
cursor: pointer;

`
const Wrapper = styled.View`
margin: 10px;
background-color: #fff;
background-color: ${props => (props.active ? '#f97a5b' : '#fff')};
border-radius: 10px;
padding: 5px;
`

const Title = styled.Text`
text-align: center;
font-weight: 800;
font-size: 18px;`