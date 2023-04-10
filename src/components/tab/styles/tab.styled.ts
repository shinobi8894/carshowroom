import FBox from "elements/fbox";
import styled from "styled-components";
import { BasicVar } from "styles/variables";

export const TabWrapper = styled(FBox)({
    flexDirection: "column",
    height: '100%'
})

export const TabHeader = styled(FBox)`
    gap: 0.5rem;
    margin-bottom: 1rem;
`

export const TabButton = styled.button<{active: boolean}>`
    text-decoration: none;
    padding: 0.3rem 1.3rem;
    min-width: 5.3rem;
    color: ${BasicVar.color.label};
    cursor: pointer;

    ${props => props.active ?
        `
            background: transparent;
            border: 1px solid ${BasicVar.color.label};
        ` :
        `
            background: ${BasicVar.bg.label};
            border: none;
        `
    }
`
