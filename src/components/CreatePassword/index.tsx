import {
    Button,
    Flex,
    InputLeftElement,
} from '@chakra-ui/react'
import Input from '../base/Input'
import { FiLock } from 'react-icons/fi'

export default function CreatePassword() {

    return (
        <Flex
            w="100%"
            h="80%"
            direction="column"
            align="center"
            px="2.5rem"
            gap="1rem"
        >
            <form
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
                onSubmit={(event) => {
                    event.preventDefault()
                    console.log('Formulário enviado!')
                    window.location.href = '/provider'
                }}
            >
                <Input
                    name="password"
                    type="password"
                    label="Nova senha"
                    placeholder="Digite sua nova senha"
                    onChange={(e: { target: { value: any } }) => console.log(e.target.value)}
                    leftChildren={
                        <InputLeftElement pointerEvents='none' color="#87909E">
                            <FiLock size={20} />
                        </InputLeftElement>
                    }
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    label="Confirmar senha"
                    placeholder="Confirme a senha digitada"
                    onChange={(e: { target: { value: any } }) => console.log(e.target.value)}
                    leftChildren={
                        <InputLeftElement pointerEvents='none' color="#87909E">
                            <FiLock size={20} />
                        </InputLeftElement>
                    }
                />
                <Button
                    type="submit"
                    w="100%"
                    colorScheme="blue"
                    variant="solid"
                >
                    Criar senha
                </Button>
            </form>
        </Flex>
    )
}