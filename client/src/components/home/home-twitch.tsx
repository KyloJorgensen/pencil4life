'use strict';

import * as React from 'react';

export interface TwitchIframeProps {
}

export interface TwitchIframeState {
	twitchIframeHeight: string;
	twitchIframeWidth: string;
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
  		};
  		this.twitchIframeLoaded = this.twitchIframeLoaded.bind(this);
    }

	componentDidMount() {
		window.addEventListener('resize', this.twitchIframeLoaded);
	}

	componentWillMount() {
		window.removeEventListener('resize', this.twitchIframeLoaded);
	}

	twitchIframeWrapperRef: React.RefObject<HTMLDivElement> = React.createRef();

	twitchIframeLoaded() {
		var maxWidth = this.twitchIframeWrapperRef.current.clientWidth;

		this.setState(() => {return{
			twitchIframeHeight: maxWidth*378/620+'px',
			twitchIframeWidth: maxWidth+'px',
		}});
	}

	twitchIframeRef: React.RefObject<HTMLIFrameElement> = React.createRef();

	render() { 
		return (
			<div className="twitch-iframe-wrapper col-md-8 p-0" ref={this.twitchIframeWrapperRef} >
				<iframe src="https://player.twitch.tv/?channel=pencil4life" ref={this.twitchIframeRef} onLoad={this.twitchIframeLoaded} style={{height: this.state.twitchIframeHeight, width: this.state.twitchIframeWidth}} frameBorder="0" allowFullScreen={true} scrolling="no" ></iframe>
{/*					<a href="https://www.twitch.tv/pencil4life?tt_content=text_link&tt_medium=live_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch live video from pencil4life on www.twitch.tv</a>*/}
			</div>
		);
	}
};

export default TwitchIframe;