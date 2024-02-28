import {
    Flex,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Stack,
    Radio,
    RadioGroup,
    Switch,
    InputRightAddon,
    Tooltip,
} from "@chakra-ui/react"
import { useState } from "react";
import Input from "../base/Input";
import Autocomplete from "../base/Autocomplete";
import Select from "../base/Select";
import ClientCardData from "../../pages/Provider/ProviderClients";

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
};

interface ClientCardData {
    id: number,
    name: string,
    email: string,
    age: number,
    celphone: string,
    address: string,
    lastPayment: string,
    nextPayment: string,
    price: number,
    recurrence: string,
    plan: string,
    status: string
}

export default function NewChargeModal({
    onClose,
    data,
} : {
    onClose: Function
    data: ClientCardData[]
}) {

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

    const names = data.map((client) => client.name)

    const plans = [
        "Plano 1",
        "Plano 2",
        "Plano 3",
        "Plano 4",
        "Plano 5",
    ]

    const [hasTaxesAndFines, setHasTaxesAndFines] = useState(false)

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
                console.log('Formulário: ', formData)
            }}
        >
            <Autocomplete
                label="Cliente"
                type="text"
                placeholder="Nome do cliente"
                value={formData.name}
                onChange={(value: string) => setFormData({...formData, name: value})}
                optionsList={names}
            />
            <Flex direction="column" gap="0.5rem">
                <Text
                    fontSize="0.75rem"
                    color="#828282"
                >Descrição</Text>
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
            <Input
                name="whats"
                display={formData.whats.checked}
                label="WhatsApp"
                type="text"
                value={formData.whats.value}
                onChange={(value: string) => setFormData({...formData, whats: {checked: formData.whats.checked, value: value}})}
            />
            <Input
                name="email"
                display={formData.email.checked}
                label="Email"
                type="email"
                value={formData.email.value}
                onChange={(value: string) => setFormData({...formData, email: {checked: formData.email.checked, value: value}})}
            />
            <Select
                name="plan"
                label="Plano"
                value={formData.plan}
                onChange={(value: string) => setFormData({...formData, plan: value})}
                optionsList={plans}
            />
            <Input
                name="dueDate"
                label="Data do vencimento"
                type="date"
                value={formData.dueDate}
                onChange={(value: string) => setFormData({...formData, dueDate: value})}
            />
            <Input
                name="chargeValue"
                label="Valor"
                type="number"
                placeholder="R$"
                value={formData.chargeValue}
                onChange={(value: string) => setFormData({...formData, chargeValue: value})}
            />
            <Flex direction="column" gap="0.5rem">
                <Text
                    fontSize="0.75rem"
                    color="#828282"
                    bgColor="white"
                >Recorrência</Text>
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
            <Flex direction="column" gap="0.5rem" w="fit-content">
                Juros e multa
                <Switch
                    size={"md"}
                    onChange={() => {
                        setHasTaxesAndFines(!hasTaxesAndFines)
                        setFormData({
                            ...formData,
                            taxesAndFines: {
                                checked: !hasTaxesAndFines,
                                taxes: formData.taxesAndFines.taxes,
                                fines: formData.taxesAndFines.fines
                            }
                        })
                    }}
                />
            </Flex>
            <Input
                name="taxes"
                display={hasTaxesAndFines}
                label="Juros"
                type="number"
                value={formData.taxesAndFines.taxes}
                onChange={(value: string) => setFormData({...formData, taxesAndFines: {checked: formData.taxesAndFines.checked, taxes: value, fines: formData.taxesAndFines.fines}})}
                rightChildren={
                    <Tooltip
                        maxW="18rem"
                        placement="right"
                        color="black"
                        bg="white"
                        borderRadius="0.5rem"
                        p="1rem"
                        label="A cobrança do juros é calculada diariamente apos o atraso do pagante através da fórmula (DA * (juros/30)), sendo DA os dias de atraso"
                        aria-label="A tooltip"
                    >
                        <InputRightAddon cursor="default" color={hasTaxesAndFines ? "#1A202C" : "#bdc2cd"} children="%" />
                    </Tooltip>
                }
            />
            <Input
                name="fines"
                display={hasTaxesAndFines}
                label="Multa"
                type="number"
                value={formData.taxesAndFines.fines}
                onChange={(value: string) => setFormData({...formData, taxesAndFines: {checked: formData.taxesAndFines.checked, taxes: formData.taxesAndFines.taxes, fines: value}})}
                rightChildren={
                    <Tooltip
                        maxW="18rem"
                        placement="right"
                        color="black"
                        bg="white"
                        borderRadius="0.5rem"
                        p="1rem"
                        label="Campo numérico em percentual que representa a multa aplicada ao pagante ao atrasar o pagamento da cobrança"
                        aria-label="A tooltip"
                    >
                        <InputRightAddon cursor="default" color={hasTaxesAndFines ? "#1A202C" : "#bdc2cd"} children="%" />
                    </Tooltip>
                }
            />
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
                onClick={() => onClose()}
            >
                Criar cobrança
            </Button>
        </form>
    )
}