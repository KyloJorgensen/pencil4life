'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link, withRouter } from 'react-router-dom';
import * as moment from 'moment';
import { eventConsumer, IEventContext } from './event-provider';

export interface EventListItemProps {
	_eventItemId: string;
	displayDetails: boolean;
	event: IEventContext;
}


class EventListItem extends React.Component<EventListItemProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
		this.props.event.getEventItem(this.props._eventItemId)
	}

	render() {
		const { displayDetails, _eventItemId} = this.props;
		const { title, start_date, end_date, details, createdUpdatedDateTime } = this.props.event.eventItem;

		let startDateTime = moment(start_date);
		let endDateTime = moment(end_date);

		let startDay = startDateTime.calendar(null, {
			sameDay: '[Today]',
			nextDay: '[Tomorrow]',
			nextWeek: 'dddd',
			lastDay: '[Yesterday]',
			lastWeek: '[Last] dddd',
			sameElse: 'MM/DD/YYYY',
		});

		let endDay = endDateTime.calendar(null, {
			sameDay: '[Today]',
			nextDay: '[Tomorrow]',
			nextWeek: 'dddd',
			lastDay: '[Yesterday]',
			lastWeek: '[Last] dddd',
			sameElse: 'MM/DD/YYYY',
		});

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


		let content = '<h5>' + title + '</h5>' + '<p className="event-date-time">' + dateTime + '</p>' + (displayDetails ? details : '');

		let createdDetails = displayDetails ? (<p className='event-created-updated-date-time' >{createdUpdatedDateTime}</p>) : '';
	
		return (
			<div className="event-list-item-wrapper" >				
				<Link className="event-link" to={'/event/item/'+_eventItemId} >
					<RichTextEditor value={RichTextEditor.createValueFromString(content, 'html')} readOnly={true} />	
				</Link>
				{createdDetails}
			</div>
		);		
	}
};






export default eventConsumer(EventListItem);