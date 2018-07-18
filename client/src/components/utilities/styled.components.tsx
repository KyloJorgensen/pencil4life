'use strict';

import styled from 'styled-components'

export const Popout = styled.div`
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