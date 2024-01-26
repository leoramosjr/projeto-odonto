import {
    Flex,
    Text,
    Input,
    Button,
    Checkbox,
    CheckboxGroup,
    Stack,
    Radio,
    RadioGroup,
    Switch,
    InputGroup,
    InputRightAddon,
} from "@chakra-ui/react"
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList
} from '@choc-ui/chakra-autocomplete';
import { SetStateAction, useEffect, useState } from "react";

interface NewChargeModalData {
    name: string,
    whats: {
        checked: boolean,
        value: string,
    },
    email: {
        checked: boolean,
        value: string,
    },
    link: {
        checked: boolean,
        value: string,
    },
    plan: string,
    dueDate: string,
    chargeValue: string,
    recurrence: string,
    taxesAndFines: {
        checked: boolean,
        taxes: string,
        fines: string,
    }
}

export default function NewChargeModal() {

    const [searchTerm, setSearchTerm] = useState("")
    const [formData, setFormData] = useState<NewChargeModalData>({
        name: "",
        whats: {
            checked: false,
            value: "",
        },
        email: {
            checked: false,
            value: "",
        },
        link: {
            checked: false,
            value: "",
        },
        plan: "",
        dueDate: "",
        chargeValue: "",
        recurrence: "",
        taxesAndFines: {
            checked: false,
            taxes: "",
            fines: "",
        }
    })

    const names = [
        "Felipe",
        "João",
        "Leonardo",
        "Sophia",
        "Thiago",
    ]

    useEffect(() => {
        console.log("formData: ", formData)
    }, [formData])

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                paddingBottom: '1.5rem',
            }}
            onSubmit={(event) => {
                event.preventDefault()
                console.log('Formulário enviado!')
            }}
        >
            <Flex direction="column" gap="1.3rem">
                <Text>Nome</Text>
                <AutoComplete openOnFocus>
                    <AutoCompleteInput
                        name="name"
                        placeholder='Nome'
                        autoComplete="off"
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
                            setSearchTerm(e.target.value)
                            setFormData({
                                ...formData,
                                name: e.target.value as string
                            })
                        }}
                    />
                    <AutoCompleteList display={names.filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ? "block" : "none"}>
                        {names.map((nome: string) => (
                            <AutoCompleteItem
                                key={nome}
                                value={nome}
                                textTransform="capitalize"
                                onClick={() => {
                                    setSearchTerm(nome)
                                    setFormData({
                                        ...formData,
                                        name: nome
                                    })
                                }}
                            >
                                {nome}
                            </AutoCompleteItem>
                        ))}
                    </AutoCompleteList>
                </AutoComplete>
            </Flex>
            <Flex direction="column" gap="1.3rem">
                <Text>Descrição</Text>
                <Stack spacing={4} direction='row'>
                    <CheckboxGroup
                        onChange={(values: any) => {
                            setFormData({
                                ...formData,
                                whats: {
                                    checked: values.includes("whats"),
                                    value: formData.whats.value
                                },
                                email: {
                                    checked: values.includes("email"),
                                    value: formData.email.value
                                },
                                link: {
                                    checked: values.includes("link"),
                                    value: formData.link.value
                                },
                            })
                        }}
                    >
                        <Checkbox value={"whats"}>WhatsApp</Checkbox>
                        <Checkbox value={"email"}>Email</Checkbox>
                        <Checkbox value={"link"}>Link</Checkbox>
                    </CheckboxGroup>
                </Stack>
            </Flex>
            <Flex
                direction="column"
                gap="1.3rem"
                display={formData.whats.checked ? "flex" : "none"}
            >
                <Text>WhatsApp</Text>
                <Input />
            </Flex>
            <Flex
                direction="column"
                gap="1.3rem"
                display={formData.email.checked ? "flex" : "none"}
            >
                <Text>Email</Text>
                <Input />
            </Flex>
            <Flex direction="column" gap="1.3rem">
                <Text>Data do vencimento</Text>
                <Input type="date"/>
            </Flex>
            <Flex direction="column" gap="1.3rem">
                <Text>Valor</Text>
                <Input />
            </Flex>
            <Flex direction="column" gap="1.3rem">
                <Text>Recorrência</Text>
                <RadioGroup
                    onChange={(value: string) => {
                        setFormData({
                            ...formData,
                            recurrence: value
                        })
                    }}
                    value={formData.recurrence}
                >
                <Stack
                    direction='row'
                    display='flex'
                    w='100%'
                    justifyContent='space-between'
                >
                    <Radio value='single'>Cobrança Única</Radio>
                    <Radio value='monthly'>Mensal</Radio>
                    <Radio value='semiAnnual'>Semestral</Radio>
                    <Radio value='yearly'>Anual</Radio>
                </Stack>
                </RadioGroup>
            </Flex>
            <Flex direction="column" gap="1.3rem">
                Juros e multa
                <Switch size={"md"} />
            </Flex>
            <Flex direction="column" gap="1.3rem">
                <Text>Juros</Text>
                <InputGroup>
                    <Input />
                    <InputRightAddon children="%" />
                </InputGroup>
            </Flex>
            <Flex direction="column" gap="1.3rem">
                <Text>Multa</Text>
                <InputGroup>
                    <Input />
                    <InputRightAddon children="%" />
                </InputGroup>
            </Flex>
            <Button
                type="submit"
                mt="1.5rem"
                w="100%"
                h="2.5rem"
                borderRadius="0.5rem"
                bg="#365DF0"
                color="white"
                _hover={{
                    bg: "#2F55CC"
                }}
            >
                Criar cobrança
            </Button>
        </form>
    )
}