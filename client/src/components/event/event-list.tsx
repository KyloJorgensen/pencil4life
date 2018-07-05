'use strict';

import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import EventListItem, { EventListItemProps } from './event-list-item';
import { userConsumer, IUserContext } from '../user/user-provider';
import { eventConsumer, IEventContext } from './event-provider';

export interface EventListDefaultProps {
	limit: number;
	discontinued: boolean;
	displayDetails: boolean;
}

export interface EventListProps extends EventListDefaultProps {
	user: IUserContext;
	event: IEventContext;
}

class EventList extends React.Component<EventListProps> {
	public static defaultProps:EventListDefaultProps = {
		limit: 3,
		discontinued: false,
		displayDetails: true,
	}

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	let query = {
			limit: this.props.limit,
		};
		this.props.event.getEventItems(query)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    	let update = false;
    	let prevDiscontinued = prevProps.discontinued;
    	let currentDiscontinued = this.props.discontinued;

    	if (prevDiscontinued != currentDiscontinued) {
	    	update = true;
    	}

    	if (update) {
    		let query = {
    			discontinued: this.props.discontinued,
    			limit: this.props.limit || 10,
    		}
			this.props.event.getEventItems(query);
    	}

    }

	render() {
		const { displayDetails } = this.props;
		const { eventItems } = this.props.event;
		const { admin } = this.props.user;


		let EventItemList = [];
		if (eventItems) {
            eventItems.forEach((eventItemKey) => {
				EventItemList.push(<EventListItem key={eventItemKey} _eventItemId={eventItemKey} displayDetails={displayDetails} />)
			});
		}
		return (
			<div className="event-list-wrapper" >
				{admin ? (
					<div>
						<Link to="/event/newitem">NEW EVENT</Link>
						<br/>
					</div>
				) : ''}
				<ul className='event-item-list' >
					{EventItemList}
				</ul>
			</div>
		);			
	}
};

export default userConsumer(eventConsumer(withRouter(EventList)));