'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link, withRouter } from 'react-router-dom';
import * as moment from 'moment';
import { eventConsumer, IEventContext } from './event-provider';

export interface EventListItemProps {
	displayDetails: boolean;
	event: IEventContext;
}


class EventListItem extends React.Component<EventListItemProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
		this.props.event.getEventItem(this.props.event.eventItem._eventItemId)
    }

	render() {
		const { displayDetails } = this.props;
		let _eventItemId, title, start_date, end_date, details, createdUpdatedDateTime;

		if ('eventItem' in this.props.event) {
			if ('_eventItemId' in this.props.event.eventItem) {
				_eventItemId = this.props.event.eventItem._eventItemId;
			}
			if ('title' in this.props.event.eventItem) {
				title = this.props.event.eventItem.title;
			}
			if ('state_date' in this.props.event.eventItem) {
				start_date = this.props.event.eventItem.start_date;
			}
			if ('end_date' in this.props.event.eventItem) {
				end_date = this.props.event.eventItem.end_date;
			}
			if ('event' in this.props.event.eventItem) {
				details = this.props.event.eventItem.details;
			}
			if ('createdUpdatedDateTime' in this.props.event.eventItem) {
				createdUpdatedDateTime = this.props.event.eventItem.createdUpdatedDateTime;
			}
		}

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
		
		console.log(_eventItemId, content, title, details, createdUpdatedDateTime )
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


// const Test = eventConsumer(EventListItem);


// class EventItem extends React.Component<any> {
// 	render() {
// 		return (
// 			<Test {...this.props}/>
// 		);
// 	}
// }

// export default withRouter(EventItem);