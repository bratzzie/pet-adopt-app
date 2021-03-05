import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import SinglePet from './SinglePet'

import dogs from '../data/Dogs'
import { FlatList } from 'react-native-gesture-handler'

const PetList = () => {
    return (
        <Container>
            <FlatList  style={styles.flatList}
            data={dogs} 
            renderItem={({item}) => <SinglePet pet={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
           contentContainerStyle={{justifyContent: 'center',
           alignItems: 'center'}}
         />
          
        </Container>
    )
}

export default PetList
const Container = styled.View`
width: 100%;`

const styles = StyleSheet.create({
    flatList: {
        flexGrow: 0,
        width: '100%',
       height: 350
      }
})