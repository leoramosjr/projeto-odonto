import {
    Flex,
} from '@chakra-ui/react'
import CreatusLogo from '../../assets/images/CreatusLogo.svg'
import ProjetinhoLogo from '../../assets/images/ProjetinhoLogo.svg'

export default function LoginNavbar() {
    return (
        <Flex
            w="100vw"
            h="2rem"
            px="2rem"
            pt="2rem"
            justify="space-between"
            align="center"
            bg="transparent"
            position="absolute"
            top="0"
            zIndex="20"
        >
            <a href='https://creatusdev.com/' target='blank' style={{display: "flex", gap: "1rem"}}>
                <img src={ProjetinhoLogo} alt="Projetinho Logo" draggable="false" />
                <img src={CreatusLogo} alt="Creatus" className="w-32 h-auto" />
            </a>
        </Flex>
    )
}