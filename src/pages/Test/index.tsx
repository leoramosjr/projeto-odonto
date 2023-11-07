import {
    Flex,
} from '@chakra-ui/react';
import Navbar from '../../components/compound/Navbar';

export default function TestPage() {
    return (
        <Flex
            align="center"
            justify="center"
            h="100vh"
            gap="2rem"
            color="white"
        >
            <Navbar />
        </Flex>
    )
}