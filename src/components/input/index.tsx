import React from "react";
import { InputWrapper, StyledInput } from "./styles/input.styled";
import Text from "elements/text";
import { BasicVar } from "styles/variables";

interface InputType {
    prefix?: string
}

const Input = ({ prefix, ...rest }: InputType) => {
    return (
        <InputWrapper>
            {prefix && (
                <Text color={BasicVar.color2.label} mr={'0.5rem'}>{prefix}</Text>
            )}
            <StyledInput {...rest} />
        </InputWrapper>
    )
}

export default Input;