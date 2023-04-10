import { createGlobalStyle } from "styled-components";
import { AsideVar, BasicVar, DefaultColor, DeviceWidth, FontSize } from "./variables";
import { setVariable } from "utils/style.utils";
import { _PatterImage } from "constants/image.constants";
import a_RubricaXtCn from "assets/font/a_RubricaXtCn/a_RubricaXtCn.ttf";

const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: 'a_RubricaXtCn';
        src: url(${a_RubricaXtCn});
        font-weight: 300;
        font-style: normal;
    }

	:root {
		${setVariable(DefaultColor)}
		${setVariable(DeviceWidth)}
		${setVariable(BasicVar)}
		${setVariable(FontSize)}
		${setVariable(AsideVar)}
	}

	html {
		box-sizing: border-box;
		font-family: ${BasicVar.font1.label};
		line-height: ${BasicVar.lineH.label};
		font-size: ${FontSize.fSize.label};
		text-transform: uppercase;
		background: ${BasicVar.bg.label};
		color: ${BasicVar.color.label};
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}


	body {
		margin: 0;
		background: ${BasicVar.bgBody.label};
		background-size: 120% 140%;
		background-position: 25% 100%;
		overflow: hidden;
    	user-select: none;

		&:before {
			position: absolute;
			top: -10%;
			left: -10%;
			width: 80%;
			height: 80%;
			background: no-repeat url(${_PatterImage});
			content: '';
		}
		&:after {
			position: absolute;
			bottom: -10%;
			right: -10%;
			width: 80%;
			height: 80%;
			transform: rotate(-180deg);
			background: no-repeat url(${_PatterImage});
			content: '';
		}
	}

	*, *:before, *:after {
		box-sizing: inherit;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		text-transform: inherit;
		color: inherit;
		transition: all ease-in-out .2s;
	}

	#root {
		position: relative;
		z-index: 1;
		overflow: hidden;
	}
	
	ul {
		padding: 0;
		margin: 0;
	}

	span {
		display: inline-block;
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	a, button, input[type=button], input[type=submit] {
		cursor: pointer;
	}

	&::-webkit-scrollbar {
		position: absolute;
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
	}

	&::-webkit-scrollbar-thumb {
		background: #999;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #888;
	}
`

export default GlobalStyle;
