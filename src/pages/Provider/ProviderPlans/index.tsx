import {
    Flex,
    Text,
} from '@chakra-ui/react'
import WorkingPotato from '../../../assets/images/workingPotato.png'
import Provider from '../index'

export default function ProviderPlans() {
    return (
        <Provider>
            <Flex
                w="100%"
                minH="100%"
                direction="column"
                align="center"
                justify="center"
                gap="1rem"
            >
                <Text
                    fontSize="2rem"
                    fontWeight="bold"
                    lineHeight="1.73794rem"
                    textAlign="center"
                    fontFamily="Circo"
                >
                    Plans page is under construction
                </Text>
                <Text
                    fontSize="1rem"
                    fontWeight="bold"
                    lineHeight="1.73794rem"
                    textAlign="center"
                    fontFamily="Circo"
                >
                    by the Potato Team
                </Text>
                <img
                    src={WorkingPotato}
                    alt="Working Potato"
                    style={{
                        width: '100%',
                        maxWidth: '20rem'
                    }}
                />
            </Flex>
        </Provider>
    )
}