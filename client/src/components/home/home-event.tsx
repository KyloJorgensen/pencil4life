'use strict';

import * as  React from 'react';
import {NavLink} from "react-router-dom";
import EventList from '../event/event-list';
import { eventProvider } from '../event/event-provider';

class HomeEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div className="event-wrapper col-md-4 p-2" >
                <NavLink exact to={'/event'} activeClassName="selected" ><h2>Events</h2></NavLink>
				<EventList limit={4} displayDetails={false} />
                <NavLink exact to={'/event'} activeClassName="selected" >More Events</NavLink>
			</div>
		);			
	}
};

export default eventProvider(HomeEvent);