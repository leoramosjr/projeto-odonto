import {
    Flex,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function RegisterContainer() {

    const [section, setSection] = useState(0)    

    return (
        <Flex
            mt="2.25rem"
            w="35.625rem"
            h="100%"
            direction="column"
            align="center"
            gap="2rem"
            pt="3.25rem"
            bg="white"
            borderRadius="0.75rem"
            zIndex="10"
            boxShadow="0px 24px 64px 0px rgba(38, 33, 74, 0.10)"
            color="#292D34"
        >
            <Text
                w="100%"
                textAlign="center"
                fontSize="2rem"
                fontWeight="bold"
                lineHeight="1.73794rem"
            >
                {
                    section === 0 ? 'Registro' :
                    section === 1 ? 'Validação' :
                    'Criar Senha'
                }
            </Text>
        </Flex>
    )
}