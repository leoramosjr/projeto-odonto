import {
    Flex,
} from '@chakra-ui/react'
import LoginContainer from "../../components/LoginContainer"
import BackgroundImage from '../../assets/images/backgroundImage.svg'
import LoginNavbar from '../../components/LoginNavbar'
import RegisterContainer from '../../components/RegisterContainer'

import { useState } from 'react'

export default function LoginPage() {

    const [isRegister, setIsRegister] = useState(false)
    const [loginAsClient, setLoginAsClient] = useState(false)

    return (
        <Flex
            h="100vh"
            w="100vw"
            direction="column"
            justify="center"
            align="center"
            backgroundImage={BackgroundImage}
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            p="2.25rem"
        >
            <LoginNavbar
                setLoginAsClient={setLoginAsClient}
                loginAsClient={loginAsClient}
                setIsRegister={setIsRegister}
                isRegister={isRegister}
            />
            {
                isRegister ?
                <RegisterContainer /> :
                <LoginContainer
                    setIsRegister={setIsRegister}
                    isRegister={isRegister}
                    loginAsClient={loginAsClient}
                />
            }
        </Flex>
    )
}