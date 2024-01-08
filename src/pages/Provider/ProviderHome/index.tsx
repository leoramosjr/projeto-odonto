import {
    Flex,
    Text,
    Input,
    Button,
} from '@chakra-ui/react'
import { FiPlus } from "react-icons/fi";
import ClientCard from '../../../components/ClientCard'

export default function ProviderHome() {
    return (
        <Flex
            w="100%"
            h="100%"
            direction="column"
            gap="2rem"
        >
            <Flex
                w="100%"
                align="center"
                gap="1.5rem"
            >
                <Flex
                    w="31.25rem"
                    h="16.125rem"
                    align="center"
                    justify="center"
                    boxShadow="0px 4px 4px 0px rgba(140, 140, 140, 0.13)"
                    borderRadius="0.75rem"
                    bg="white"
                    p="1rem"
                    textAlign="center"
                >
                    Alguma informação útil aqui
                </Flex>
                <Flex
                    w="31.25rem"
                    h="16.125rem"
                    align="center"
                    justify="center"
                    boxShadow="0px 4px 4px 0px rgba(140, 140, 140, 0.13)"
                    borderRadius="0.75rem"
                    bg="white"
                    p="1rem"
                    textAlign="center"
                >
                    Alguma informação útil aqui
                </Flex>
                <Flex
                    w="31.25rem"
                    h="16.125rem"
                    align="center"
                    justify="center"
                    boxShadow="0px 4px 4px 0px rgba(140, 140, 140, 0.13)"
                    borderRadius="0.75rem"
                    bg="white"
                    p="1rem"
                    textAlign="center"
                >
                    Alguma informação útil aqui
                </Flex>
            </Flex>
            <Flex
                w="100%"
                align="center"
                justify="space-between"
                gap="1rem"
            >
                <Flex align="center" gap="1rem" w="100%">
                    <Text
                        fontSize="1.5rem"
                        fontWeight="500"
                        fontFamily="Dm Sans"
                    >
                        Clientes
                    </Text>
                    <Input
                        w="100%"
                        maxW="30.5rem"
                        h="2.25rem"
                        border="solid 1px #D6D9DE"
                        borderRadius="0.5rem"
                        placeholder="Pesquisar"
                        background="white"
                        _active={{
                            border: 'solid 1px #D6D9DE',
                        }}
                        _focus={{
                            border: 'solid 1px #D6D9DE',
                        }}
                    />
                </Flex>
                <Button
                    leftIcon={<FiPlus />}
                    bg="#3B82F6"
                    color="white"
                    fontWeight="bold"
                    fontSize="0.875rem"
                    lineHeight="1.25rem"
                    transition="all 0.1s ease-in-out"
                    px="1.5rem"
                    _hover={{
                        bg: '#1E40AF',
                    }}
                >
                    Nova Cobrança
                </Button>
            </Flex>
            <Flex
                overflowX="auto"
                w="100%"
                align="flex-start"
                justify="flex-start"
                flexWrap="wrap"
                gap="1rem"
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((e) => (
                        <ClientCard key={e} />
                    ))
                }
            </Flex>
        </Flex>
    )
}