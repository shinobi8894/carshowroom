import ClipBox from "components/clip-box";
import FBox from "elements/fbox";
import styled from "styled-components";
import { BasicVar, DefaultColor, FontSize } from "styles/variables";

export const CarItemWrapper = styled(FBox)`
    flex-direction: column;
    padding: 0 0.5rem;
    height: 100%;
    margin-bottom: 1rem;
`

export const CarItemContainer = styled.a<{active: boolean}>`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    background: ${BasicVar.bgCard.label};
    border: 1px solid ${props => props.active ? DefaultColor.primary.label : 'transparent'};
`

export const Number = styled(ClipBox)<{isSm: boolean, active: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    background: ${props => props.active ? DefaultColor.primary.label : BasicVar.bg.label};
    font-size: ${props => props.isSm ? FontSize.fSize4.label : FontSize.fSize3.label};
`
