import { Flex, Text } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi'
import Data from './components/Data';

function App() {
  return (

    <Flex w='100vw' h='100vh' m='auto' direction='column'>
      <Flex borderBottom='1px solid grey' p='.5rem' justifyContent='space-between' alignItems='center'>
        <Flex gap='1rem'>
          <AiOutlineArrowLeft size='1.5rem' cursor='pointer' />
          <Text as='b' fontSize='1.3rem'>Trip 1</Text>
        </Flex>
        <TfiWrite size='1.5rem' cursor='pointer' />
      </Flex>

      <Flex w='100%' bgColor='#fffff0' color='grey' justifyContent='center' alignItems='center'>
        <Text>13 May, 2023</Text>
      </Flex>

      <Data />
    </Flex>

  );
}

export default App;
