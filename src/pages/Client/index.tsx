import {
    Flex,
} from '@chakra-ui/react'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'

export default function Client() {

    const [section, setSection] = useState(0)

    return (
        <Flex
            w="100vw"
            h="100vh"
            justify="center"
            align="center"
            bg="#FCFCFC"
            p="2rem 1.5rem 1rem 6.5rem"
        >
            <Sidebar
                section={section}
                setSection={setSection}
            />
            Client
        </Flex>
    )
}