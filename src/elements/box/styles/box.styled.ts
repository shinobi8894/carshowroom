import styled from 'styled-components'

export const BoxWrapper = styled.div<ElementDefaultProps>`
	${props => `
		${props.position		? `position: ${props.position};`				: ``}
		${props.zIndex			? `z-index: ${props.zIndex};`					: ``}
		${props.top				? `top: ${props.top};`							: ``}
		${props.right			? `right: ${props.right};`						: ``}
		${props.bg				? `background: ${props.bg};`					: ``}
		${props.p				? `padding: ${props.p};`						: ``}
		${props.pl				? `padding-left: ${props.pl};`					: ``}
		${props.pr				? `padding-right: ${props.pr};`					: ``}
		${props.pt				? `padding-top: ${props.pt};`					: ``}
		${props.pb				? `padding-bottom: ${props.pb};`				: ``}
		${props.m				? `margin: ${props.m};`							: ``}
		${props.ml				? `margin-left: ${props.ml};`					: ``}
		${props.mr				? `margin-right: ${props.mr};`					: ``}
		${props.mt				? `margin-top: ${props.mt};`					: ``}
		${props.mb				? `margin-bottom: ${props.mb};`					: ``}
		${props.fDir			? `flex-direction: ${props.fDir};`				: ``}
		${props.fWrap			? `flex-wrap: ${props.fWrap};`					: ``}
		${props.alignItems		? `align-items: ${props.alignItems};`			: ``}
		${props.justifyContent	? `justify-content: ${props.justifyContent};`	: ``}
		${props.g				? `gap: ${props.g};`							: ``}
		${props.h				? `height: ${props.h};`							: ``}
		${props.w				? `width: ${props.w};`							: ``}
		${props.minW			? `min-width: ${props.minW};`					: ``}
		${props.flex			? `flex: ${props.flex};`						: ``}
		${props.overflow		? `overflow: ${props.overflow};`				: ``}
		${props.bd				? `border: ${props.bd};`						: ``}
		${props.bs				? `box-sizing: ${props.bs};`					: ``}
	`}
`
