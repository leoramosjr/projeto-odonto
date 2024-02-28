import {
    Flex,
    Text,
    Input as ChakraInput,
    InputGroup,
} from '@chakra-ui/react'
import { useState } from 'react'

interface InputProps {
    display?: boolean,
    name?: string,
    label?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    onChange: Function,
    leftChildren?: React.ReactNode,
    rightChildren?: React.ReactNode,
    props?: any,
}

export default function Input({
        display = true,
        name,
        label,
        type,
        placeholder,
        value,
        onChange,
        leftChildren,
        rightChildren,
        ...props
    } : InputProps) {

    const [isFocused, setIsFocused] = useState(false)
    
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
            <InputGroup>
                {leftChildren}
                <ChakraInput
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    w="100%"
                    h="2.5rem"
                    borderRadius="0.25rem"
                    _placeholder={{
                        color: isFocused ? "#3182ce" : "#828282",
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {rightChildren}
            </InputGroup>
        </Flex>
    )
}