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
import ClientCard from '../../../components/ClientCard'
import NewChargeModal from '../../../components/NewChargeModal';

export default function ProviderHome() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            w="100%"
            h="100%"
            direction="column"
            gap="2rem"
        >
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={"bold"} fontSize={"1.5rem"}>Nova Cobrança</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <NewChargeModal onClose={onClose} />
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
                        Clientes
                    </Text>
                    <Input
                        w="100%"
                        maxW="30.5rem"
                        h="2.25rem"
                        border="solid 1px #D6D9DE"
                        borderRadius="0.5rem"
                        placeholder="Pesquisar"
                        background="white"
                        _active={{
                            border: 'solid 1px #D6D9DE',
                        }}
                        _focus={{
                            border: 'solid 1px #D6D9DE',
                        }}
                    />
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
                w="100%"
                align="flex-start"
                justify="flex-start"
                flexWrap="wrap"
                gap="1rem"
            >
                {
                    Array(21).fill("").map((e, index) => (
                        <ClientCard key={e + index} />
                    ))
                }
            </Flex>
        </Flex>
    )
}