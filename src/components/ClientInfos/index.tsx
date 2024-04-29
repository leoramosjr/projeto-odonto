import {
    Flex,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tr,
} from '@chakra-ui/react';
import Input from '../base/Input';

export default function ClientInfos({
    isEditing,
} : {
    isEditing: boolean,
}) {

    const data = [
        ["Consulta", '23/09/2023'],
        ["Limpeza", '24/09/2023'],
        ["Cleareamento", '25/09/2023'],
        ["Limpeza", '26/09/2023'],
        ["Aparelho", '27/09/2023'],
        ["Cafézinho", '28/09/2023'],
        ["Limpeza", '29/09/2023'],
        ["Consulta", '30/09/2023'],
        ["Limpeza", '01/10/2023'],
    ]

    return (
        <Flex w="100%" gap="2rem">
            <Flex direction="column" w="70%" gap="1rem">
                <Text
                    fontSize="1.5rem"
                    fontWeight="700"
                    fontFamily="Dm Sans"
                    color="#1A202C"
                    mb="0.5rem"
                >
                    Informações do Paciente
                </Text>
                <Flex w="100%" gap="2rem">
                    <Input
                        isEditing={isEditing}
                        bold
                        label="Data de Nascimento"
                        placeholder="04/10/1998"
                    />
                    <Input
                        isEditing={isEditing}
                        bold
                        label="Telefone"
                        placeholder="+55 51 993043856"
                    />
                </Flex>
                <Flex w="100%" gap="2rem">
                    <Input
                        isEditing={isEditing}
                        bold
                        label="Endereço de Email"
                        placeholder="victor.mondin@gmail.com"
                    />
                    <Input
                        isEditing={isEditing}
                        bold
                        label="CPF"
                        placeholder="000.000.000-00"
                    />
                </Flex>
                <Flex w="100%" gap="2rem">
                    <Input
                        isEditing={isEditing}
                        bold
                        label="Ocupação"
                        placeholder="Engenheiro de beleza"
                    />
                    <Input
                        isEditing={isEditing}
                        bold
                        label="Origem"
                        placeholder="Outros (casado com a Dra.)"
                    />
                </Flex>
                <Flex w="100%" gap="2rem">
                    <Input
                        isEditing={isEditing}
                        bold
                        label="Primeira Consulta"
                        placeholder="23/09/2023"
                    />
                    <Input
                        isEditing={isEditing}
                        bold
                        label="Recorrência"
                        placeholder="Mensal"
                    />
                </Flex>
            </Flex>
            
            <Flex direction="column" w="30%" gap="1.5rem" maxH={"22rem"}>
                <Text
                    fontSize="1.5rem"
                    fontWeight="700"
                    fontFamily="Dm Sans"
                    color="#1A202C"
                    mb="0.5rem"
                >
                    Controle de Retornos
                </Text>
                <TableContainer
                    w="100%"
                    overflowY="scroll"
                >
                <Table size="sm">
                    <Tbody width="100%">
                    {data.map((item, index) => {
                        return (
                            <Tr
                                display="flex"
                                w="100%"
                                key={index}
                                justifyContent="space-between"
                                backgroundColor={index % 2 === 0 ? '#FFFFFF' : '#FAFAFA'}
                                border="none"
                                px="1rem"
                            >
                                <Flex>
                                    <Td
                                        pt="0.6875rem"
                                        pb="0.6875rem"
                                        fontSize="1rem"
                                        fontWeight="700"
                                        mr="0"
                                    >
                                        {index + 1}.
                                    </Td>
                                    <Td
                                        pt="0.6875rem"
                                        pb="0.6875rem"
                                        fontSize="1rem"
                                        fontWeight="400"
                                    >
                                        {item[0]}
                                    </Td>
                                </Flex>
                                <Td
                                    pt="0.6875rem"
                                    pb="0.6875rem"
                                    fontSize="1rem"
                                    fontWeight="600"
                                >
                                    {item[1]}
                                </Td>
                            </Tr>
                        );
                    })}
                    </Tbody>
                </Table>
                </TableContainer>
            </Flex>
        </Flex>
    )
}