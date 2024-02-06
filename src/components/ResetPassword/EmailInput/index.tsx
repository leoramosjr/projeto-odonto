import {
    Flex,
    Text,
    Button,
    InputLeftElement,
} from '@chakra-ui/react'
import Input from '../../base/Input'
import { FiMail } from 'react-icons/fi'

export default function EmailInput({
    setSection,
    setIsNewPassword,
} : {
    setSection: Function
    setIsNewPassword: Function
}) {
    return (
        <form
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "0 2.5rem",
            }}
            onSubmit={(event) => {
                event.preventDefault()
                setSection(1)
            }}
        >
            <Text textAlign="center">
                Enviaremos para o seu email um link de acesso
            </Text>
            <Input
                display={true}
                name="email"
                label="Email"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(value: string) => console.log(value)}
                leftChildren={
                    <InputLeftElement pointerEvents='none' color="#87909E">
                        <FiMail size={20} />
                    </InputLeftElement>
                }
            />
            <Flex w="100%" gap="1.5rem">
                <Button
                    w="100%"
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => setIsNewPassword(false)}
                >
                    Voltar
                </Button>
                <Button
                    type="submit"
                    w="100%"
                    bg="#3B82F6"
                    color="white"
                    fontWeight="bold"
                    fontSize="0.875rem"
                    lineHeight="1.25rem"
                    transition="all 0.1s ease-in-out"
                    _hover={{
                        bg: '#1E40AF',
                    }}
                    onClick={() => setSection(1)}
                >
                    Continuar
                </Button>
            </Flex>
        </form>
    )
}