import {
    Flex,
    Textarea,
    Input,
    Button,
} from '@chakra-ui/react'

export default function PostModal() {
    return (
        <Flex
            w="fit-content"
            minW="57.5rem"
            minH="100%"
            direction="column"
            align="center"
            justify="center"
            gap="1.5rem"
            px="1.5rem"
            transform="translateX(-1.5rem)"
            pb="1rem"
        >
            <Flex
                w="100%"
                justify="flex-start"
                fontSize={"1.25rem"}
                fontWeight={"500"}
            >
                Descrição
            </Flex>
            <Textarea
                w="100%"
                minH="10rem"
                maxH="20rem"
                placeholder="Descreva o que aconteceu"
                resize="none"
            />
            <Flex
                w="100%"
                justify="flex-end"
                gap="1rem"
            >
                <Input
                    type="file"
                    display="none"
                />
                <Button
                    as="label"
                    htmlFor="file"
                    cursor="pointer"
                    bg="#43A29D"
                    color="white"
                    fontWeight="bold"
                    fontSize="0.875rem"
                    lineHeight="1.25rem"
                    transition="all 0.1s ease-in-out"
                    px="1.5rem"
                    _hover={{
                        bg: '#52c8c2',
                    }}
                >
                    Adicionar Imagem
                </Button>
                <Button
                    bg="#054945"
                    color="white"
                    fontWeight="bold"
                    fontSize="0.875rem"
                    lineHeight="1.25rem"
                    transition="all 0.1s ease-in-out"
                    px="1.5rem"
                    _hover={{
                        bg: '#52c8c2',
                    }}
                >
                    Publicar
                </Button>
            </Flex>
        </Flex>
    )
}