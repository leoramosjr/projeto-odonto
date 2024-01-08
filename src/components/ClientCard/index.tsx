import {
    Flex,
    Text,
    Button,
    Divider,
} from '@chakra-ui/react'
import { FiPhone, FiMail } from "react-icons/fi";

export default function ClientCard() {
    return (
        <Flex
            w="100%"
            maxW="14.875rem"
            h="100%"
            maxH="16.8125rem"
            align="center"
            direction="column"
            bg="white"
            p="1rem 1.63rem 1.56rem"
            borderRadius="0.50656rem"
            justify="space-between"
        >
            <Flex
                w="2.375rem"
                h="2.375rem"
                bg="#A8D7E5"
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
                    FS
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
                Fulano da Silva
            </Text>
            <Flex textAlign="center" w="100%" direction="column" align="center" fontSize="0.6rem">
                <Text>Proximo pagamento</Text>
                <Text color="#00A868">11/02/2024</Text>
            </Flex>
            <Flex textAlign="center" w="100%" direction="column" align="center" fontSize="0.6rem">
                <Text>Último pagamento</Text>
                <Text color="#0075EB">11/01/2024</Text>
            </Flex>
            <Flex gap="1.25rem" justify="center">
                <Flex
                    h="2.5rem"
                    w="5.1rem"
                    justify="center"
                    align="center"
                    direction="column"
                    borderRadius="0.375rem"
                    boxShadow="0px 4px 4px 0px rgba(53, 53, 53, 0.12)"
                    textAlign="center"
                >
                    <Text color="#8F8EA6" fontSize="0.75rem">Recorrência</Text>
                    <Flex
                        align="center"
                        gap="0.25rem"
                        justify="center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9.5 9.5H2.5V4H9.5M8 0.5V1.5H4V0.5H3V1.5H2.5C1.945 1.5 1.5 1.945 1.5 2.5V9.5C1.5 9.76522 1.60536 10.0196 1.79289 10.2071C1.98043 10.3946 2.23478 10.5 2.5 10.5H9.5C9.76522 10.5 10.0196 10.3946 10.2071 10.2071C10.3946 10.0196 10.5 9.76522 10.5 9.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H9V0.5M8.5 6H6V8.5H8.5V6Z" fill="url(#paint0_linear_316_229)"/>
                            <defs>
                                <linearGradient id="paint0_linear_316_229" x1="17.3776" y1="20.0336" x2="1.72357" y2="18.2706" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#000A17" stopOpacity="0.58"/>
                                    <stop offset="0.385478" stopColor="#004286"/>
                                    <stop offset="1" stopColor="#0075EB"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <Text
                            fontSize="0.75rem"
                            fontWeight="400"
                            color="#0075EB"
                            letterSpacing="0.00644rem"
                            lineHeight="1rem"
                        >
                            6 meses
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    h="2.5rem"
                    w="5.1rem"
                    justify="center"
                    align="center"
                    direction="column"
                    borderRadius="0.375rem"
                    boxShadow="0px 4px 4px 0px rgba(53, 53, 53, 0.12)"
                    textAlign="center"
                >
                    <Text color="#8F8EA6" fontSize="0.75rem">Valor</Text>
                    <Flex
                        align="center"
                        gap="0.25rem"
                        justify="center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <g clipPath="url(#clip0_316_234)">
                                <path d="M6.75391 6.02148C6.79701 6.37658 6.70174 6.70078 6.47836 6.95898C6.2209 7.25668 5.79623 7.45744 5.3125 7.51758V7.86328C5.3125 7.94616 5.27958 8.02565 5.22097 8.08425C5.16237 8.14286 5.08288 8.17578 5 8.17578C4.91712 8.17578 4.83763 8.14286 4.77903 8.08425C4.72042 8.02565 4.6875 7.94616 4.6875 7.86328V7.51293C3.96707 7.40678 3.4082 6.94684 3.24518 6.29273C3.23525 6.25291 3.23326 6.21153 3.23933 6.17094C3.24539 6.13035 3.2594 6.09136 3.28053 6.05618C3.30167 6.02101 3.32953 5.99034 3.36252 5.96593C3.39551 5.94152 3.43298 5.92384 3.4728 5.91392C3.51262 5.90399 3.55401 5.902 3.5946 5.90807C3.63518 5.91413 3.67418 5.92814 3.70935 5.94927C3.74453 5.97041 3.7752 5.99827 3.79961 6.03126C3.82402 6.06425 3.84169 6.10172 3.85162 6.14154C3.99762 6.72707 4.58934 6.92201 5.05164 6.91086C5.44986 6.90139 5.8243 6.75982 6.00557 6.55023C6.11346 6.42547 6.15527 6.27719 6.13338 6.09686C6.08104 5.66566 5.71713 5.41744 4.95348 5.29217C3.70273 5.0868 3.41137 4.44945 3.38719 3.95094C3.35365 3.26035 3.83615 2.68182 4.58785 2.51133C4.62057 2.50391 4.65389 2.49766 4.68746 2.49197V2.13672C4.68746 2.05384 4.72039 1.97435 4.77899 1.91575C4.8376 1.85714 4.91708 1.82422 4.99996 1.82422C5.08284 1.82422 5.16233 1.85714 5.22093 1.91575C5.27954 1.97435 5.31246 2.05384 5.31246 2.13672V2.48916C5.841 2.57314 6.35943 2.88344 6.6202 3.50447C6.65074 3.58059 6.65013 3.66566 6.61851 3.74133C6.58689 3.817 6.52679 3.87721 6.45117 3.90897C6.37556 3.94072 6.29049 3.94148 6.21432 3.91108C6.13815 3.88067 6.07699 3.82154 6.04402 3.74645C5.84625 3.27539 5.42098 3.08629 5.01209 3.08824C5.00807 3.0884 5.00412 3.08887 5.00006 3.08887C4.99779 3.08887 4.99561 3.08857 4.99336 3.08852C4.90343 3.09019 4.81389 3.10101 4.72615 3.12082C4.36586 3.20254 3.98891 3.45555 4.0115 3.92061C4.02377 4.17312 4.14523 4.52607 5.0548 4.67539C5.4949 4.74766 5.82252 4.85535 6.08582 5.01434C6.47656 5.2502 6.70133 5.5891 6.75391 6.02148ZM10 5C10 7.75703 7.75701 10 5 10C2.24299 10 0 7.75703 0 5C0 2.24297 2.24297 0 5 0C7.75703 0 10 2.24297 10 5ZM9.375 5C9.375 2.5876 7.4124 0.625 5 0.625C2.5876 0.625 0.625 2.5876 0.625 5C0.625 7.4124 2.5876 9.375 5 9.375C7.4124 9.375 9.375 7.4124 9.375 5Z" fill="#00A868"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_316_234">
                                    <rect width="10" height="10" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <Text
                            fontSize="0.75rem"
                            fontWeight="400"
                            color="#11C76F"
                            letterSpacing="0.00644rem"
                            lineHeight="1rem"
                        >
                            R$200,00
                        </Text>
                    </Flex>
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
                    maxW="4.7rem"
                    h="1.625rem"
                    leftIcon={<FiMail size={16} />}
                    fontSize="0.60463rem"
                    bg="transparent"
                >
                    Email
                </Button>
                <Divider orientation="vertical" h="1.375rem" />
                <Button
                    w="100%"
                    maxW="4.7rem"
                    h="1.625rem"
                    leftIcon={<FiPhone size={16} />}
                    fontSize="0.60463rem"
                    bg="transparent"
                >
                    Telefone
                </Button>
            </Flex>
        </Flex>
    )
}