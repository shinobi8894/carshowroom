import Text from "elements/text";
import styled from "styled-components";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";

export const NavWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const NavItemWrapper = styled.li<{active:boolean}>`
    display: inline-block;
    flex: 1;

    > a {
        width: 100%;
        padding: 1.5rem;
        font-size: ${FontSize.fSize3.label};
        text-transform: uppercase;

        ${props => props.active ? `
            background: ${DefaultColor.primary.label}
        ` : `
            background: ${BasicVar.bgCard.label};
        `}
    }
`

export const Badge = styled(Text)`
    display: inline-block;
    padding: 0 0.5rem;
    min-width: 40px;
    border: 3px solid ${BasicVar.bgOpacity.label};
    background: rgba(183, 212, 236, 0.35);
    font-size: ${FontSize.fSize5.label};
    text-align: center;
`
