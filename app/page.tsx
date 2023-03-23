"use client"
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import { ChakraCode } from './components/ChakraCode'
import { Header } from './components/Header'
import { Pricing } from './components/Pricing'
import { Features1 } from './components/Features1'

export default function Home() {
  return (
      <ChakraProvider>
        { /* <ChakraCode /> */}
      <Header />
      <Pricing/>
      <Features1 />
      </ChakraProvider>
  
  )
    
    
}
