'use strict';

import * as React from 'react';
import styled, { defaultTheme } from '../utilities/styled.components';
import { Link } from 'react-router-dom';

interface TwitchIframeStream {
	height?: string;
	width?: string;
}

const TwitchStreamFailed = styled<TwitchIframeStream, 'div'>('div')`
	background-color: ${props => props.theme.darkblue};
	width: ${props => props.width};
	/* height: ${props => props.height}; */
	padding: 1em 0.5em;
	img {
		width: 100%;
		margin-bottom: 2em;
	}
	h2 {
		text-align: center;
		color: white;
		font-size: 1rem;
		a {
			color: #ffffff;
			background: #ff0000;
			padding: 3px 10px;
			border-radius: 8px;
     		line-height: 24px;
		}
	}

	
	@media (min-width: 1000px) {
		h2 {
			font-size: 2rem;
			a {
				line-height: 48px;
			}
		}
	}
	
	@media (min-width: 1200px) {
		padding: 1em 3em;
	}
`;

export interface TwitchIframeProps {
}

export interface TwitchIframeState {
	twitchIframeHeight: string;
	twitchIframeWidth: string;
	twitchStreaming: boolean;
}

export interface TwitchIframeMethods {
	twitchIframeLoaded: () => void;
}

class TwitchIframe extends React.Component<TwitchIframeProps, TwitchIframeState, TwitchIframeMethods> {
    constructor(props) {
        super(props);
        this.state = {
			twitchIframeHeight: 'auto',
			twitchIframeWidth: 'auto',
			twitchStreaming: false,
  		};
		  this.twitchIframeLoaded = this.twitchIframeLoaded.bind(this);
		  this.checkTwitchStream = this.checkTwitchStream.bind(this);
	}
	
	checkTwitchStream() {
		if (this.state.twitchStreaming) {
			return;
		}
		fetch('https://api.twitch.tv/kraken/streams/pencil4life', {
			headers: {
				'client-id': 'jzkbprff40iqj646a697cyrvl0zt2m6',
			}
		})
        .then((response) => {
            if (response.status < 200) {
                const error = new Error('Not available');
                error.message = 'Not available';
                throw error;
            }
            return response.json();
        })
        .then((body: {stream}) => {
			this.setState(() => {
				if (body.stream != null) {
					return {
						twitchStreaming: true,
					}	
				}
				return {
					twitchStreaming: false,
				}
			})
        })
		.catch((error) => {
			// console.error(error);
			this.setState(() => {
				return {
					twitchStreaming: false,
				}
			})
		})
	}

	componentDidMount() {
		window.addEventListener('resize', this.twitchIframeLoaded);
		this.checkTwitchStream();
		this.twitchIframeLoaded();
	}

	componentWillMount() {
		window.removeEventListener('resize', this.twitchIframeLoaded);
	}

	twitchIframeWrapperRef: React.RefObject<HTMLDivElement> = React.createRef();

	twitchIframeLoaded() {
		const ref = this.twitchIframeWrapperRef.current || {clientWidth: 100};
		const maxWidth = ref.clientWidth;
		this.setState(() => {
			return{
			twitchIframeHeight: maxWidth*378/620+'px',
			twitchIframeWidth: maxWidth+'px',
			}
		});
	}

	render() {
		if (!this.state.twitchStreaming) {
			return (
				<div className="twitch-iframe-wrapper col-md-8 p-0" ref={this.twitchIframeWrapperRef} >
					<TwitchStreamFailed height={this.state.twitchIframeHeight} width={this.state.twitchIframeWidth} theme={defaultTheme}>
							<a href="https://www.twitch.tv/pencil4life">
								<img src="/images/livetwitch.png" alt="Pencil4Life live on Twitch"/>
							</a>
							<h2>Not streaming at the moment</h2>
							<h2>Check <Link to="event">Events</Link> for next stream</h2>
							<h2>Visit my <a href="https://www.youtube.com/user/shadowshand" target="_blank" >YouTube</a> channel</h2>
					</TwitchStreamFailed>
				</div>
			);
		}
		return (
			<div className="twitch-iframe-wrapper col-md-8 p-0" ref={this.twitchIframeWrapperRef} >
				<iframe src="https://player.twitch.tv/?channel=pencil4life" height={this.state.twitchIframeHeight} width={this.state.twitchIframeWidth} onLoad={this.twitchIframeLoaded} frameBorder="0" allowFullScreen={true} scrolling="no" />
{/*					<a href="https://www.twitch.tv/pencil4life?tt_content=text_link&tt_medium=live_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch live video from pencil4life on www.twitch.tv</a>*/}
			</div>
		);
	}
};

export default TwitchIframe;