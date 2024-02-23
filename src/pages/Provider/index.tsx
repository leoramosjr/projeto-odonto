import {
    Flex,
    Text,
    Tooltip,
} from '@chakra-ui/react'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Verifyed from '../../assets/images/verifyed.svg'
import NotVerifyed from '../../assets/images/notVerifyed.svg'
import { useLocation } from 'react-router-dom'

export default function Provider({
    children,
} : {
    children?: React.ReactNode
}) {

    const [isVerifyed, setIsVerifyed] = useState(true)
    const page = useLocation()

    function tooltipChildren() {
        return (
            <Flex
                direction="column"
                gap="0.25rem"
                align="flex-start"
                fontSize="1rem"
                justify="center"
            >
                <Flex
                    fontWeight="500"
                    align="center"
                    gap="0.5rem"
                >
                    <img src={isVerifyed ? Verifyed : NotVerifyed} alt="verifyed" style={{width: "1.5rem"}} draggable="false"/>
                    
                <Text
                    fontSize="0.75rem"
                >
                    {isVerifyed ? "Verificado" : "Em análise"}
                </Text>
                </Flex>
                <Text
                    fontSize="0.75rem"
                >
                    {isVerifyed ? "A conta deste perfil foi verificada pelos nossos aministradores." : "A conta deste perfil está em análise pelos nossos administradores."}
                </Text>
            </Flex>
        )
    }

    return (
        <Flex
            maxW="100vw"
            minH="100vh"
            bg="#FCFCFC"
            p="2rem 1.5rem 2rem 6.5rem"
            direction="column"
        >
            <Sidebar />
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
                gap="2rem"
            >
                <Flex
                    display={page.pathname.includes("/client") ? "none" : "flex"}
                    w="100%"
                    align="center"
                >
                    <Text
                        fontSize="1.65rem"
                        fontWeight="600"
                        fontFamily="Dm Sans"
                    >
                        Clínica do Soren
                    </Text>
                    <Tooltip
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
                    </Tooltip>
                </Flex>
                {children}
            </Flex>
        </Flex>
    )
}