import {
    Flex,
    Text,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { FiPlus } from "react-icons/fi";
import ClientCard from '../../components/clientList/ClientCard/index.js'
import NewClient from '../../components/clientList/NewClient/index.js';
import { useNavigate } from 'react-router-dom';
import Provider from '../index';
import { useState } from 'react';
import { mockClients } from '../../mocks/clients.js';

interface ClientCardData {
    id: number,
    name: string,
    email: string,
    birthDate: string,
    phone: string,
    address: string,
    firstQuery: string,
    lastQuery: string,
    nextQuery: string,
    recurrence: string,
    job: string,
    origin: string,
}

export default function ClientList() {

    const [filteredData, setFilteredData] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    
    document.title = 'Pacientes | • NR •';
    
    return (
        <Provider>
            <Flex
                w="100%"
                h="100%"
                direction="column"
                gap="2rem"
            >
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontWeight={"bold"} fontSize={"1.5rem"}>Novo Paciente</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <NewClient onClose={onClose} />
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Flex
                    w="100%"
                    align="center"
                    justify="space-between"
                    gap="1rem"
                >
                    <Flex align="center" gap="1rem" w="100%">
                        <Text
                            fontSize="1.5rem"
                            fontWeight="500"
                            fontFamily="Dm Sans"
                        >
                            Pacientes
                        </Text>
                        <Input
                            w="100%"
                            maxW="30.5rem"
                            h="2.25rem"
                            border="solid 1px #D6D9DE"
                            borderRadius="0.5rem"
                            placeholder="Pesquisar por nome"
                            background="white"
                            _active={{
                                border: 'solid 1px #D6D9DE',
                            }}
                            _focus={{
                                border: 'solid 1px #D6D9DE',
                            }}
                            value={filteredData}
                            onChange={(e) => setFilteredData(e.target.value)}
                        />
                    </Flex>
                    <Button
                        leftIcon={<FiPlus />}
                        bg="#43A29D"
                        color="white"
                        fontWeight="bold"
                        fontSize="0.875rem"
                        lineHeight="1.25rem"
                        transition="all 0.1s ease-in-out"
                        px="1.5rem"
                        _hover={{
                            bg: '#52c8c2',
                        }}
                        onClick={onOpen}
                    >
                        Novo Paciente
                    </Button>
                </Flex>
                <Flex
                    w="100%"
                    align="flex-start"
                    justify="flex-start"
                    flexWrap="wrap"
                    gap="1rem"
                >
                    {filteredData === "" ? mockClients.map((e: ClientCardData, index: any) => (
                        <ClientCard
                            key={index}
                            onCardClick={() => navigate(`/clients/${e.id}`)}
                            name={e.name}
                            lastQuery={e.lastQuery}
                            nextQuery={e.nextQuery}
                            recurrence={e.recurrence}
                            email={e.email}
                            phone={e.phone}
                        />
                    )) : mockClients.filter((e: ClientCardData) => e.name.toLowerCase().includes(filteredData.toLowerCase())).map((e: ClientCardData, index: any) => (
                        <ClientCard
                            key={index}
                            onCardClick={() => navigate(`/clients/${e.id}`)}
                            name={e.name}
                            lastQuery={e.lastQuery}
                            nextQuery={e.nextQuery}
                            recurrence={e.recurrence}
                            email={e.email}
                            phone={e.phone}
                        />
                    ))}
                </Flex>
            </Flex>
        </Provider>
    )
}