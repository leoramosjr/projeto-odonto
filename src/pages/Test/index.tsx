import {
    Flex,
    // Tooltip,
    Text,
    Button,
    Divider,
} from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import { FiPlus, FiMail, FiCalendar, FiPhone, FiMapPin, FiRefreshCw, FiClipboard, FiLayout, FiLogIn, FiLogOut, FiDollarSign } from 'react-icons/fi';
import CardSingleData from '../../components/CardSingleData';

export default function Test(){

    const [section, setSection] = useState(0)
    return (
        <Flex
            maxW="100vw"
            minH="100vh"
            bg="#FCFCFC"
            p="2rem 1.5rem 2rem 6.5rem"
            direction="column"
        >
            <Sidebar
                section={section}
                setSection={setSection}
            />
            <Flex
                w="100%"
                minH="calc(100vh - 4rem)"
                bg="white"
                borderRadius="0.5rem"
                boxShadow="7px 4px 18.4px 0px rgba(0, 107, 215, 0.15)"
                p="2rem 1.5rem 4rem 1.5rem"
                direction="column"
                justify="flex-start"
                align="center"
                gap="1.5rem"
            >
                <Flex
                    w="100%"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center">
                        <Text
                            fontSize="1.65rem"
                            fontWeight="600"
                            fontFamily="Dm Sans"
                        >
                            Leonardo Severo Furini
                        </Text>
                        {/* <Tooltip
                            placement="right-end"
                            color="black"
                            bg="white"
                            borderRadius="0.5rem"
                            px="1rem"
                            py="1rem"
                            maxW="16rem"
                            label={tooltipChildren()}
                            aria-label="A tooltip"
                            closeOnClick={false}
                        >
                            <img
                                src={isVerifyed ? Verifyed : NotVerifyed}
                                alt="verifyed"
                                style={{marginLeft: "1rem"}}
                                draggable="false"
                                onClick={() => setIsVerifyed(!isVerifyed)}
                            />
                        </Tooltip> */}
                    </Flex>
                    <Button
                        leftIcon={<FiPlus />}
                        bg="#3B82F6"
                        color="white"
                        fontWeight="bold"
                        fontSize="0.875rem"
                        lineHeight="1.25rem"
                        transition="all 0.1s ease-in-out"
                        px="1.5rem"
                        _hover={{
                            bg: '#1E40AF',
                        }}
                    >
                        Nova Cobrança
                    </Button>
                </Flex>
                <Flex
                    h="280px"
                    w="100%"
                    align="flex-start"
                    justify="flex-start"
                    gap="2rem"
                >
                    <Flex
                        bg="#FCFCFC"
                        border="1px solid #E5E5E5"
                        w="20rem"
                        p="1rem"
                        direction="column"
                        gap="1rem"
                        borderRadius="0.75rem"
                        h="100%"
                        boxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0.01), 2px 2px 6px 0px rgba(0, 0, 0, 0.01), 7px 9px 11px 0px rgba(0, 0, 0, 0.01), 16px 20px 15px 0px rgba(0, 0, 0, 0.01), 28px 36px 18px 0px rgba(0, 0, 0, 0.00), 44px 56px 20px 0px rgba(0, 0, 0, 0.00)"
                    >
                        <Text
                            fontSize="1.5rem"
                            fontWeight="600"
                            fontFamily="Dm Sans"
                            color="#313131"
                            ml="-1.1rem"
                            pl="1.1rem"
                            borderLeft="4px solid #0075EB"
                        >
                            Informações da Conta
                        </Text>
                        <Flex
                            w="100%"
                            align="center"
                            gap="1rem"    
                        >
                            <CardSingleData
                                icon={<FiMail />}
                                title="Email"
                                info="leo.ramosjr@gmail.com"
                            />
                            <CardSingleData
                                icon={<FiCalendar />}
                                title="Idade"
                                info="24 anos"
                            />
                        </Flex>
                        <CardSingleData
                            icon={<FiPhone  />}
                            title="Telefone"
                            info="(51) 99304-3856"
                        />
                        <Divider />
                        <CardSingleData
                            icon={<FiMapPin />}
                            title="Endereço"
                            info="R. Ciclano Fulanilson, 45 Bairro Barão, Porto Alegre, RS"
                        />
                    </Flex>
                    <Flex
                        bg="#FCFCFC"
                        h="100%"
                        border="1px solid #E5E5E5"
                        w="33rem"
                        p="1rem"
                        direction="column"
                        gap="1rem"
                        borderRadius="0.75rem"
                        boxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0.01), 2px 2px 6px 0px rgba(0, 0, 0, 0.01), 7px 9px 11px 0px rgba(0, 0, 0, 0.01), 16px 20px 15px 0px rgba(0, 0, 0, 0.01), 28px 36px 18px 0px rgba(0, 0, 0, 0.00), 44px 56px 20px 0px rgba(0, 0, 0, 0.00)"
                    >
                        <Text
                            fontSize="1.5rem"
                            fontWeight="600"
                            fontFamily="Dm Sans"
                            color="#313131"
                            ml="-1.1rem"
                            pl="1.1rem"
                            borderLeft="4px solid #0075EB"
                        >
                            Informações do Plano
                        </Text>
                        <Flex
                            w="100%"
                            align="center"
                            justify="space-between"
                            gap="2rem"
                        >
                            <CardSingleData
                                icon={<FiLogOut />}
                                title="Último Pagamento"
                                info="11/11/2023"
                            />
                            <Flex w="55%">
                                <CardSingleData
                                    icon={<FiDollarSign />}
                                    title="Valor"
                                    info="R$250,00"
                                    width="50%"
                                />
                                <CardSingleData
                                    icon={<FiClipboard  />}
                                    title="Plano"
                                    info="Combo semanal"
                                    width="50%"
                                />
                            </Flex>
                        </Flex>
                        <Flex
                            w="100%"
                            align="center"
                            justify="space-between"
                            gap="2rem"
                        >
                            <CardSingleData
                                icon={<FiLogIn />}
                                title="Próximo Pagamento"
                                info="09/12/2023"
                            />
                            <Flex w="55%">
                                <CardSingleData
                                    icon={<FiRefreshCw  />}
                                    title="Recorrência"
                                    info="6 meses"
                                    width="50%"
                                />
                                <CardSingleData
                                    icon={<FiLayout  />}
                                    title="Status"
                                    info="60% / 40%"
                                    width="50%"
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}