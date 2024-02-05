import {
    Flex,
    Text,
    Tooltip,
} from '@chakra-ui/react'
import { useState } from 'react'
import ProviderHome from './ProviderHome'
import ProviderPlans from './ProviderPlans'
import ProviderDashboard from './ProviderDashboard'
import Sidebar from '../../components/Sidebar'
import Verifyed from '../../assets/images/verifyed.svg'
import NotVerifyed from '../../assets/images/notVerifyed.svg'

export default function Provider() {

    const [section, setSection] = useState(0)
    const [isVerifyed, setIsVerifyed] = useState(true)

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
            w="100vw"
            h="100vh"
            justify="flex-start"
            align="center"
            bg="#FCFCFC"
            p="2rem 1.5rem 1rem 6.5rem"
            direction="column"
            gap="2rem"
        >
            <Sidebar
                section={section}
                setSection={setSection}
            />
            <Flex
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
            {
                section === 0 ? <ProviderHome /> :
                section === 1 ? <ProviderPlans /> :
                section === 2 ? <ProviderDashboard /> :
                null
            }
        </Flex>
    )
}