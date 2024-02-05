import {
    Flex,
    Text,
} from '@chakra-ui/react'
import { AutoComplete, AutoCompleteInput, AutoCompleteList, AutoCompleteItem } from '@choc-ui/chakra-autocomplete';
import { SetStateAction, useState } from 'react'

interface InputProps {
    display?: boolean,
    name?: string,
    label?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    onChange: Function,
    optionsList: string[],
    props?: any,
}

export default function Autocomplete({
        display = true,
        name,
        label,
        type,
        placeholder,
        value,
        onChange,
        optionsList,
        ...props
    } : InputProps) {

    const [isFocused, setIsFocused] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <Flex
            w="100%"
            direction="column"
            display={display ? "flex" : "none"}
        >
            <Text
                fontSize="0.75rem"
                color={isFocused ? "#3182ce" : "#828282"}
                bgColor="white"
                ml="0.5rem"
                transform="translateY(8px)"
                zIndex="2"
                w="fit-content"
                px="0.5rem"
                borderRadius="0.25rem"
            >
                {label}
            </Text>
            <AutoComplete openOnFocus>
                <AutoCompleteInput
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    w="100%"
                    h="2.5rem"
                    borderRadius="0.25rem"
                    _placeholder={{
                        color: isFocused ? "#3182ce" : "#828282",
                    }}
                    onFocus={() => {
                        searchTerm === "" && setSearchTerm("")
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        searchTerm === "" && setSearchTerm("")
                        setIsFocused(false)
                    }}
                    onChange={(event: { target: { value: SetStateAction<string>; }; }) => {
                        setSearchTerm(event.target.value)
                        onChange(event.target.value)
                    }}
                    {...props}
                />
                <AutoCompleteList display={optionsList.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ? "block" : "none"}>
                    {optionsList.map((option: string) => (
                        <AutoCompleteItem
                            key={option}
                            value={option}
                            textTransform="capitalize"
                            onClick={() => {
                                setSearchTerm(option)
                                onChange(option)
                            }}
                        >
                            {option}
                        </AutoCompleteItem>
                    ))}
                </AutoCompleteList>
            </AutoComplete>
        </Flex>
    )
}