'use strict';

import * as React from 'react';
import * as objectPath from 'object-path';
import { withRouter, Link, Redirect, NavLink } from 'react-router-dom';
import { IUserContext, userConsumer } from './user-provider';

export interface ForgotPasswordPageProps {
	user: IUserContext;
}

export interface ForgotPasswordPageState {
    required: boolean;
    requestSent: boolean;
}

export interface ForgotPasswordPageMethods {
	hitKey: (event: UIEvent) => void;
	forgotPassword: (event: UIEvent) => void;
	forgotPasswordResult: (result: boolean) => void;
}

class ForgotPasswordPage extends React.Component<ForgotPasswordPageProps, ForgotPasswordPageState, ForgotPasswordPageMethods> {
    constructor(props) {
        super(props);
        this.state = {
        	required: false,
        	requestSent: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.forgotPassword = this.forgotPassword.bind(this);
		this.forgotPasswordResult = this.forgotPasswordResult.bind(this);
    }

	emailRef: React.RefObject<HTMLInputElement> = React.createRef();
	
	hitKey(event) {
		if (event.key == 'Enter') {
            this.forgotPassword(event);
        }
	}

	forgotPassword(event) {
		event.preventDefault();
		let email;
		let invalid = null;
		// Validate email
		if (this.emailRef.current.value) {
			email = this.emailRef.current.value;
		} else {
			invalid = invalid || {};
			invalid.email = {
				message: "Email is Required"
			}
		}

		if (invalid) {
			this.emailRef.current.value = '';
			this.setState(() => {
				return {required: true};
			});
			return;
		}
		// Send request off to server to reset password 
		this.props.user.forgotPassword(email, this.forgotPasswordResult);

		this.setState(() => {
			return {required: true};
		});
	}

	forgotPasswordResult(result) {
    	if (result) {
			this.setState(() => {
				return {requestSent: true};
			});
        } else {
			this.emailRef.current.value = '';
			this.setState(() => {
				return {required: true};
			});
    	} 
	}

	render() {
		const { emailRef, hitKey, forgotPassword } = this;
        const { required, requestSent } = this.state
        if (requestSent) {
            return(
				<div className="forgotPassword-page-wrapper">
					<div className="container">
						<NavLink to={'/forgotpassword'} activeClassName="selected" ><h2>Reset Password Request</h2></NavLink>
						<p>Request successfully sent to your email. Check your inbox or junk for a Pencil 4 Life Password Reset for link to reset password.</p>
						<p><Link className="btn" to={'/login'}>Login</Link> or <Link className="btn" to={'/signup'} >Signup</Link></p>
					
					</div>
				</div>
            );
        }

		return (
			<div className="forgotPassword-page-wrapper">
				<div className="container">
					<NavLink to={'/forgotpassword'} activeClassName="selected" ><h2>Reset Password Request</h2></NavLink>
					<br/>
					<label htmlFor="email"><b>Email:</b></label>
					<br/>
					<input type="text" onKeyPress={hitKey} placeholder="Enter youremail@example.com" name="email" ref={emailRef} autoComplete='email' required />
					{required ? (<span className="errortext" >* Required</span>) : ''}
					<br/>
					<input type="submit" onClick={forgotPassword} value="RESET PASSWORD"/>

					<p><Link className="btn" to={'/login'}>Login</Link> or <Link className="btn" to={'/signup'} >Signup</Link></p>
				</div>
			</div>
		);			
	}
};

export default userConsumer(withRouter(ForgotPasswordPage));