import {
    Flex,
} from '@chakra-ui/react'
import LoginContainer from "../../components/LoginContainer"
import BackgroundImage from '../../assets/images/backgroundImage.svg'
import LoginNavbar from '../../components/LoginNavbar'

export default function LoginPage() {
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
        >
            <LoginNavbar />
            <LoginContainer />
        </Flex>
    )
}