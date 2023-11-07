import {
    Flex,
} from '@chakra-ui/react';
import Navbar from '../../components/compound/Navbar';
import WavesSvg from '../../assets/images/waves.svg';

export default function LandingPage() {
    return (
        <Flex direction="column" align="center" justify="center" minH="100vh" maxW="100vw" bg="neutral.900">
            <Navbar />
            <img src={WavesSvg} className="w-full h-auto absolute top-0 right-0 z-0" />
        </Flex>
    )
}