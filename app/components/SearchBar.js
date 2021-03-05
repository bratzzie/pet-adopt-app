import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <Container>
            <MaterialIcons name="search" size={20} color="#515151"
            style={{position: 'absolute', bottom : 14, zIndex: 30, left: 5}} />
             <TextInput style={styles.input} placeholder={'Search for your friend'}></TextInput>  
        </Container>
    )
}

export default SearchBar

const Container = styled.View`
position: relative;

background-color: #fff;
border-radius: 10px;
margin-bottom: 22px;
`
const styles = StyleSheet.create({
    input: {
        paddingVertical: 10,
        width: '100%',
        paddingHorizontal: 30,
      
    }
})