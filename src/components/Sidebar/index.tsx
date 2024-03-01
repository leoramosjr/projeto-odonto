import {
    Flex,
    Button,
    Tooltip,
} from '@chakra-ui/react'
import ProjetinhoLogo from '../../assets/images/ProjetinhoLogo.svg';
import {
    FiHome,
    FiFile,
    // FiPieChart,
    FiHelpCircle,
        FiLogOut
} from "react-icons/fi";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {

    const navButtons = [
        {
            icon: <FiHome />,
            label: "Home",
            route: "/provider/home"
        },
        {
            icon: <FiFile />,
            label: "Planos",
            route: "/provider/plans"
        },
        // {
        //     icon: <FiPieChart />,
        //     label: "Dashboard",
        //     route: "/provider/dashboard"
        // },
    ]

    const navigate = useNavigate();
    const location = useLocation();
    const section = navButtons.findIndex(button => button.route === location.pathname)

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
                    {navButtons.map((button, index) => (
                        <Tooltip
                            key={index}
                            placement="right"
                            color="black"
                            bg="white"
                            borderRadius="0.5rem"
                            px="0.75rem"
                            py="0.5rem"
                            label={button.label}
                            aria-label={button.label}
                        >
                            <Button
                                key={index}
                                bgColor={section === index ? "#0075EB" : "transparent"}
                                color={section === index ? "white" : "#333333"}
                                h="40px"
                                w="32px
                                !important"
                                p="0"
                                borderRadius="10px"
                                _hover={{
                                    bg: section !== index && "#E2E8F0"
                                }}
                                onClick={() => {
                                    navigate(button.route)
                                }}
                            >
                                {button.icon}
                            </Button>
                        </Tooltip>
                    ))}
                </Flex>
            </Flex>
            <Flex
                direction="column"
                align="center"
                gap="1.5rem"
            >
                <Tooltip
                    placement="right"
                    color="black"
                    bg="white"
                    borderRadius="0.5rem"
                    px="0.75rem"
                    py="0.5rem"
                    label="Ajuda"
                    aria-label="A tooltip"
                    closeOnClick={false}
                >
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
                </Tooltip>
                <Tooltip
                    placement="right"
                    color="black"
                    bg="white"
                    borderRadius="0.5rem"
                    px="0.75rem"
                    py="0.5rem"
                    label="Sair"
                    aria-label="A tooltip"
                    closeOnClick={false}
                >
                    <Button
                        bgColor="#3B82F6"
                        color="white"
                        h="40px"
                        w="32px
                        !important"
                        p="0"
                        borderRadius="10px"
                        _hover={{
                            background: "#2859a9",
                        }}
                        onClick={() => {
                            window.open('/', '_self')
                        }}
                    >
                        <FiLogOut />
                    </Button>
                </Tooltip>
            </Flex>
        </Flex>
    )
}