'use strict';

import * as React from 'react';
import * as objectPath from 'object-path';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { Location } from 'history';
import {Redirect} from 'react-router-dom';
import styled, { Popout, LoadingSpinner } from '../utilities/styled.components';
import { IUserContext, userConsumer } from './user-provider';

export const LoginPageWrapper = styled.div`
	.login-container {
		max-width: 300px;
		input {
			width: 100%;
		}
	}
	@media (min-width: 300px) {
		position: relative;
		top: 50%;
		left: 50%;

		.login-container {
			transform: translate(-50%, -50%);
		}
	}
`;

export interface LoginPageProps {
	user: IUserContext;
	location: Location;
}

export interface LoginPageState {
	badAuth: boolean;
	loading: boolean;
}

export interface LoginPageMethods {
	hitKey: (event: UIEvent) => void;
	login: (event: UIEvent) => void;
	loginResult: (result: boolean) => void;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState, LoginPageMethods> {
    constructor(props) {
        super(props);
        this.state = {
        	badAuth: false,
        	loading: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.login = this.login.bind(this);
		this.loginResult = this.loginResult.bind(this);
    }

	emailRef: React.RefObject<HTMLInputElement> = React.createRef();
	
	passwordRef: React.RefObject<HTMLInputElement > = React.createRef();
	
	hitKey(event) {
		if (event.key == 'Enter') {
            this.login(event);
        }
	}

	login(event) {
		event.preventDefault();
		let email, password;
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
		// Validate password
		if (this.passwordRef.current.value){
			password = this.passwordRef.current.value;
		} else {
			invalid = invalid || {};
			invalid.password = {
				message: "Password is Required"
			}
		}

		if (invalid) {
			this.emailRef.current.value = '';
			this.passwordRef.current.value = '';
			this.setState(() => {
				return {badAuth: true};
			});
			return;
		}
		
		this.setState(() => {
			return {
				badAuth: false,
				loading: true,
			};
		});
		// Login in with vaildated email and password
		this.props.user.login(email, password, this.loginResult);
	}

	loginResult(result) {
    	if (!result) {
			this.emailRef.current.value = '';
			this.passwordRef.current.value = '';
			this.setState(() => {
				return {badAuth: true};
			});
    	} else {
			this.setState(() => {
				return {badAuth: true};
			});
		}
	}

	render() {
		const { emailRef, passwordRef, hitKey, login } = this;
		const { badAuth, loading } = this.state
		const { userAccess, admin } = this.props.user;

		if (userAccess || admin) {
			if (objectPath.has(this, 'props.location.state.redirectPath')) {
				if (this.props.location.state.redirectPath) {
					return (<Redirect to={this.props.location.state.redirectPath} />);
				}
			}
			return (<Redirect to='/'/>);
		}

		return (
			<LoginPageWrapper>
				<div className="login-container">
					<div className="login-login-form" onSubmit={login} >
						<NavLink to='/login'><h2>Login</h2></NavLink>
						<label htmlFor="email"><b>Email:</b></label>
    					<p>
							<input type="text" onKeyPress={hitKey} placeholder="coolhats@example.com" name="email" ref={emailRef} autoComplete='email' required />
							{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
    					<label htmlFor="password"><b>Password:</b></label>
    					<p>
							<input type="password" onKeyPress={hitKey} placeholder="Enter Password" name="password" ref={passwordRef} autoComplete='password' required />
							{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
						<input type="submit" onClick={login} value="LOGIN"/>
					</div>
					<p><Link className="btn" to={'/forgotpassword'}>Forgot Password</Link>or <Link className="btn" to={'/signup'} >Signup</Link></p>
				</div>
				{loading ? (
					<Popout>
						<div>
							<LoadingSpinner/>
						</div>
					</Popout>
				) : ''}
			</LoginPageWrapper>
		);			
	}
};

export default userConsumer(withRouter(LoginPage));