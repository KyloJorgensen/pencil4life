'use strict';

import * as React from 'react';
import TwitchIframe from './home-twitch';
import Event from './home-event';
import NewSection from './home-news';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

	render() { 
		return (
		    <div className="home-page-wrapper" >
				<div className="container">
					<div className="row" >
						<TwitchIframe />
						<Event />
					</div>
					<NewSection/>
				</div>
		    </div>
		);
	}
};

export default HomePage;