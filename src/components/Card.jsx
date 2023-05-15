import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


const Card = ({ item }) => {
    return (
        <Flex key={item.id} gap='1rem' ml='1rem'>
            <Image src={item.sender.image} borderRadius='100%' boxSize='24px' alt='profile-pic' />
            <Flex boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='900' w='50vw' p='1rem'>
                <Text>{item.message}</Text>
            </Flex>
        </Flex>
    )
}

export default Card