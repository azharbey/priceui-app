import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import IconCenter from './IconCenter'
import IconLeft from './IconLeft'
import IconRight from './IconRight'

export const Features1 = () => {
  return (
    <Box maxW={"800px"} mx="auto" p="30px" px="40px">
      <Flex direction={{base: "column", md: "column", lg: "row"}} >
      <HStack mb="10px">
      <Icon as={IconLeft} />
      <Text>30 days money back Guarantee</Text>
      </HStack>

      <HStack mb="10px">
      <Icon as={IconCenter} />
      <Text>No setup fee 100% hassle free</Text>
      </HStack>

      <HStack mb="10px">
      <Icon as={IconRight} />
      <Text>No monthly subscription pay once for all</Text>
      </HStack>
      </Flex>
    </Box>
  )
}
