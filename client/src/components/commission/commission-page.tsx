'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import * as Datetime from 'react-datetime';
import * as moment from 'moment';
import { ICommissionsToggle } from '../../../../server/src/routes/api/commissions/commissions.model';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface CommissionPageProps {
	user: IUserContext
}

export interface CommissionPageState {
	required: boolean;
	details: any;
	_commissionRequestId: string;
	edit: boolean;
	accepting: boolean;
	limit: number;
	start_date: Date | moment.Moment;
	end_date: Date | moment.Moment;
	comment: string;
	convertedComment: any;
}

class CommissionPage extends React.Component<CommissionPageProps, CommissionPageState> {
    constructor(props) {
		super(props);
		this.state = {
			accepting: false,
			limit: 0,
			start_date: moment(new Date()),
			end_date: moment(new Date()),
			comment: '',
			convertedComment:  RichTextEditor.createValueFromString('<p><br></p>', 'html'),
			required: false,
			details:  RichTextEditor.createValueFromString('<p><br></p>', 'html'),
			_commissionRequestId: null,
			edit: false,
		}
		this.hitKey = this.hitKey.bind(this);
		this.editField = this.editField.bind(this);
		this.submitCommissionRequest = this.submitCommissionRequest.bind(this);
		this.onRichTextChangeDetails = this.onRichTextChangeDetails.bind(this);
		this.onRichTextChangeComment = this.onRichTextChangeComment.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.updateCommissionsToggle = this.updateCommissionsToggle.bind(this);
		this.startDateChanged = this.startDateChanged.bind(this);
		this.endDateChanged = this.endDateChanged.bind(this);
	}
	

	startDateChanged(momentDateTime) {
		this.setState((prevState) => {
			return {start_date: momentDateTime};
		});
	}

	endDateChanged(momentDateTime) {
		this.setState((prevState) => {
			return {end_date: momentDateTime};
		});
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

	hitKey(event) {
		if (event.key == 'Enter') {
			this.submitCommissionRequest(event);
		}
	}

	toggleEdit() {
		this.setState((prevState) => {
			return {edit: !prevState.edit};
		})
	}

	submitCommissionRequest(event) {
		event.preventDefault();
		const requestor = this.requestorRef.current.value;
		const email = this.emailRef.current.value;
		const { details, } = this.state;

		if (!requestor || !email || !details) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

		const commissionRequest = {
			requestor: requestor,
			email: email,
			details: details.toString('html'),
		}

		const request = new Request('/api/commissions', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
				'Accept': 'application/json',
            },
			body: JSON.stringify(commissionRequest)
		});

		this.setState(() => {
			return {required: false};
		});

