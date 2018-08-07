'use strict';

import * as React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import styled from 'styled-components';

fontawesome.library.add(brands);

const FooterWrapper = styled.footer`
	background-color: black;
	/*padding: 64px;*/
	position: relative;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 50;	
	.container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-left: auto; 
		margin-right: auto;
		padding: 0.5em;
	}

	.social {
		a {
			color: #ffffff;
			font-size: 2.5em;
			padding: 0.3em;
		}
	}

	.legal, .legal * {
		color: #454545;
		font-size: 1em;
		padding-top: 0;
		padding-bottom: 1em;
		margin-bottom: 0;
	}

`;

class Footer extends React.Component<null> {
	render() {
		return (
			<FooterWrapper>
			    	<div className="social container" >
			    		<a href="https://www.instagram.com/pencil.4.life/" target="_blank"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
			    		<a href="https://www.twitch.tv/pencil4life" target="_blank"><FontAwesomeIcon icon={["fab", "twitch"]} /></a>
						<a href="https://www.youtube.com/user/shadowshand" target="_blank" ><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
			    		<a href="https://twitter.com/pencil4life" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
						<a href="https://www.facebook.com/pencil4life/?ref=br_rs" target="_blank"><FontAwesomeIcon icon={["fab", "facebook-f"]} /></a>
			    	</div>
			    	<div className="legal container">
			    		<a href="">&copy;Pencil4Life</a>
			    		<a href="">&copy;Brad Ashworth</a>
			    		<a href="">&copy;Kylo Jorgensen</a>
			    		<a href="">Privacy Policy</a>
			    		<a href="">User Agreement</a>
			    	</div>
	    	</FooterWrapper>
		);
	}
};

export default Footer;