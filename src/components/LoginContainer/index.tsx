import {
    Flex,
    Text,
    Button,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
} from '@chakra-ui/react'
import { FiMail, FiLock } from 'react-icons/fi'
import { useState } from 'react'

export default function LoginContainer() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginAsClient, setLoginAsClient] = useState(true)

    return (
        <Flex
            maxH="23.75rem"
            w="30rem"
            direction="column"
            align="center"
            gap="1.19rem"
            pt="1.87rem"
            px="3.75rem"
            pb="1.81rem"
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
                lineHeight="2.875rem"
            >
                Bem Vindo
            </Text>
            <form
                className="flex flex-col gap-6 w-full"
                onSubmit={(event) => {
                    event.preventDefault()
                    console.log('Formulário enviado!')
                }}
            >
                <Flex direction="column" gap="0.5rem" >
                    <Text className="text-xs">
                        Email
                    </Text>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' color="#87909E">
                                <FiMail size={20} />
                            </InputLeftElement>
                    
                            <Input
                                type="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                w="100%"
                                h="2.5rem"
                                border="solid 1px #D6D9DE"
                                borderRadius="0.5rem"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </InputGroup>
                </Flex>
                <Flex direction="column" gap="0.5rem" display={loginAsClient ? "flex" : "none"}>
                    <Text className="text-xs">
                        Senha
                    </Text>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' color="#87909E">
                                <FiLock size={20} />
                            </InputLeftElement>
                    
                            <Input
                                type="password"
                                name="password"
                                placeholder="Digite sua senha"
                                w="100%"
                                h="2.5rem"
                                border="solid 1px #D6D9DE"
                                borderRadius="0.5rem"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                            />

                            <InputRightElement hidden={!(password === "")} w="auto" pr="0.75rem">
                                <Text
                                    w="100%"
                                    color="#3B82F6"
                                    fontSize="0.75rem"
                                    lineHeight="1.125rem"
                                    cursor="pointer"
                                    transition="all 0.1s ease-in-out"
                                    _hover={{
                                        textDecoration: 'underline',
                                        color: '#1E40AF',
                                    }}
                                >
                                    Esqueceu sua senha?
                                </Text>
                            </InputRightElement>
                        </InputGroup>
                </Flex>
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
                >
                    Login
                </Button>
            </form>
            <Flex
                w="100%"
                justify="center"
                align="center"
            >
                <Text
                    color="#3B82F6"
                    fontSize="1rem"
                    lineHeight="1.125rem"
                    cursor="pointer"
                    transition="all 0.1s ease-in-out"
                    _hover={{
                        textDecoration: 'underline',
                        color: '#1E40AF',
                    }}
                    onClick={() => {
                        setLoginAsClient(!loginAsClient)
                    }}
                >
                    Entrar como {loginAsClient ? 'Cliente' : 'Prestador de Serviço'}
                </Text>
            </Flex>
        </Flex>
    )
}