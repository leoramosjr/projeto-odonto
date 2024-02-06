import {
    Flex,
} from '@chakra-ui/react'
import LoginContainer from "../../components/LoginContainer"
import BackgroundImage from '../../assets/images/backgroundImage.svg'
import LoginNavbar from '../../components/LoginNavbar'
import RegisterContainer from '../../components/RegisterContainer'
import ResetPassword from '../../components/ResetPassword'

import { useState } from 'react'

export default function LoginPage() {

    const [isRegister, setIsRegister] = useState(false)
    const [isNewPassword, setIsNewPassword] = useState(false)
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
                isRegister={isRegister || isNewPassword}
            />
            {
                isRegister ? <RegisterContainer setIsRegister={setIsRegister} /> :
                isNewPassword ? <ResetPassword setIsNewPassword={setIsNewPassword} /> :
                <LoginContainer
                    setIsRegister={setIsRegister}
                    isRegister={isRegister}
                    loginAsClient={loginAsClient}
                    setIsNewPassword={setIsNewPassword}
                />
            }
        </Flex>
    )
}