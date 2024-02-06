import {
    Flex,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import EmailValidation from '../EmailValidation'
import CreatePassword from '../CreatePassword'
import EmailInput from './EmailInput'

export default function ResetPassword({
    setIsNewPassword,
} : {
    setIsNewPassword: Function
}) {

    const [section, setSection] = useState(0)    

    return (
        <Flex
            mt="2.25rem"
            w="30rem"
            h="fit-content"
            direction="column"
            align="center"
            gap="2rem"
            pt="3.25rem"
            pb="3.25rem"
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
                    section === 0 ? 'Recuperação de Senha' :
                    section === 1 ? 'Validação' :
                    'Nova Senha'
                }
            </Text>
            {
                section === 0 ? <EmailInput setIsNewPassword={setIsNewPassword} setSection={setSection} /> :
                section === 1 ? <EmailValidation setSection={setSection} /> :
                <CreatePassword />
            }
        </Flex>
    )
}