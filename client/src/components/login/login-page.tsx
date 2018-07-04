'use strict';

import * as React from 'react';
// import userActions from '../../actions/user.actions';
import * as objectPath from 'object-path';
import { withRouter, Link } from 'react-router-dom';
import { IUserContext, userConsumer } from '../user/user-provider';
import { Location } from 'history';

import {Redirect} from 'react-router-dom';

export interface LoginPageProps {
	user: IUserContext;
	location: Location;
}

export interface LoginPageState {
	badAuth: boolean;
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
		// Login in with vaildated email and password
		this.props.user.login(email, password, this.loginResult);

		this.setState(() => {
			return {badAuth: true};
		});
	}

	loginResult(result) {
    	if (!result) {
			this.emailRef.current.value = '';
			this.passwordRef.current.value = '';
			this.setState(() => {
				return {badAuth: true};
			});
    	} 
	}

	render() {
		const { emailRef, passwordRef, hitKey, login } = this;
		const { badAuth } = this.state
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
			<div className="login-page-wrapper">
				<div className="container">
					<form className="login-login-form" onSubmit={login} >
						<label>Login</label>
						<br/>
						<label htmlFor="email"><b>Email:</b></label>
						<br/>
    					<input type="text" onKeyPress={hitKey} placeholder="Enter youremail@example.com" name="email" ref={emailRef} autoComplete='email' required />
    					{badAuth ? (<span className="errortext" >* Required</span>) : ''}
    					<br/>
    					<label htmlFor="password"><b>Password:</b></label>
						<br/>
    					<input type="password" onKeyPress={hitKey} placeholder="Enter Password" name="password" ref={passwordRef} autoComplete='password' required />
						{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						<br/>
						<input type="submit" onClick={login} value="LOGIN"/>
					</form>
					<p>or <Link className="btn" to={'/signup'} >Signup</Link></p>
				</div>
			</div>
		);			
	}
};

export default userConsumer(withRouter(LoginPage));