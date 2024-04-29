import {
    Flex,
    Button,
} from '@chakra-ui/react'
import Provider from '../index'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Callendar() {
    
    document.title = `Calendários | • NR •`

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
                <Flex w="100%" justify="flex-end">
                    <Button
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
                        Novo Evento
                    </Button>
                </Flex>
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
            </Flex>
        </Provider>
    )
}