import {
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Test(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        onOpen()
    }, [])

    return (
        <Flex
            w='100vw'
            h='100vh'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
        >
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Batata
                </ModalBody>
    
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </Flex>
    )
}