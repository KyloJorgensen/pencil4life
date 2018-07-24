'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import * as moment from 'moment';
import { ICommissionsToggle, ICommissionsModel } from '../../../../server/src/routes/api/commissions/commissions.model';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface CommissionPageProps {
	user: IUserContext
}

export interface CommissionPageState extends ICommissionsToggle {
	required: boolean;
	details: any;
	_commissionRequestId: string;
}

class CommissionPage extends React.Component<CommissionPageProps, CommissionPageState> {
    constructor(props) {
		super(props);
		this.state = {
			accepting: false,
			limit: 0,
			start_date: new Date(),
			end_date: new Date(),
			comment: '',
			required: false,
			details: RichTextEditor.createEmptyValue(),
			_commissionRequestId: null,
		}
		this.hitKey = this.hitKey.bind(this);
		this.submitCommissionRequest = this.submitCommissionRequest.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
	}

	hitKey(event) {
		if (event.key == 'Enter') {
			this.submitCommissionRequest(event);
		}
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
				body: JSON.stringify(commissionRequest)
            },
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
		.then((toggle) => {
			this.setState(() => {
				return {_commissionRequestId: toggle._id};
			});
		})
		.catch((error) => {
			this.setState(() => {
				return {required: true};
			});
			console.error(error);
		})

	}

	onRichTextChange = (value) => {
		this.setState(() => {
			return {details: value};
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
					start_date: toggle.start_date,
					end_date: toggle.end_date,
				}
			})
		})
		.catch((error) => {
			console.error(error);
		})
	}

	render() {
		const { requestorRef, emailRef, hitKey, submitCommissionRequest, onRichTextChange } = this;
		const { admin } = this.props.user;
		const { accepting, limit, start_date, end_date, comment, required, details, _commissionRequestId } = this.state;

		let displayMessage: JSX.Element = (
			<div>
				<p>Not Accepting Commissions at this time</p>
			</div>
		);
		let acceptingRequests = false;

		if (accepting) {
			displayMessage = (
				<div>
					<p>Now Accepting Commission Requests</p>
				</div>
			);
			acceptingRequests = true;
		}
		if (limit) {
			displayMessage = (
				<div>
					<p>Now Accepting Commission Requests</p>
					<p>Accepting {limit} more Commissions.</p>
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
						<p>Now accepting commission requests</p>
						<p>Commissions will be accepted until {end}.</p>
					</div>
				);
				acceptingRequests = true;
			} else {
				displayMessage = (
					<div>
						<p>Not accepting commissions at this time.</p>
						<p>Will be accepting commissions on {start} until {end}.</p>
					</div>
				);
			}
		}

        // requestor?: string;
        // email?: number;
        // details?: string;

		const convertedComment = RichTextEditor.createValueFromString(comment, 'html');

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
				<RichTextEditor value={details} onChange={onRichTextChange} />
				<br/>
				<input type='submit' onClick={submitCommissionRequest} value='REQUEST' />
			</div>
		) : '';

		if (_commissionRequestId) {
			commissionRequest = (
				<div>
					<p>Commission Request Submited</p>
				</div>
			);
		}

		return (
			<div className="commission-page-wrapper">
				{displayMessage}
				{ comment != '<p><br></p>' ? <RichTextEditor value={convertedComment} readOnly={true} /> : ''}
				{commissionRequest}
			</div>
		);			
	}
};

export default userConsumer(CommissionPage);