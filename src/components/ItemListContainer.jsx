import React from 'react'
import { Flex, Center, Text } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
       
       <Flex color='black'>
  <Center w='1000px'>
    <Text> {greeting} </Text>
  </Center>
  </Flex>
       
    </div>
  )
}

export default ItemListContainer