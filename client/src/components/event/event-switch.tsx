'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import EventPage from './event-page';
import EventItem from './event-item';
import EventItemEdit from './event-item-edit';
import EventNewItem from './event-new-item';
import NoMatch from '../no-match';
import { eventProvider } from './event-provider';

class EventSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div className="event-page-wrapper">
				<div className="container">
					<NavLink exact to={'/event'} activeClassName="selected" ><h2>Events</h2></NavLink>
                    <Switch>
						<Route exact path="/event" component={EventPage} />
	                    <Route path="/event/newitem" component={EventNewItem} />
	                    <Route path="/event/item/:_eventItemId" component={EventItem} />
	                    <Route path="/event/edit/:_eventItemId" component={EventItemEdit} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default eventProvider(EventSwitch);