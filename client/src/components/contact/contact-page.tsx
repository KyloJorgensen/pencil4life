'use strict';

import * as React from 'react';
import * as fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import styled from 'styled-components';

import * as faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import * as faComments from '@fortawesome/fontawesome-free-solid/faComments';

fontawesome.library.add(brands, faEnvelope, faComments);

const ContactPageWrapper = styled.div`
	display: grid;
	grid-column-gap: 1em;
	grid-template-columns: 100%;
	> .socialmedia {
		display: block;
		margin: 0.5em 0;
    	flex-wrap: nowrap;
		text-decoration: none;
		
		> * {
			display: block;
			width: 100%;
		}

		> svg {
     		padding: 8px;
			border-radius: 16px;
			flex-grow: 1;
			color: white;
			font-size: 4em;
		}

		> div {
			width: initial;
			height: initial;
			align-self: center;
			overflow: hidden;
			flex-grow: 1;
			margin: 1em;

			> h2 {
				width: max-content;
				margin: 0 auto;
				font-size: 1.3em;
			}
		}

		&:hover, &:focus {
		}
	}

	> .instagram {
		svg {
			background:
				radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),
				radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
				radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
				radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),
				radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
				radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),
				radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
				linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
		}
	}

	> .twitch {
		svg {
			background-color: #6441a4;
		}
	}

	> .twiiter {
		svg {
			background-color: #1da1f2;
		}
	}

	> .youtube {
		svg {
			background-color: #ff0000;
		}
	}

	> .facebook {
		svg {
			background-color: #4267b2;
		}
	}

	> .soundboard {
		svg {
			background-color: #e5474b;
		}
	}

	> .message {
		svg {
			background-color: #172b57;
		}
	}

	@media (min-width: 765px) {
		grid-template-columns: repeat(auto-fill,minmax(500px,1fr));
		.socialmedia {
			display: inline-block;
			display: flex;

			> svg {
				width: initial;
				font-size: 7em;
			}

			> div {				
				width: initial;
				height: initial;
				> h2 {
					font-size: 2em;
				}
			}
		}
	}
	
`;

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<ContactPageWrapper>
				<a className='socialmedia instagram' href="https://www.instagram.com/pencil.4.life/" target="_blank" >
					<FontAwesomeIcon icon={["fab", "instagram"]} />
					<div>
						<h2>pencil.4.life on Instagram</h2>
					</div>
				</a>
				<a className='socialmedia twitch' href="https://www.twitch.tv/pencil4life" target="_blank" >
					<FontAwesomeIcon icon={["fab", "twitch"]} />
					<div>
						<h2>pencil4life on Twitch</h2>
					</div>
				</a>
				<a className='socialmedia youtube' href="https://www.youtube.com/user/shadowshand" target="_blank" >
					<FontAwesomeIcon icon={["fab", "youtube"]} />
					<div>
						<h2>shadowshand on YouTube</h2>
					</div>
				</a>
				<a className='socialmedia twiiter' href="https://twitter.com/pencil4life" target="_blank" >
					<FontAwesomeIcon icon={["fab", "twitter"]} />
					<div>
						<h2>pencil4life on Twitter</h2>
					</div>
				</a>
				<a className='socialmedia facebook' href="https://www.facebook.com/pencil4life/?ref=br_rs" target="_blank" >
					<FontAwesomeIcon icon={["fab", "facebook-f"]} />
					<div>
						<h2>pencil4life on Facebook</h2>
					</div>
				</a>
				<a className='socialmedia soundboard'  href="/#/soundboard">
					<FontAwesomeIcon icon={["fas", "comments"]} />
					<div>
						<h2>Join my soundboard</h2>
					</div>
				</a>
				<a className='socialmedia message'  href="/#/contact/message">
					<FontAwesomeIcon icon={["fas", "envelope"]} />
					<div>
						<h2>Send me a message</h2>
					</div>
				</a>
			</ContactPageWrapper>
		);			
	}
};

export default ContactPage;	