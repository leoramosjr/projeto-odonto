import {
    Button,
    Flex,
    Switch,
    Text,
} from '@chakra-ui/react'
import Input from '../../base/Input'
import Select from '../../base/Select'
import { useState } from 'react'

export default function Register({
    setSection,
    setIsRegister,
} : {
    setSection: Function,
    setIsRegister: Function,
}) {

    const [isCNPJ, setIsCNPJ] = useState(false)

    return (
        <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            px="1.25rem"
            gap="1.25rem"
        >
            <Flex w="100%">
                <Text
                    fontSize="1rem"
                    fontWeight="700"
                    fontFamily="'Open Sans', sans-serif"
                >Informações Pessoais</Text>
            </Flex>
            <form
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                }}
            >
                <Flex gap="1rem">
                    <Input
                        label="Nome Completo"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(value: string) => console.log(value)}
                    />
                    <Input
                        label="Telefone"
                        type="number"
                        placeholder="Digite seu telefone"
                        onChange={(value: string) => console.log(value)}
                    />
                </Flex>
                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    onChange={(value: string) => console.log(value)}
                />
                <Flex gap="0.5rem" w="fit-content" align="center">
                    CPF
                    <Switch
                        size={"md"}
                        colorScheme="blue"
                        onChange={() => setIsCNPJ(!isCNPJ)}
                    />
                    CNPJ
                </Flex>
                <Input
                    label={isCNPJ ? "CNPJ" : "CPF"}
                    type="number"
                    placeholder={isCNPJ ? "Digite seu CNPJ" : "Digite seu CPF"}
                    onChange={(value: string) => console.log(value)}
                />
                <Flex gap="1rem">
                    {
                        isCNPJ ? (
                            <Select
                                label="Tipo de empresa"
                                placeholder="Selecione o tipo de empresa"
                                optionsList={["MEI", "ME", "EIRELI", "LTDA", "SA"]}
                                onChange={(value: string) => console.log(value)}
                            />
                        ) : (
                            <Input
                                label="Data de Nascimento"
                                type="date"
                                onChange={(value: string) => console.log(value)}
                            />
                        )
                    }
                    <Input
                        label="CEP"
                        type="number"
                        placeholder="Digite seu CEP"
                        onChange={(value: string) => console.log(value)}
                    />
                </Flex>
                <Input
                    label="Endereço"
                    type="Text"
                    placeholder="Digite seu endereço"
                    onChange={(value: string) => console.log(value)}
                />
                <Flex gap="1rem">
                    <Input
                        label="Cidade"
                        type="Text"
                        placeholder="Digite sua cidade"
                        onChange={(value: string) => console.log(value)}
                    />
                    <Input
                        label="Estado"
                        type="text"
                        placeholder="Digite o seu estado"
                        onChange={(value: string) => console.log(value)}
                    />
                </Flex>
                <Flex gap="1rem">
                    <Input
                        label="Número"
                        type="number"
                        placeholder="Digite o número"
                        onChange={(value: string) => console.log(value)}
                    />
                    <Input
                        label="Complemento"
                        type="text"
                        placeholder="Digite o complemento"
                        onChange={(value: string) => console.log(value)}
                    />
                </Flex>
                <Flex pt="1rem" gap="1rem">
                    <Button
                        type="submit"
                        w="100%"
                        colorScheme="blue"
                        variant="outline"
                        onClick={() => setIsRegister(false)}
                    >
                        Voltar
                    </Button>
                    <Button
                        type="submit"
                        w="100%"
                        colorScheme="blue"
                        variant="solid"
                        onClick={() => setSection(1)}
                    >
                        Continuar
                    </Button>
                </Flex>
            </form>
        </Flex>
    )
}