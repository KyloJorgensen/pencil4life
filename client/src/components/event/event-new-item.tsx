'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import {Redirect, withRouter} from "react-router-dom";
import * as Datetime from 'react-datetime';
import * as moment from 'moment';
import { IUserContext, userConsumer } from '../user/user-provider';
import { Moment } from 'moment';
import { Location } from 'history';
import { IEventContext, eventConsumer, addEventItemParams } from './event-provider';
import { ENODATA } from 'constants';

export interface EventNewItemProps {
	user: IUserContext;
	location: Location;
	event: IEventContext;
}

export interface EventNewItemState {
	_eventItemId: boolean;
	required: boolean;
	title: string;
	start_date: Moment;
	end_date: Moment;
	details: any;
}

export interface EventNewItemMethods {
	hitKey: (event: UIEvent) => void;
	startDateChanged: (momentDateTime: string | Moment | React.ChangeEvent<any>) => void;
	endDateChanged: (momentDateTime: string | Moment | React.ChangeEvent<any>) => void;
	addNewEventItem: (event: UIEvent) => void;
	addNewEventItemResult: (error: any, _eventItemId: number) => void;
	onRichTextChange: (value: any) => void;
}

class EventNewItem extends React.Component<EventNewItemProps, EventNewItemState, EventNewItemMethods> implements EventNewItemMethods {
    constructor(props) {
        super(props);
        this.state = {
        	_eventItemId: false,
        	required: false,
        	title: null,
        	start_date: moment(Date.now()),
        	end_date: moment(Date.now()),
        	details: RichTextEditor.createEmptyValue(),
        };

		this.hitKey = this.hitKey.bind(this);
		this.startDateChanged = this.startDateChanged.bind(this);
		this.endDateChanged = this.endDateChanged.bind(this);
		this.addNewEventItem = this.addNewEventItem.bind(this);
		this.addNewEventItemResult = this.addNewEventItemResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.addNewEventItem(event);
        }
	}

    startDateChanged(momentDateTime) {
		this.setState(() => {
			return {start_date: momentDateTime};
		});
    }

    endDateChanged(momentDateTime) {
		this.setState(() => {
			return {end_date: momentDateTime};
		});
    }

    addNewEventItem(event) {
		event.preventDefault();
		let title = this.titleRef.current.value;
		let start_date = this.state.start_date;
		let end_date = this.state.end_date;
		let details = this.state.details;
		if (!title || !start_date || !end_date) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

		if (start_date > end_date) {
			this.setState(() => {
				return {required: true};
			});

			return;
		}

		const params: addEventItemParams = {
			title: title,
			start_date: start_date,
			end_date: end_date,
			details: details.toString('html'),
		};

		this.props.event.addEventItem(params, this.addNewEventItemResult);
		
		this.setState(() => {
			return {required: false};
		});
    }

    addNewEventItemResult(error, _eventItemId) {
    	if (error) {
			this.setState(() => {
				return {required: true};
			});
    	} else {
			this.setState(() => {
				return {_eventItemId: _eventItemId};
			});
    	} 
    }

    onRichTextChange(value) {
		this.setState(() => {
			return {details: value};
		});
	}

	titleRef: React.RefObject<HTMLInputElement> = React.createRef();
	
	render() {
		const { hitKey, addNewEventItem } = this;
		const { _eventItemId, start_date, end_date } = this.state;
		const { location } = this.props;


		if (_eventItemId) {
			return (<Redirect to={'/event/item/'+this.state._eventItemId} />);
		}
		if (!this.props.user.admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: location.pathname}}}/>)
		}
	
		return (
			<div className="event-new-item-wrapper" >
				<form onSubmit={addNewEventItem}>
					<h3>New Event</h3>
					<label>Title{this.state.required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="Great Event" ref={this.titleRef} />
					<br/>
					<label>Start{this.state.required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<Datetime onChange={this.startDateChanged} value={start_date} />
					<br/>
					<label>End{this.state.required ? (<span className="errortext" >*End needs to be at or after Start</span>) : ''}</label>
					<br/>
					<Datetime onChange={this.endDateChanged} value={end_date} />
					<br/>
					<label>Details</label>
					<br/>
					<RichTextEditor value={this.state.details} onChange={this.onRichTextChange} />
					<br/>
					<input type='submit' onClick={this.addNewEventItem} value='SAVE' />
				</form>	
			</div>
		);			
	}
};

export default userConsumer(eventConsumer(withRouter(EventNewItem)));