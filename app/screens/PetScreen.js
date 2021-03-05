import React from 'react'
import { View, Text, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native'
import photo from '../../assets/1.png'
import { ScrollView } from 'react-native-gesture-handler';
const PetScreen = () => {
    return (
        <Section>
           <UpperWrapper>
               <Bar>
               <MaterialCommunityIcons name="heart" size={24} color="black" style={{zIndex: 300}} />
               <MaterialCommunityIcons name="close-thick" size={24} color="black" />
               </Bar>
               <Image source={photo} />
           </UpperWrapper>
           <BottomWrapper>
               <Row>
                   <Name>Vanya</Name>
                   <Gender><MaterialCommunityIcons name="gender-male" size={25} color="#515151" /></Gender>
               </Row>
               <Row >
                   <Breed>German Shepherd</Breed>
               </Row>

                <Characteristic>
                    <Age
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.16,
                        shadowRadius: 2.99,
                        
                        elevation: 3,
                      }}>
                    <Text style={{fontWeight: "bold"}}>Age</Text> 
                    <Text style={{color: '#515151', marginTop: -10}}>{"\n"}1 year</Text>
                   
                    </Age>

                    <Height
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.16,
                        shadowRadius: 2.99,
                        
                        elevation: 3,

                      }}>
                    <Text style={{fontWeight: "bold"}}>Height</Text>
                    <Text style={{color: '#515151', marginTop: -10}}>{"\n"}0.23 m</Text> 
                    </Height>

                    <Weight
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.16,
                        shadowRadius: 2.99,
                        
                        elevation: 3,
                      }}>
                    <Text style={{fontWeight: "bold"}}>Weight</Text>
                    <Text style={{color: '#515151', marginTop: -10}}>{"\n"}3.4 kg</Text> 
                    </Weight>
                </Characteristic>

                <Desc >
                    <Title>About pet</Title>
                    <ScrollView>
                         <Paragraph>Nullam quis libero sed justo pellentesque mattis eu et nisi. Donec auctor gravida libero eu tempor. Donec blandit facilisis cursus. Pellentesque ac quam ac ex aliquam volutpat. Sed in egestas lectus, non consectetur ipsum. Pellentesque consectetur eleifend felis at eleifend. Pellentesque nec interdum ipsum. Fusce fermentum, sem non auctor cursus, nisl tortor aliquet lacus, malesuada malesuada tellus tellus ut justo. Nulla eleifend imperdiet justo eget mollis.</Paragraph>
                    </ScrollView>
                               </Desc>
           </BottomWrapper>
        </Section>
    )
}

export default PetScreen
const Section = styled.View`

background-color: #fff;
align-items: center;
justify-content: center;`

const UpperWrapper = styled.View`
background-color: #dbb8b8;
`


const Bar = styled.View`
flex-direction: row;

margin: 10px;
border-radius: 10px;
padding: 5px;`

const BottomWrapper = styled.View`
padding: 0px 20px;
`

const Row = styled.View`
flex-direction: row;
padding: 0px 20px;
align-items: center;
justify-content: flex-start;`

const Name = styled.Text`
font-weight: bold;
font-size: 30px;`

const Gender = styled.View`
margin-left: 10px;`

const Breed = styled.Text``

const Characteristic = styled.View`
flex-direction: row;
justify-content: space-evenly;
padding: 5px;`

const Age = styled.View`
background-color: #ced8ea;
align-items: center;
justify-content: center;
margin: 10px;
border-radius: 10px;
width: 65px;
height: 60px;
`

const Height = styled.View`
background-color: #ced8ea;
align-items: center;
justify-content: center;
margin: 10px;
border-radius: 10px;

width: 65px;
height: 60px;`


const Weight = styled.View`
background-color: #ced8ea;
align-items: center;
justify-content: center;
margin: 10px;
border-radius: 10px;

width: 65px;
height: 60px;`

const Desc = styled.View`
flex: 0.5;
`

const Title = styled.Text`
font-weight: 600;
font-size: 20px;
padding: 5px;`

const Paragraph = styled.Text`
color: #515151;`