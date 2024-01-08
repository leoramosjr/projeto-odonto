import {
    Flex,
    Button,
} from '@chakra-ui/react'
import ProjetinhoLogo from '../../assets/images/ProjetinhoLogo.svg';
import { FiHome, FiFile, FiPieChart, FiHelpCircle } from "react-icons/fi";

export default function Sidebar({
    section,
    setSection,
} : {
    section: number,
    setSection: Function,
}) {
    return (
        <Flex
            h="100vh"
            w="5rem"
            direction="column"
            justify="space-between"
            align="center"
            py="2rem"
            boxShadow="7px 4px 18.4px 0px rgba(0, 107, 215, 0.15)"
            position="fixed"
            left="0"
            top="0"
            bg="white"
        >
            <Flex
                direction="column"
                align="center"
                gap="3.5rem"
            >
                <img src={ProjetinhoLogo} alt="Projetinho Logo" draggable="false" />
                <Flex
                    direction="column"
                    gap="0.81rem"
                    bgColor="#F8F9FE"
                    borderRadius="50px"
                    align="center"
                    minW="32px"
                >
                    <Button
                        bgColor={section === 0 ? "#3B82F6" : "#F8F9FE"}
                        h="40px"
                        w="32px
                        !important"
                        p="0"
                        borderRadius="10px"
                        onClick={() => section !== 0 && setSection(0)}
                        _hover={{
                            bg: section !== 0 && "#E2E8F0",
                        }}
                        title="Home"
                    >
                        <FiHome color={section === 0 ? "white" : "#1A202C"}/>
                    </Button>
                    <Button
                        bgColor={section === 1 ? "#3B82F6" : "#F8F9FE"}
                        h="40px"
                        w="32px
                        !important"
                        p="0"
                        borderRadius="10px"
                        onClick={() => section !== 1 && setSection(1)}
                        _hover={{
                            bg: section !== 1 && "#E2E8F0",
                        }}
                        title="Planos"
                    >
                        <FiFile color={section === 1 ? "white" : "#1A202C"}/>
                    </Button>
                    <Button
                        bgColor={section === 2 ? "#3B82F6" : "#F8F9FE"}
                        h="40px"
                        w="32px
                        !important"
                        p="0"
                        borderRadius="10px"
                        // onClick={() => section !== 2 && setSection(2)}
                        _hover={{
                            bg: section !== 2 && "#E2E8F0",
                        }}
                        title="Dashboard (em breve)"
                        disabled={true}
                        cursor="default"
                    >
                        <FiPieChart color={section === 2 ? "white" : "#1A202C"}/>
                    </Button>
                </Flex>
            </Flex>
            <Button
                bgColor="#F8F9FE"
                h="40px"
                w="32px
                !important"
                p="0"
                borderRadius="50%"
                title="Ajuda"
                onClick={() => {
                    window.open('https://wa.me/5551999303433', '_blank')
                }}
            >
                <FiHelpCircle />
            </Button>
        </Flex>
    )
}