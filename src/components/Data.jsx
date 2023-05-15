import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { getData } from '../utils/api';
import Card from './Card';

const Data = () => {
    const [data, setMsg] = useState([]);

    useEffect(() => {
        const handleGetData = () => {
            getData()
                .then(res => setMsg(res.chats)).catch(err => console.log(err));
        }
        handleGetData()
    }, [])

    return (
        <>
            <Flex h='100%' w='100%' gap='2rem' bgColor='#fffff0' direction='column' overflow='scroll'>
                {data?.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </Flex>
        </>
    )
}

export default Data