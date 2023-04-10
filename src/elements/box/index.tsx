import React from 'react';

import { BoxWrapper } from './styles/box.styled';

interface PropsType extends ElementDefaultProps {
    as?: any
    children: any
}

const Box: React.FC<PropsType> = ({ children, ...rest }) => {
    return (
        <BoxWrapper {...rest}>
            {children}
        </BoxWrapper>
    )
}

export default Box;