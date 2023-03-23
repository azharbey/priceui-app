import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { CheckMarkicon } from './CheckMarkicon'

export const Pricing = () => {
  return (
    <Box maxW={"950px"} 
    //m="auto" 
    mx={{base: "20px", lg: "auto"}} 
    mt="-150px" 
    bg="white" 
    borderRadius={"15px"} 
    overflow="hidden">
        <Flex direction={{base: "column", md: "column", lg: "row"}}>
        <Box bg="gray.200" p="40px" textAlign={"center"}>
        <Text fontSize={"20px"} fontWeight="bold">Premium PRO</Text>
        <Heading fontSize={"50px"}>$159</Heading>
        <Text>Billed One Time</Text>
        <Button mt="10px" w="300px" bg="blue.400" color="white">Get Started</Button>
        </Box>

        <Box pt="50px" pl="25px" pr="5px">
            <Text mb="20px">Access these features when you get this package for your business</Text>
            <HStack mb="5px">
                <Icon as={CheckMarkicon} />
            <Text>International calling and messaging API</Text>
            </HStack>

            <HStack mb="5px">
            <Icon as={CheckMarkicon} />
            <Text>Additional phone numbers</Text>
            </HStack>
            
            <HStack mb="5px">
            <Icon as={CheckMarkicon} />
            <Text>Automated Messages via Zapier </Text>
            </HStack>
            
            <HStack mb="5px">
            <Icon as={CheckMarkicon} />
            <Text>24/7 Support and Consulting</Text>
            </HStack>
        </Box>
        </Flex>
        </Box>
  )
}
