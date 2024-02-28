import {
    Flex,
    Text,
    Button,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react'
import Input from '../base/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { useState } from 'react'

export default function LoginContainer({
    setIsRegister,
    setIsNewPassword,
    isRegister,
    loginAsClient,
} : {
    setIsRegister: Function,
    setIsNewPassword: Function,
    isRegister: boolean,
    loginAsClient: boolean,
}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    window.location.href = '/provider/home'
                }}
            >
                <Input
                    display={true}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(value: string) => setEmail(value)}
                    leftChildren={
                        <InputLeftElement pointerEvents='none' color="#87909E">
                            <FiMail size={20} />
                        </InputLeftElement>
                    }
                />
                <Input
                    display={!loginAsClient}
                    name="password"
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(value: string) => setPassword(value)}
                    leftChildren={
                        <InputLeftElement pointerEvents='none' color="#87909E">
                            <FiLock size={20} />
                        </InputLeftElement>
                    }
                    rightChildren={
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
                                onClick={() => {
                                    setIsNewPassword(true)
                                }}
                            >
                                Esqueceu sua senha?
                            </Text>
                        </InputRightElement>
                    }
                />
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
                display={!loginAsClient ? "flex" : "none"}
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
                        setIsRegister(!isRegister)
                    }}
                >
                    Não tem uma conta? Criar uma conta
                </Text>
            </Flex>
        </Flex>
    )
}