		fetch(request)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response.json();
        })
		.then((commissionRequestRes) => {
			const request = new Request('/api/commissions/toggle', {
				method: 'GET',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
			});
			fetch(request)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					const error = new Error(response.statusText);
					error.message = String(response);
					throw error;
				}
				return response.json();
			})
			.then((toggle: ICommissionsToggle) => {
				this.setState(() => {
					return {
						_commissionRequestId: commissionRequestRes.message.id,
						accepting: toggle.accepting,
						limit: toggle.limit,
						start_date: moment(toggle.start_date),
						end_date: moment(toggle.end_date),
						comment: toggle.comment,
						convertedComment: RichTextEditor.createValueFromString(toggle.comment, 'html')
					}
				})
			})
			.catch((error) => {
				console.error(error);
			})
		})
		.catch((error) => {
			this.setState(() => {
				return {required: true};
			});
			console.error(error);
		})

	}

	updateCommissionsToggle(event) {
		event.preventDefault();
		const { convertedComment, limit, accepting, start_date, end_date } = this.state;

		const commissionToggle: {
			accepting: boolean;
			limit: number;
			comment: string;
			start_date: Date | moment.Moment;
			end_date: Date| moment.Moment;
		} = {
			accepting: accepting,
			limit: limit,
			comment: convertedComment.toString('html'),
			start_date: start_date,
			end_date: end_date,
		}

		const request = new Request('/api/commissions/toggle', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
				'Accept': 'application/json',
            },
			body: JSON.stringify(commissionToggle),
		});

		fetch(request)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response.json();
        })
		.then((toggle: ICommissionsToggle) => {
			this.setState(() => {
				return {
					edit: false,
					accepting: toggle.accepting,
					limit: toggle.limit,
					start_date: moment(toggle.start_date),
					end_date: moment(toggle.end_date),
					comment: toggle.comment,
					convertedComment: RichTextEditor.createValueFromString(toggle.comment, 'html')
				};
			});
		})
		.catch((error) => {
			console.error(error);
		})
	}

	onRichTextChangeDetails = (value) => {
		this.setState(() => {
			return {details: value};
		});
	}

	onRichTextChangeComment = (value) => {
		this.setState(() => {
			return {
				comment: value.toString('html'),
				convertedComment: value
			};
		});
	}

	requestorRef: React.RefObject<HTMLInputElement> = React.createRef();
	emailRef: React.RefObject<HTMLInputElement> = React.createRef();

	componentDidMount() {
		const request = new Request('/api/commissions/toggle', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
		});
		fetch(request)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.message = String(response);
                throw error;
            }
            return response.json();
        })
		.then((toggle: ICommissionsToggle) => {
			this.setState(() => {
				return {
					accepting: toggle.accepting,
					limit: toggle.limit,
					start_date: moment(toggle.start_date),
					end_date: moment(toggle.end_date),
					comment: toggle.comment,
					convertedComment: RichTextEditor.createValueFromString(toggle.comment, 'html')
				}
			})
		})
		.catch((error) => {
			console.error(error);
		})
	}

	render() {
		const { requestorRef, emailRef, editField, hitKey, submitCommissionRequest, onRichTextChangeDetails, onRichTextChangeComment, toggleEdit, updateCommissionsToggle, handleCheckboxChange, startDateChanged, endDateChanged } = this;
		const { admin } = this.props.user;
		const { accepting, limit, start_date, end_date, comment, convertedComment, required, details, _commissionRequestId, edit } = this.state;

		let displayMessage: JSX.Element = (
			<div>
				<p>Not Accepting Commissions at this time</p>
			</div>
		);
		let acceptingRequests = false;

		if (limit) {
			displayMessage = (
				<div>
					<p>Now accepting commission requests.</p>
					<p>Accepting {limit} more Commission Request(s).</p>
				</div>
			);
			acceptingRequests = true;
		}
		if (accepting) {
			displayMessage = (
				<div>
					<p>Now accepting commission requests.</p>
				</div>
			);
			acceptingRequests = true;
		}
		let start = moment(start_date).format("MMM Do YYYY [at] h:mm a ");
		let end = moment(end_date).format("MMM Do YYYY [at] h:mm a ");
		if (end_date > new Date()) {
			if (start_date < new Date()) {
				displayMessage = (
					<div>
						<p>Now accepting commission requests.</p>
						<p>Commission requests will be accepted until {end}.</p>
					</div>
				);
				acceptingRequests = true;
			} else {
				displayMessage = (
					<div>
						<p>Not accepting commission requests currently.</p>
						<p>Will be accepting commission requests on {start} until {end}.</p>
					</div>
				);
			}
		}

		let commissionRequest: JSX.Element | '';

		commissionRequest = acceptingRequests ? (
			<div>
				<h3>Commission Request</h3>
				<label>Requestor{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<input type='text' onKeyPress={hitKey} placeholder="Joe Smith" ref={requestorRef} />
				<br/>
				<label>Email{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<input type='text' onKeyPress={hitKey} placeholder="Joe Smith" ref={emailRef} />
				<br/>
				<label>Details</label>
				<br/>
				<RichTextEditor value={details} onChange={onRichTextChangeDetails} />
				<br/>
				<input type='submit' onClick={submitCommissionRequest} value='REQUEST' />
			</div>
		) : '';

		if (_commissionRequestId) {
			commissionRequest = (
				<div>
					<p>Commission Request Submitted</p>
				</div>
			);
		}

		return (
			<div className="commission-page-wrapper">
				{!edit && admin? (
					<button onClick={toggleEdit} >EDIT</button>
				) : ''}
				{edit && admin ? (
					<div>
						<label>Accepting All: </label><input type='checkbox' checked={accepting} name="accepting" onChange={handleCheckboxChange} />
						<br/>
						<label>Limit: </label><input type="number" onKeyPress={hitKey} onChange={editField} name="limit" min={0} value={limit}/>
						<br/>
						<label>Start{required ? (<span className="errortext" >*</span>) : ''}</label>
						<br/>
						<Datetime dateFormat="MMM Do YYYY [at] h:mm a" value={start_date} onChange={startDateChanged} />
						<br/>
						<label>End{required ? (<span className="errortext" >*</span>) : ''}</label>
						<br/>
						<Datetime dateFormat="MMM Do YYYY [at] h:mm a" value={end_date} onChange={endDateChanged} />
						<br/>
						<RichTextEditor value={convertedComment} onChange={onRichTextChangeComment} />
						<input type='submit' onClick={updateCommissionsToggle} value='REQUEST' />
					</div>
				) : ''}
				{displayMessage}
				{ comment != '<p><br></p>' ? <RichTextEditor value={convertedComment} readOnly={true} /> : ''}
				{commissionRequest}
			</div>
		);			
	}
};

export default userConsumer(CommissionPage);