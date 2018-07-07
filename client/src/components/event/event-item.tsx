'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link } from "react-router-dom";
import * as  moment from 'moment';
import { IEventContext, eventConsumer } from './event-provider';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface EventItemProps {
	event: IEventContext;
	user: IUserContext;
}

class EventItem extends React.Component<EventItemProps> {
    constructor(props) {
		super(props);
    }

    componentDidMount() {
		this.props.event.getEventItem(this.props.event.eventItem._eventItemId);
	}	

	render() {
		const {  } = this.props;
		const { admin } = this.props.user;
		const { _eventItemId, title, start_date, end_date, details, createdUpdatedDateTime } = this.props.event.eventItem;

		let startDateTime = moment(start_date);
		let endDateTime = moment(end_date);

		let daymessage = {
			sameDay: '[Today]',
			nextDay: '[Tomorrow]',
			nextWeek: 'dddd',
			lastDay: '[Yesterday]',
			lastWeek: '[Last] dddd',
			sameElse: 'MM/DD/YYYY',
		};

		let startDay = startDateTime.calendar(null, daymessage);

		let endDay = endDateTime.calendar(null, daymessage);

		let startTime = startDateTime.format("h:mm a");
		let endTime = endDateTime.format("h:mm a");

		let dateTime = startDay + ' at ' + startTime;

		if (moment() >= startDateTime) {
			dateTime = 'Now';
		}

		if (startDay !== endDay) {
			dateTime += ' to ' + endDay + ' at ' + endTime;
		} else if (startTime !== endTime) {
			dateTime += ' until ' + endTime;
		}

		let content = '<h5>' + title + '</h5>' + '<p className="event-date-time">' + dateTime + '</p>' + details;

		return (
			<div className="event-item-wrapper" >
				{admin ? <p className="text-right" ><Link to={'/event/edit/'+_eventItemId}>EDIT</Link></p> : ''}
				<RichTextEditor value={RichTextEditor.createValueFromString(content, 'html')} readOnly={true} />
				<p className='news-created-updated-date-time' >{createdUpdatedDateTime}</p>
			</div>
		);			
	}
};

export default userConsumer(eventConsumer(EventItem));