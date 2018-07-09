'use strict';

// width: 100%;
//     display: grid;
//     /* height: 400px; */
//     height: 100%;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr 1fr 1fr 1fr;


// grid-column-start: 1;
// grid-column-end: -1;
// grid-row-start: 1;
// grid-row-end: -1;
// width: 100%;
// height: 100%;


import * as React from 'react';
import { eventListenerConsumer, IEventListenerContext } from '../event-listener/event-listener';

export interface TwitchIframeProps extends IEventListenerContext {
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
		this.props.addEventListener('resize', this.twitchIframeLoaded);
	}

	componentWillMount() {
		this.props.removeEventListener('resize', this.twitchIframeLoaded);
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

export default eventListenerConsumer(TwitchIframe);