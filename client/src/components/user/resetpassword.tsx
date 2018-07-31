'use strict';

import * as React from 'react';
import { Redirect, NavLink, match } from "react-router-dom";
import { IUserContext, userConsumer } from './user-provider';

export interface ResetPasswordProps {
	user: IUserContext;
	match: match<{
		userId: string;
		reset_code: string;
	}>;
}

export interface ResetPasswordState {
	redirect: boolean;
	passwordMismtach: boolean;
	passwordBad: boolean;
	vaildCode: boolean;
}

export interface ResetPasswordMethods {
	hitKey: (event: UIEvent) => void;
	resetPassword: (event: UIEvent) => void;
	resetPasswordResult: (error: boolean) => void;
	redirect: (event: UIEvent) => void;
}


class ResetPassword extends React.Component<ResetPasswordProps, ResetPasswordState> implements ResetPasswordMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	passwordMismtach: false,
			passwordBad: false,
			vaildCode: true,
        };

		this.hitKey = this.hitKey.bind(this);
		this.resetPassword = this.resetPassword.bind(this);
		this.resetPasswordResult = this.resetPasswordResult.bind(this);
		this.redirect = this.redirect.bind(this);
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.resetPassword(event);
        }
	}

    resetPassword(event) {
		event.preventDefault();
		let newpassword = this.newpasswordRef.current.value;
		let confirmpassword = this.confirmpasswordRef.current.value;

		if (newpassword == confirmpassword) {
			this.setState(() => {
				return {
					passwordBad: false,
					passwordMismtach: false,
				};
			});
			this.props.user.resetPassword(newpassword, this.props.match.params.userId, this.props.match.params.reset_code, this.resetPasswordResult);
		} else {
			this.newpasswordRef.current.value = '';
			this.confirmpasswordRef.current.value = '';

			this.setState(() => {
				return {
					passwordMismtach: true,
				};
			});
		}
    }

    resetPasswordResult(error) {
    	if (error) {
			this.newpasswordRef.current.value = '';
			this.confirmpasswordRef.current.value = '';
			this.setState(() => {
				return {
					passwordMismtach: true,
					passwordBad: true,
				};
			});
    	} else {
			this.redirect();
    	} 
	}

	componentDidMount() {
		const { userId, reset_code } = this.props.match.params;
		this.props.user.checkResetCode(userId, reset_code, (vaild) => {
			this.setState(() => {
				return {vaildCode: vaild};
			});
		});
	}

	redirect() {
		this.setState(() => {
			return {
				redirect: true,
			};
		});
	}

	newpasswordRef: React.RefObject<HTMLInputElement> = React.createRef();
	confirmpasswordRef: React.RefObject<HTMLInputElement> = React.createRef();

	render() {
		const { hitKey, resetPassword, newpasswordRef, confirmpasswordRef } = this;
		const { redirect, passwordBad, passwordMismtach, vaildCode} = this.state;
		const { userId, reset_code } = this.props.match.params;
		if (redirect) {
			return (<Redirect to='/profile'/>);
		}


		if (!userId || !reset_code || !vaildCode) {
			return (<Redirect to='/forgotpassword'/>);
		}

		return (
			<div className="profile-wrapper container" >
				<h2>Reset Password</h2>
				<div>
					<label>New Password{passwordMismtach ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='password' onKeyPress={hitKey} placeholder="New Password" ref={newpasswordRef} />
					<br/>
					<label>Confrim New Password{passwordMismtach ? (<span className="errortext" >* Must match new Password</span>) : ''}</label>
					<br/>
					<input type='password' onKeyPress={hitKey} placeholder="New Password" ref={confirmpasswordRef} />
					<br/>
					<input type='submit' onClick={resetPassword} value='SAVE' />
				</div>	
			</div>
		);			
	}
};

export default userConsumer(ResetPassword);