import { Box } from "elements";
import styled from "styled-components";
import { BasicVar } from "styles/variables";

export const SearchInputWrapper = styled(Box)({
    display: 'flex',
    padding: '1rem',
    background: BasicVar.bgOpacity.label
})

export const StyledSearchInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    width: 300px;
`
