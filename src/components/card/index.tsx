import React from "react";
import { CarItemContainer, CarItemWrapper, Number } from "./styles/card.styled";

interface CardProps {
    children: any
    item: CarInfo
    order: number
    isHideNumber?: boolean
    onClick?: any
    active?: boolean
    isSm?: boolean
}

const Card: React.FC<CardProps> = ({ children, item, order, isHideNumber, onClick, active, isSm }) => {
    return (
        <CarItemWrapper >
            <CarItemContainer active={active || false} onClick={onClick}>
                {!isHideNumber && (
                    <Number active={active || false} isSm={isSm || false}>{order + 1}</Number>
                )}
                {
                    children
                }
            </CarItemContainer>
        </CarItemWrapper>
    )
}

export default Card;
