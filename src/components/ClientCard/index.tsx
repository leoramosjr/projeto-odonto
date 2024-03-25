import {
    Flex,
    Text,
    Button,
    Divider,
} from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";

export default function ClientCard({
    onCardClick,
    name,
    lastPayment,
    nextPayment,
} : {
    onCardClick: Function
    name: string,
    lastPayment: string,
    nextPayment: string,
    price: number,
    recurrence: string,
    plan: string,
}) {
    
    return (
        <Flex
            w="100%"
            maxW="13rem"
            h="18rem"
            align="center"
            direction="column"
            bg="#FCFCFC"
            p="1rem 1.63rem 1.56rem"
            borderRadius="0.50656rem"
            justify="space-between"
            border="1px solid #E5E5E5"
            cursor="pointer"
            onClick={() => onCardClick()}
            transition="0.2s"
            _hover={{
                boxShadow: "0px 4px 4px 0px rgba(53, 53, 53, 0.12)",
                bg: "#FFF"
            }}
        >
            <Flex
                w="2.375rem"
                h="2.375rem"
                bg="#066964"
                borderRadius="50%"
                justify="center"
                align="center"
            >
                <Text
                    fontSize="1rem"
                    fontWeight="600"
                    fontFamily="Dm Sans"
                    color="white"
                    letterSpacing="0.00644rem"
                    lineHeight="1.6rem"
                    textAlign="center"
                >
                    {name[0] + name.split(" ")[1][0]}
                </Text>
            </Flex>
            <Text
                fontSize="1.10525rem"
                fontWeight="700"
                fontFamily="Dm Sans"
                color="#333333"
                letterSpacing="0.00644rem"
                lineHeight="1.6rem"
                textAlign="center"
            >
                {name}
            </Text>
            <Flex textAlign="center" w="100%" direction="column" align="center" fontSize="0.6rem">
                <Text>Última Consulta</Text>
                <Text color="#00A868">
                    {new Intl.DateTimeFormat('pt-BR').format(new Date(nextPayment))}
                </Text>
            </Flex>
            <Flex textAlign="center" w="100%" direction="column" align="center" fontSize="0.6rem">
                <Text>Próxima Consulta</Text>
                <Text color="#0075EB">
                    {new Intl.DateTimeFormat('pt-BR').format(new Date(lastPayment))}
                </Text>
            </Flex>
            <Flex
                h="2.5rem"
                w="8.5rem"
                justify="center"
                align="center"
                direction="column"
                borderRadius="0.375rem"
                boxShadow="0px 4px 4px 0px rgba(53, 53, 53, 0.12)"
                textAlign="center"
            >
                <Text color="#8F8EA6" fontSize="0.75rem">Consultas</Text>
                <Flex
                    align="center"
                    gap="0.25rem"
                    justify="center"
                >
                    <Text
                        fontSize="0.75rem"
                        fontWeight="400"
                        color="#11C76F"
                        letterSpacing="0.00644rem"
                        lineHeight="1rem"
                    >
                        Mensais
                    </Text>
                </Flex>
            </Flex>
            <Flex
                w="100%"
                justify="center"
                align="center"
                gap="1rem"
            >
                <Button
                    w="100%"
                    h="1.625rem"
                    leftIcon={<FiMail size={22} />}
                    fontSize="0.60463rem"
                    bg="transparent"
                >
                    Copiar Email
                </Button>
                <Divider orientation="vertical" h="1.375rem" />
                <Button
                    w="100%"
                    h="1.625rem"
                    leftIcon={<FaWhatsapp size={22} />}
                    fontSize="0.60463rem"
                    bg="transparent"
                >
                    WhatsApp
                </Button>
            </Flex>
        </Flex>
    )
}