import {
    Button,
    Flex,
    Text,
} from '@chakra-ui/react'
import CreatusLogo from '../../assets/images/CreatusLogo.svg'
import ProjetinhoLogo from '../../assets/images/ProjetinhoLogo.svg'
import '../../assets/fonts/Circo.ttf'

export default function LoginNavbar({
    loginAsClient,
    setLoginAsClient,
    isRegister,
    setIsRegister,
} : {
    loginAsClient: boolean,
    setLoginAsClient: Function,
    isRegister: boolean,
    setIsRegister: Function,
}) {
    return (
        <Flex
            w="100vw"
            px="3rem"
            pt="2rem"
            justify="space-between"
            align="center"
            bg="transparent"
            position="absolute"
            top="0"
            zIndex="20"
        >
            <a href='https://creatusdev.com/' target='blank' style={{display: "flex", gap: "0.5rem"}}>
                <img src={CreatusLogo} alt="Creatus" className="w-32 h-auto" />
                <img src={ProjetinhoLogo} alt="Projetinho Logo" draggable="false" />
                <Text
                    fontSize="1.45rem"
                    fontWeight="600"
                    fontFamily="Circo"
                    color="#333333"
                    letterSpacing="0.00644rem"
                    lineHeight="1.43rem"
                    textAlign="center"
                >
                    pay day
                </Text>
            </a>
            <Button
                bg="transparent"
                color="#1E40AF"
                fontSize="1rem"
                fontWeight="600"
                fontFamily="Dm Sans"
                letterSpacing="0.00644rem"
                lineHeight="1.43rem"
                textAlign="center"
                border="1px solid #1E40AF"
                onClick={() => {
                    isRegister && setIsRegister(!isRegister)
                    setLoginAsClient(!loginAsClient)
                }}
            >
                { loginAsClient ? 'Sou Prestador de Serviços' : 'Sou Cliente' }
            </Button>
        </Flex>
    )
}