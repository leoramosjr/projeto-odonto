import {
    Flex,
} from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';

export default function Test(){

    const [section, setSection] = useState(0)

    return (
        <Flex
            maxW="100vw"
            minH="100vh"
            bg="#FCFCFC"
            p="2rem 1.5rem 2rem 6.5rem"
            direction="column"
        >
            <Sidebar
                section={section}
                setSection={setSection}
            />
        </Flex>
    )
}