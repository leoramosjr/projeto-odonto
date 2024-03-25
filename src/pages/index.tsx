import {
    Flex,
    Text,
} from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'

export default function Provider({
    children,
} : {
    children?: React.ReactNode
}) {

    return (
        <Flex
            maxW="100vw"
            minH="100vh"
            bg="#FCFCFC"
            p="2rem 1.5rem 2rem 6.5rem"
            direction="column"
        >
            <Sidebar />
            <Flex
                w="100%"
                minH="calc(100vh - 4rem)"
                bg="white"
                borderRadius="0.5rem"
                boxShadow="7px 4px 18.4px 0px rgba(0, 107, 215, 0.15)"
                p="2rem 1.5rem 4rem 1.5rem"
                direction="column"
                justify="flex-start"
                align="center"
                gap="2rem"
            >
                <Flex
                    w="100%"
                    align="center"
                >
                    <Text
                        fontSize="1.65rem"
                        fontWeight="600"
                        fontFamily="Dm Sans"
                    >
                        Dra. Natália Rossoni
                    </Text>
                </Flex>
                {children}
            </Flex>
        </Flex>
    )
}