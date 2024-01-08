import {
    Flex,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import ProviderHome from './ProviderHome'
import ProviderPlans from './ProviderPlans'
import ProviderDashboard from './ProviderDashboard'
import Sidebar from '../../components/Sidebar'
import Verifyed from '../../assets/images/verifyed.svg'

export default function Provider() {

    const [section, setSection] = useState(0)

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
                <img src={Verifyed} alt="verifyed" style={{marginLeft: "1rem"}} draggable="false"/>
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