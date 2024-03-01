import {
    Flex,
    Text,
    Button,
    Divider,
    Table,
    TableContainer,
    Tbody,
    Td,
    Thead,
    Tr,
    Tooltip,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { FiPlus, FiMail, FiCalendar, FiPhone, FiMapPin, FiLogOut, FiDollarSign, FiClipboard, FiLogIn, FiRefreshCw, FiLayout } from 'react-icons/fi';
import CardSingleData from '../../../components/CardSingleData';
import Provider from '..';
import { mockClients } from '../../../mocks/clients.js';
import { useParams } from 'react-router-dom';
import { FiRotateCw, FiFileMinus, FiSlash } from "react-icons/fi";
import NewChargeModal from '../../../components/NewChargeModal/index.js';

export default function ProviderClientView() {

    const userId = useParams()
    const userData = mockClients.find((item) => item.id.toString() === userId.id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    document.title = `${userData?.name} | Creatus Pay`

    function cellphoneMask(value: string | undefined) {
        if (value) return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1')
    }

    function switchRepeat(value: string | undefined) {
        switch(value) {
            case 'monthly':
                return 'Mensal'
            case 'quarterly':
                return 'Trimestral'
            case 'semiannual':
                return 'Semestral'
            case 'annual':
                return 'Anual'
            default:
                return 'Não definido'
        }
    }

    function switchStatus(value: string | undefined) {
        switch(value) {
            case 'late':
                return (
                    <Text
                        textAlign="center"
                        color="#C70000"
                        bgColor="#FFBFBF"
                        borderRadius="0.4375rem"
                        py="0.5rem"
                        fontWeight="700"
                    >
                        Atrasado
                    </Text>
                )
            case 'open':
                return (
                    <Text
                        textAlign="center"
                        color="#0009E0"
                        bgColor="#A8D7E5"
                        borderRadius="0.4375rem"
                        py="0.5rem"
                        fontWeight="700"
                    >
                        Em aberto
                    </Text>
                )
            case 'payed':
                return (
                    <Text
                        textAlign="center"
                        color="#427642"
                        bgColor="#E0F0D7"
                        borderRadius="0.4375rem"
                        py="0.5rem"
                        fontWeight="700"
                    >
                        Pago
                    </Text>
                )
            default:
                return 'Não definido'
        }
    }

    return (
        <Provider>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={"bold"} fontSize={"1.5rem"}>Nova Cobrança</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {userData && (
                            <NewChargeModal
                                onClose={onClose}
                                data={[userData]}
                            />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Flex
                w="100%"
                direction="column"
                justify="flex-start"
                align="center"
                gap="2rem"
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
                            {userData?.name}
                        </Text>
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
                        onClick={onOpen}
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
                                info={userData?.email}
                            />
                            <CardSingleData
                                icon={<FiCalendar />}
                                title="Idade"
                                info={userData?.age + " anos"}
                            />
                        </Flex>
                        <CardSingleData
                            icon={<FiPhone  />}
                            title="Telefone"
                            info={cellphoneMask(userData?.celphone)}
                        />
                        <Divider />
                        <CardSingleData
                            icon={<FiMapPin />}
                            title="Endereço"
                            info={userData?.address}
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
                                info={new Intl.DateTimeFormat('pt-BR').format(new Date(userData?.lastPayment ?? ''))}
                            />
                            <Flex w="55%">
                                <CardSingleData
                                    icon={<FiDollarSign />}
                                    title="Valor"
                                    info={userData?.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                                    width="50%"
                                />
                                <CardSingleData
                                    icon={<FiClipboard  />}
                                    title="Plano"
                                    info={userData?.plan}
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
                                info={new Intl.DateTimeFormat('pt-BR').format(new Date(userData?.nextPayment ?? ''))}
                            />
                            <Flex w="55%">
                                <CardSingleData
                                    icon={<FiRefreshCw  />}
                                    title="Recorrência"
                                    info={switchRepeat(userData?.recurrence)}
                                    width="50%"
                                />
                                <CardSingleData
                                    icon={<FiLayout />}
                                    title="Status"
                                    info={userData?.status === 'late' ? 'Atrasado' : userData?.status === 'open' ? 'Em Aberto' : 'Pago'}
                                    width="50%"
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    w="100%"
                    align="flex-start"
                    justify="flex-start"
                    gap="1.5rem"
                    direction="column"
                >
                    <Text
                        fontSize="1.875rem"
                        fontWeight="700"
                        fontFamily="Dm Sans"
                        color="#1A202C"
                    >
                        Histórico de Pagamentos
                    </Text>
                    <TableContainer w="100%">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Td fontWeight="bold">Data da Emissão</Td>
                                    <Td fontWeight="bold">Data de Vencimento</Td>
                                    <Td fontWeight="bold">Valor da Cobrança</Td>
                                    <Td fontWeight="bold">Data do Pagamento</Td>
                                    <Td fontWeight="bold">Ação</Td>
                                    <Td fontWeight="bold">Status</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {userData?.history.map((item, index) => (
                                    <Tr key={index}>
                                        <Td>{new Intl.DateTimeFormat('pt-BR').format(new Date(item.emissionDate ?? ''))}</Td>
                                        <Td>{new Intl.DateTimeFormat('pt-BR').format(new Date(item.dueDate ?? ''))}</Td>
                                        <Td>{item.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Td>
                                        <Td
                                            color={item.status === "late" ? "#C70000" : "-moz-initial"}
                                            fontWeight={item.status === "late" ? "bold" : "-moz-initial"}
                                        >
                                            {item.status === "late" ? "Não realizado" : new Intl.DateTimeFormat('pt-BR').format(new Date(item.payDay ?? ''))}
                                        </Td>
                                        <Td>
                                            <Tooltip label="Reenviar Cobrança" aria-label="A tooltip">
                                                <Button bg="transparent" borderRadius="500px" w="48px" h="48px">
                                                    <FiRotateCw />
                                                </Button>
                                            </Tooltip>
                                            <Tooltip label="Ressarcir Cobrança" aria-label="A tooltip">
                                                <Button bg="transparent" borderRadius="500px" w="48px" h="48px">
                                                    <FiFileMinus />
                                                </Button>
                                            </Tooltip>
                                            <Tooltip label="Cancelar Cobrança" aria-label="A tooltip">
                                                <Button bg="transparent" borderRadius="500px" w="48px" h="48px">
                                                    <FiSlash />
                                                </Button>
                                            </Tooltip>
                                        </Td>
                                        <Td>{switchStatus(item.status)}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
                <Flex
                    w="100%"
                    align="center"
                    justify="flex-end"
                    pt="2rem"
                >
                    <Button
                        bg="#FF4141"
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
                            Encerrar Assinatura
                        </Button>
                </Flex>
            </Flex>
        </Provider>
    )
}