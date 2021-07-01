import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styled from 'styled-components'

export default function Loading() {
    return (
        <ContainerLoading>
            <ActivityIndicator size={'large'} color="#0000ff"/>
        </ContainerLoading>
    )
}

const ContainerLoading=styled.View`
flex:1;
justify-content:center;
`