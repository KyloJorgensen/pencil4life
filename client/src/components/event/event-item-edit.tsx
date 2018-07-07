'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect } from "react-router-dom";
import * as Datetime from 'react-datetime';
import * as moment from 'moment';
import { Location } from 'history';
import { IEventContext, updateEventItemParams, eventConsumer } from './event-provider';
import { IUserContext, userConsumer } from '../user/user-provider';


export interface EventItemEditProps {
	location: Location;
	event: IEventContext;
	user: IUserContext;
}
export interface EventItemEditState {
	redirect: boolean;
	required: boolean;
	title: string;
	start_date: moment.Moment;
	end_date: moment.Moment;
	details: any;
	discontinued: boolean;
}
export interface EventItemEditMethods {
	hitKey: (event: UIEvent) => void;
	editField: (event: UIEvent) => void;
	handleCheckboxChange: (event: UIEvent) => void;
	startDateChanged: (momentDateTime: any) => void;
	endDateChanged: (momentDateTime: any) => void;
	updateEventItem: (event: UIEvent) => void;
	updateEventItemResult: (error: boolean) => void;
	onRichTextChange: (value: any) => void;
	redirect: () => void;
}

class EventItemEdit extends React.Component<EventItemEditProps, EventItemEditState, EventItemEditMethods> implements EventItemEditMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	required: false,
        	title: null,
        	start_date: null,
        	end_date: null,
        	details: RichTextEditor.createEmptyValue(),
        	discontinued: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.editField = this.editField.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.startDateChanged = this.startDateChanged.bind(this);
		this.endDateChanged = this.endDateChanged.bind(this);
		this.updateEventItem = this.updateEventItem.bind(this);
		this.updateEventItemResult = this.updateEventItemResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
		this.redirect = this.redirect.bind(this);
    }

    componentWillMount() {
		this.setState(() => {
			return {
				title: this.props.event.eventItem.title,
				start_date: moment(this.props.event.eventItem.start_date),
				end_date: moment(this.props.event.eventItem.end_date),
				details: RichTextEditor.createValueFromString(this.props.event.eventItem.details, 'html'),
				discontinued: this.props.event.eventItem.discontinued,
			};
		});
    }

	componentDidUpdate(prevProps: EventItemEditProps, prevState, snapshot) {
		let propsToCheck = ['title', 'start_date', 'end_date', 'details', 'discontinued'];
		let _state = null;
		propsToCheck.forEach((propToCheck) => {
			if (prevProps.event.eventItem[propToCheck] !== this.props.event.eventItem[propToCheck]) {
				_state = _state == null ? {} : _state;
				_state[propToCheck] = this.props.event.eventItem[propToCheck];
				if (propToCheck == 'details') {
					_state[propToCheck] = RichTextEditor.createValueFromString(this.props.event.eventItem[propToCheck], 'html');
				}
			}
		});
		if (_state) {
			this.setState(() => {
				return _state;
			});
		}
	}

    componentDidMount() {
		this.props.event.getEventItem(this.props.event.eventItem._eventItemId);
	}

    editField(event) {
		const { name, value } = event.target;
		this.setState((prevState) => {
			prevState[name] = value;
			return prevState;
		});
    }

    handleCheckboxChange(event) {
		const { name, checked } = event.target;
		this.setState((prevState) => {
			prevState[name] = checked;
			return prevState;
		});
    }

    startDateChanged(momentDateTime) {
		this.setState(() => {
			return {start_date: momentDateTime}
		});
    }

    endDateChanged(momentDateTime) {
		this.setState(() => {
			return {end_date: momentDateTime}
		});
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.updateEventItem(event);
        }
	}

    updateEventItem(event) {
		event.preventDefault();

		const { title, start_date, end_date, details, discontinued } = this.state;

		if (!title || !start_date || !end_date || start_date > end_date) {
			this.setState(() => {
				return {required: true}
			});
			return;
		}
		const changes = {
			title: title,
			start_date: start_date,
			end_date: end_date,
			details: details.toString('html'),
			discontinued: discontinued,
		};

		let payload: updateEventItemParams = {_id: this.props.event.eventItem._eventItemId};
		let vaildKeys = ['title', 'start_date', 'end_date', 'details', 'discontinued'];

		for (let i = 0; i < vaildKeys.length; i++) {
			if (changes[vaildKeys[i]] != this.props[vaildKeys[i]]) {
				payload[vaildKeys[i]] = changes[vaildKeys[i]];
			}
		}
		this.props.event.updateEventItem(payload, this.updateEventItemResult);
    }

    updateEventItemResult(error) {
    	if (error) {
			this.setState(() => {
				return {required: true};
			});
    	} else {
			this.redirect();
    	} 
    }

    onRichTextChange(value) {
		this.setState(() => {
			return {details: value};
		});
    }

	redirect() {
		this.setState(() => {
			return {redirect: true};
		});
	}

	render() {

		const { hitKey, editField, startDateChanged, endDateChanged, updateEventItem, onRichTextChange, handleCheckboxChange } = this;
		const { redirect, required, title, start_date, end_date, details, discontinued } = this.state;
		const { location } = this.props;
		const { admin } = this.props.user;
		const { _eventItemId, createdUpdatedDateTime } = this.props.event.eventItem;

		if (redirect) {
			return (<Redirect to={'/event/item/'+_eventItemId} />);
		}

		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: location.pathname}}}/>)
		}


		return (
			<div className="event-item-edit-wrapper" >
				<form onSubmit={updateEventItem}>
					<h3>EDIT ITEM</h3>
					<label>Title{required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="Great Event" onChange={editField} name='title' value={title} />
					<br/>
					<label>Start{required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<Datetime value={start_date} onChange={startDateChanged} />
					<br/>
					<label>End{required ? (<span className="errortext" >* End needs to be at or after Start</span>) : ''}</label>
					<br/>
					<Datetime value={end_date} onChange={endDateChanged} />
					<br/>
					<label>Details</label>
					<br/>
					<RichTextEditor value={details} onChange={onRichTextChange} />
					<p className='news-created-updated-date-time' >{createdUpdatedDateTime}</p>
					<br/>
					<label>Discontinued</label>
					<br/>
					<input type='checkbox' checked={!!discontinued} name="discontinued" onChange={handleCheckboxChange} />
					<br/>
					<input type='submit' onClick={updateEventItem} value='SAVE' />
				</form>	
			</div>
		);			
	}
};

export default userConsumer(eventConsumer(EventItemEdit));