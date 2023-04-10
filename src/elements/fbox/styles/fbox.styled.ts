import Box from "elements/box";
import styled from "styled-components";

export interface FBoxStyledProps {
	children: any
	flex?: FlexType
	fDir?: FlexDirectionType
	vAlign?: AlignItemsType
	hAlign?: JustifyContentType
	g?: GapType
	gx?: GapType
	gy?: GapType
	h?: HeightType
	w?: WidthType
	p?: PaddingType
	pl?: PaddingType
	pr?: PaddingType
	pt?: PaddingType
	pb?: PaddingType
	m?: MarginType
	ml?: MarginType
	mr?: MarginType
	mt?: MarginType
	mb?: MarginType
	wrap?: string
	bg?: string
	overflow?: string
	position?: PositionType
	top?: PosType
	left?: PosType
	right?: PosType
	bottom?: PosType
}

export const FBoxWrapper = styled(Box) <FBoxStyledProps>`
	display: flex;
	${props => props.position			? `position: ${props.position};`		: ``}
	${props => props.top				? `top: ${props.top};`		: ``}
	${props => props.left				? `left: ${props.left};`		: ``}
	${props => props.right				? `right: ${props.right};`		: ``}
	${props => props.bottom				? `bottom: ${props.bottom};`		: ``}
	${props => props.flex				? `flex: ${props.flex};`				: ``}
	${props => props.fDir				? `flex-direction: ${props.fDir};`		: ``}
	${props => props.wrap				? `flex-wrap: ${props.wrap};`			: ``}
	${props => props.vAlign				? `align-items: ${props.vAlign};`		: ``}
	${props => props.hAlign				? `justify-content: ${props.hAlign};`	: ``}
	${props => props.g					? `gap: ${props.g};`					: ``}
	${props => props.gx					? `column-gap: ${props.gx};`					: ``}
	${props => props.gy					? `row-gap: ${props.gy};`					: ``}
	${props => props.h					? `height: ${props.h};`					: ``}
	${props => props.w					? `width: ${props.w};`					: ``}
	${props => props.p					? `padding: ${props.p};`				: ``}
	${props => props.pl					? `padding-left: ${props.pl};`			: ``}
	${props => props.pr					? `padding-right: ${props.pr};`			: ``}
	${props => props.pt					? `padding-top: ${props.pt};`			: ``}
	${props => props.pb					? `padding-bottom: ${props.pb};`		: ``}
	${props => props.m					? `margin: ${props.m};`					: ``}
	${props => props.ml					? `margin-left: ${props.ml};`			: ``}
	${props => props.mr					? `margin-right: ${props.mr};`			: ``}
	${props => props.mt					? `margin-top: ${props.mt};`			: ``}
	${props => props.mb					? `margin-bottom: ${props.mb};`			: ``}
	${props => props.bg					? `background: ${props.bg};`			: ``}
	${props => props.overflow			? `overflow: ${props.overflow};`		: ``}
`
