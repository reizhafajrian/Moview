import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components'
import { IMGPen } from '../../assets'

export default function FloatButton({onPress}) {
    return (
        <ButtonFloat onPress={onPress} >
           <Image source={IMGPen} />
        </ButtonFloat>
    )
}
const ButtonFloat=styled.TouchableOpacity`
width:60px;
height:60px;
border-radius:30px;
background-color:white;
position:absolute;
bottom: 100px;                                                  
right: 10px; 
justify-content:center;
align-items:center;
`
