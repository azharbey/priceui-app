"use client"
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const ChakraCode = () => {
  return (
    <>
    <Heading style={{color: "Red", fontSize: "20px"}}>Default Heading from Chakra</Heading>
    <Heading as ="h1" color="blue.400" fontSize={"24px"}>H1 Heading from Chakra</Heading>
    <Text fontWeight={"bold"}>This used for paragraph</Text>
    </>
    
  )
}
