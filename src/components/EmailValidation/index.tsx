import {
    Button,
    Flex,
    HStack,
    PinInput,
    PinInputField,
    Text,
} from '@chakra-ui/react'
import EmailValidationSVG from '../../assets/images/emailValidation.svg'
import { useEffect, useState } from 'react'

export default function EmailValidation({
    setSection
} : {
    setSection: Function
}) {

    const [canResend, setCanResend] = useState(false)
    const [pin, setPin] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setCanResend(true)
        }, 1000 * 2)
    }, [])

    useEffect(() => {
        pin.length === 6 && setSection(2)
    }, [pin])

    return (
        <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            px="2.5rem"
            gap="1rem"
        >
            <Text
                fontSize="1rem"
                fontWeight="700"
                fontFamily="'Open Sans', sans-serif"
            >
                COLOQUE O CÓDIGO DE SEGURANÇA PARA CONTINUAR
            </Text>
            <Text
                fontSize="1rem"
                fontWeight="400"
                fontFamily="'Open Sans', sans-serif"
                color="#6E7191"
                textAlign="center"
            >
                Para confirmar sua identidade enviamos para o email xxxxx@xxx.com um código.
                Por favor, digite o código de segurança logo a baixo para continuar com sua ação. 
                Lembre-se de verificar sua caixa de spam.
            </Text>
            <img src={EmailValidationSVG} alt="EmailValidation"  draggable="false"/>
            <HStack>
                <PinInput
                    placeholder=""
                    type={"alphanumeric"}
                    focusBorderColor="transparent"
                    value={pin}
                    onChange={(value) => setPin(value)}
                >
                    {
                        Array(6).fill("").map((_, index) => (
                            <PinInputField
                                key={index}
                                fontSize="2rem"
                                fontWeight="600"
                                w="4rem"
                                h="4.5rem"
                                border="none"
                                borderBottom="solid 1.5px #9C9C9C"
                                borderRadius="0"
                                _focus={{
                                    border: 'none',
                                    borderBottom: 'solid 1.5px #9C9C9C',
                                }}
                                _hover={{
                                    border: 'none',
                                    borderBottom: 'solid 1.5px #9C9C9C',
                                }}
                            />
                        ))
                    }
                </PinInput>
            </HStack>
            <Flex
                w="100%"
                justify="center"
                align="center"
                gap="1rem"
            >
                <Button
                    w="150px"
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => setSection(0)}
                >
                    Voltar
                </Button>
                <Button
                    display={canResend ? "block" : "none"}
                    w="150px"
                    colorScheme="blue"
                    variant="solid"
                >
                    Reenviar Código
                </Button>
            </Flex>
        </Flex>
    )
}