import { Box } from "elements";
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

export const BadgeWrapper = styled(Box)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    clip-path: polygon(0 0, 75% 0%, 100% 29%, 100% 100%, 25% 100%, 0 72%);
    background: #2D3342;
    text-align: center;
    z-index: 1;
`

export const Badge = styled(Text)`
    display: inline-block;
    padding: 0 0.5rem;
    min-width: 40px;
    clip-path: polygon(0 0, 75% 0%, 100% 29%, 100% 100%, 25% 100%, 0 72%);
    background: #5B6977;
    font-size: ${FontSize.fSize5.label};
    text-align: center;
    z-index: 1;
`

export const Color = styled(Box)`
`
