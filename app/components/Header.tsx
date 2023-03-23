
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Header = () => {
  return (
    <Box textAlign={{base: "left", md: "left", lg: "center"}} 
    bg="blue.400" 
    pl="10px"
    pt="90px" 
    pb="250px" 
    color="white">
    <Heading pb="10px">Pricing for your Business by Azhar Mahmood</Heading>
    <Text>Choose your suitable plan</Text>   
    </Box>
  )
}
