'use strict';

import * as React from 'react';
import { Redirect, NavLink, match } from "react-router-dom";
import { IUserContext, userConsumer } from './user-provider';
import styled, { Popout, LoadingSpinner } from '../utilities/styled.components';

export const ResetPasswordPageWrapper = styled.div`
	.reset-password-container {
		max-width: 300px;
		input {
			width: 100%;
		}
	}
	@media (min-width: 300px) {
		position: relative;
		top: 50%;
		left: 50%;

		.reset-password-container {
			transform: translate(-50%, -50%);
		}
	}
`;

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
	vaildCode: boolean;
	loading: boolean;
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
			vaildCode: true,
			loading: false,
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
					passwordMismtach: false,
					loading: true,
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
					loading: false,
				};
			});
    	} else {
			this.setState(() => {
				return {
					loading: false,
				};
			});
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
		const { redirect, passwordMismtach, vaildCode, loading} = this.state;
		const { userId, reset_code } = this.props.match.params;
		if (redirect) {
			return (<Redirect to='/profile'/>);
		}


		if (!userId || !reset_code || !vaildCode) {
			return (<Redirect to='/forgotpassword'/>);
		}

		return (
			<ResetPasswordPageWrapper>
				<div className='reset-password-container'>
					<h2>Reset Password</h2>
					<label>New Password{passwordMismtach ? (<span className="errortext" >*</span>) : ''}</label>
					<p>
						<input type='password' onKeyPress={hitKey} placeholder="New Password" ref={newpasswordRef} />
					</p>
					<label>Confrim New Password{passwordMismtach ? (<span className="errortext" >* Must match new Password</span>) : ''}</label>
					<p>
						<input type='password' onKeyPress={hitKey} placeholder="New Password" ref={confirmpasswordRef} />
					</p>
					<input type='submit' onClick={resetPassword} value='SAVE' />
				</div>
				{loading ? (
					<Popout>
						<div>
							<LoadingSpinner/>
						</div>
					</Popout>
				) : ''}
			</ResetPasswordPageWrapper>
		);			
	}
};

export default userConsumer(ResetPassword);