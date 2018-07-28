'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';

export interface ContactMessageState {
	required: boolean;
	details: any;
	_contactMessageId: string;
}

class ContactMessage extends React.Component<null, ContactMessageState> {
    constructor(props) {
		super(props);
		this.state = {
			required: false,
			details:  RichTextEditor.createValueFromString('<p><br></p>', 'html'),
			_contactMessageId: null,
		}
		this.hitKey = this.hitKey.bind(this);
		this.editField = this.editField.bind(this);
		this.submitContactMessage = this.submitContactMessage.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
	}

	editField(event) {
		const { name, value } = event.target;
		this.setState((prevState) => {
			prevState[name] = value;
			return prevState;
		});
	}

	hitKey(event) {
		if (event.key == 'Enter') {
			this.submitContactMessage(event);
		}
	}

	submitContactMessage(event) {
		event.preventDefault();
		const requestor = this.requestorRef.current.value;
		const email = this.emailRef.current.value;
		const { details } = this.state;

		if (!requestor || !email || !details) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

		const contactMessage = {
			requestor: requestor,
			email: email,
			details: details.toString('html'),
		}

		const request = new Request('/api/contact/message', {
			method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
				'Accept': 'application/json',
            },
			body: JSON.stringify(contactMessage)
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
		.then((contactMessageRes) => {
			this.setState(() => {
				return {
					_contactMessageId: contactMessageRes.message.id,
				};
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

	render() {
		const { requestorRef, emailRef, editField, hitKey, submitContactMessage, onRichTextChange } = this;
		const { required, details, _contactMessageId } = this.state;

		let contactMessage: JSX.Element | '';

		contactMessage = true ? (
			<div>
				<h3>Send me a message</h3>
				<label>From{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<input type='text' onKeyPress={hitKey} placeholder="Joe Smith" ref={requestorRef} />
				<br/>
				<label>Email{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<input type='text' onKeyPress={hitKey} placeholder="jsmith@example.com" ref={emailRef} />
				<br/>
				<label>Message</label>
				<br/>
				<RichTextEditor value={details} onChange={onRichTextChange} />
				<br/>
				<input type='submit' onClick={submitContactMessage} value='SEND' />
			</div>
		) : '';

		if (_contactMessageId) {
			contactMessage = (
				<div>
					<p>Message Submitted</p>
				</div>
			);
		}

		return (
			<div className="contactMessageWrapper">
				{contactMessage}
			</div>
		);			
	}
};

export default ContactMessage;