import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const SinglePet = (props) => {
  const  {photo, name, breed, age, gender } = props.pet;
  
 let genderIcon = (gender === 'male') ? genderIcon="gender-male" : genderIcon="gender-female";

    return (
        <Wrapper style={{
            shadowColor: "#5a5a5a",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.12,
            shadowRadius: 2.22,

            elevation: 3,
        }}>
            <LeftWrapper>
                <Image source={photo }style={{
                    width: 150, height: 150
                }}/>
            </LeftWrapper>

            <RightWrapper>
                <Gender>
                     <MaterialCommunityIcons name={genderIcon} size={20} color="#515151" />
                </Gender>
                <Name>
                    {name}
                </Name>
                <Breed>
                    {breed}
                </Breed>
                <Age>
                    {age} old
                </Age>
            </RightWrapper>
        </Wrapper>
    )
}

export default SinglePet

const Wrapper = styled.View`
background-color: #fff;
align-items: center;

flex-direction: row;
border-radius: 10px;
height: auto;
width: 250px;

margin-bottom: 15px;
margin-top: 15px;

`

const LeftWrapper = styled.View`
background-color: #dbb8b8;
flex: 0.5;
transform: scale(1.1);
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
border-radius: 10px;`

const RightWrapper = styled.View`
flex: 0.5;
padding-left: 30px;
`

const Gender = styled.Text`
position: absolute;
right: 10px;
top: -35px;`

const Name = styled.Text`
font-weight: 800;
padding-bottom: 2px;
`

const Breed = styled.Text`
color: #515151;
font-weight: 600;
padding-bottom: 2px;
`

const Age = styled.Text`
color: #515151;` 