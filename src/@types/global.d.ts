declare module "*.ttf";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare interface StoreObject {
	lang:				string
	theme:				'dark' | 'light'
}

declare interface CSSStyleType {
	bs?:				string
	position?:			PositionType
	zIndex?:			ZIndexType
	top?:				PosType
	right?:				PosType
	bottom?:			PosType
	left?:				PosType
	display?:			DisplayType
	flex?:				FlexType
	fBasis?:			FlexBasisType
	fDir?:				FlexDirectionType
	fFlow?:				FlexFlowType
	fGrow?:				FlexGrowType
	fShrink?:			FlexShrinkType
	fWrap?:				FlexWrapType
	alignContent?:		AlignContentType
	alignItems?:		AlignItemsType
	alignSelf?:			AlignSelfType
	alignTracks?:		AlignTracksType
	justifyContent?:	JustifyContentType
	justifyItems?:		JustifyItemsType
	justifySelf?:		JustifySelfType
	justifyTracks?:		JustifyTracksType
	g?:					GapType
	fFamily?:			FontFamilyType
	fSize?:				FontSizeType
	fWeight?:			FontWeightType
	color?:				ColorType
	p?:					PaddingType
	px?:				PaddingType
	py?:				PaddingType
	pt?:				PaddingType
	pr?:				PaddingType
	pb?:				PaddingType
	pl?:				PaddingType
	m?:					MarginType
	mx?:				MarginType
	my?:				MarginType
	mt?:				MarginType
	mr?:				MarginType
	mb?:				MarginType
	ml?:				MarginType
	h?:					HeightType
	w?:					WidthType
	minW?:				WidthType
	maxW?:				WidthType
	bg?:				BgType
	bgAttachment?:		BgAttachmentType
	bgBlendMode?:		BgBlendModeType
	bgClip?:			BgClipType
	bgColor?:			BgColorType
	bgImg?:				BgImageType
	bgOrigin?:			BgOriginType
	bgPos?:				BgPositionType
	bgPosX?:			BgPositionXType
	bgPoxY?:			BgPositionYType
	bgRepeat?:			BgRepeatType
	bgSize?:			BgSizeType
	backdrop?:			BackdropFilterType
	bd?:				BorderType
	overflow?:			OverflowType
	cursor?:			CursorType
	content?:			ContentType
}

declare interface ElementDefaultProps extends CSSStyleType, HTMLAttributes {}