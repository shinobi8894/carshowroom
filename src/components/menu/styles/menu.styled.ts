import styled from "styled-components";
import { BasicVar, FontSize } from "styles/variables";

export const MenuItemWrapper = styled.li<{active: boolean, badge?: string | number}>`
    display: inline-block;

    a {
        position: relative;
        text-decoration: none;
        font-size: ${FontSize.fSize3.label};
        text-transform: uppercase;

        ${props => props.active && `
            border-bottom: 4px solid #B7D5ED;
        `}

        ${props => props.badge 
            ? `
                &:after {
                    position: absolute;
                    top: -30%;
                    right: -20px;
                    padding: 0 5px;
                    background: ${BasicVar.bgBadge.label};
                    font-size: ${FontSize.fSize.label};
                    color: ${BasicVar.bg.label};
                    content: '${props.badge}';
                }
            ` : ``
        }
    }
`
