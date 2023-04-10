import React from "react";

import { FBoxStyledProps, FBoxWrapper } from "./styles/fbox.styled";

interface FBoxProps extends FBoxStyledProps {
    children: any
}

const FBox: React.FC<FBoxProps> = ({ children, ...rest }) => {
    return (
        <FBoxWrapper {...rest}>
            {
                children
            }
        </FBoxWrapper>
    )
}

export default FBox;