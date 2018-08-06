'use strict';

// import styled from 'styled-components'


export interface ThemeInterface {
	primaryColor: string;
	primaryColorInverted: string;
	blue: string;
	darkblue: string;
	lightblue: string;
	highlightblue: string;
	gray: string;
}

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
export const defaultTheme: ThemeInterface = {
	primaryColor: '#172B57', 
	primaryColorInverted: '#4d5f86',
	blue: '#002157',
	darkblue: '#172B57',
	lightblue: '#3B5CA3',
	highlightblue: '#4d5f86',
	gray: 'gray',
};

export const Popout = styled.div`
	color: white;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.85);
	z-index: 10000;
	> * {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		overflow: auto;    
		max-height: 100%;
		padding: 2em 0;
	}
	
`;
