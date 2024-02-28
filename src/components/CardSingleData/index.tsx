import {
    Flex,
    Text,
} from '@chakra-ui/react'

interface CardSingleDataProps {
    icon?: any,
    title?: string,
    info?: string,
    width?: string,
    props?: any,
}


export default function CardSingleData({
    icon,
    title,
    info,
    width,
    ...props
} : CardSingleDataProps) {
    return (
        <Flex
            direction="column"
            gap="0.5rem"
            align="flex-start"
            justify="flex-start"
            color="#828282"
            width={width}
            {...props}
        >
            <Flex
                gap="0.5rem"
                align="center"
            >
                {icon}
                <Text
                    fontSize="1rem"
                    fontWeight="500"
                    lineHeight="0.875rem"
                    fontFamily="Dm Sans"
                >
                    {title}
                </Text>
            </Flex>
            <Text
                fontSize="0.875rem"
                fontWeight="400"
                color="#313131"
                lineHeight="1rem"
                fontFamily="Dm Sans"
            >
                {info}
            </Text>
        </Flex>
    )
}