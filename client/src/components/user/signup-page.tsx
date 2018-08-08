'use strict';

import * as React from 'react';
import * as objectPath from 'object-path';
import { withRouter, Link, NavLink, Redirect } from 'react-router-dom';
import { IUserContext, userConsumer, SignupParams } from './user-provider';
import { Location } from 'history';
import styled, { Popout, LoadingSpinner } from '../utilities/styled.components';

export const SignPageWrapper = styled.div`
	.signup-container {
		max-width: 300px;
		input {
			width: 100%;
		}
	}
	@media (min-width: 300px) {
		position: relative;
		top: 50%;
		left: 50%;

		.signup-container {
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
	signup: (event: UIEvent) => void;
	signupResult: (result: boolean) => void;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState, LoginPageMethods> {
    constructor(props) {
        super(props);
        this.state = {
			badAuth: false,
			loading: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.signup = this.signup.bind(this);
		this.signupResult = this.signupResult.bind(this);
    }

	emailRef: React.RefObject<HTMLInputElement> = React.createRef();
	passwordRef: React.RefObject<HTMLInputElement > = React.createRef();
	verifypasswordRef: React.RefObject<HTMLInputElement > = React.createRef();
	usernameRef: React.RefObject<HTMLInputElement > = React.createRef();
	firstnameRef: React.RefObject<HTMLInputElement > = React.createRef();
	lastnameRef: React.RefObject<HTMLInputElement > = React.createRef();
	
	hitKey(event) {
		if (event.key == 'Enter') {
            this.signup(event);
        }
	}

	signup(event) {
		event.preventDefault();
		let email, username, password, firstname, lastname;
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

		// Validate username
		if (this.usernameRef.current.value) {
			username = this.usernameRef.current.value;
		} else {
			invalid = invalid || {};
			invalid.username = {
				message: "Username is Required"
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

		// Validate Verfiy passwords match
		if (this.verifypasswordRef.current.value){
			let verifypassword = this.verifypasswordRef.current.value;

			if (password != verifypassword) {
				invalid = invalid || {};
				invalid.verifypassword = {
					message: "Must Match"
				}
				invalid.password = {
					message: "Must Match"
				}
			}
		} else {
			invalid = invalid || {};
			invalid.verifypassword = {
				message: "Must Comfirm Password"
			}
		}
		
		// Validate firstname
		if (this.firstnameRef.current.value) {
			firstname = this.firstnameRef.current.value;
		} else {
			invalid = invalid || {};
			invalid.firstname = {
				message: "First Name is Required"
			}
		}
		
		// Validate lastname
		if (this.lastnameRef.current.value) {
			lastname = this.lastnameRef.current.value;
		} else {
			invalid = invalid || {};
			invalid.lastname = {
				message: "Last Name is Required"
			}
		}

		if (invalid) {
			this.setState(() => {
				return {badAuth: true};
			});
			return;
		}
		let signupParams: SignupParams = {
			email: email,
			username: username,
			password: password,
			firstname: firstname,
			lastname: lastname,
		};
		
		this.setState(() => {
			return {
				badAuth: false,
				loading: true,
			};
		});

		this.props.user.signup(signupParams, this.signupResult);
	}

	signupResult(result) {
    	if (!result) {
			this.emailRef.current.nodeValue = '';
			this.passwordRef.current.nodeValue = '';
			this.setState(() => {
				return {
					badAuth: true,
					loading: false,
				};
			});
    	} else {
			this.setState(() => {
				return {
					badAuth: false,
					loading: false,
				};
			});			
		}
	}

	render() {
		const { emailRef, passwordRef, verifypasswordRef, hitKey, signup, usernameRef, firstnameRef, lastnameRef } = this;
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
			<SignPageWrapper>
				<div className="signup-container">
					<div className="signup-signup-form" onSubmit={signup} >
						<NavLink to='/signup'><h2>Signup</h2></NavLink>
							
						<label htmlFor="email">Email</label>
						<p>
    						<input type="text" onKeyPress={hitKey} placeholder="Enter youremail@example.com" name="email" ref={emailRef} autoComplete='email' required />
    						{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
						<label htmlFor="username">Username</label>
    					<p>
							<input type="text" onKeyPress={hitKey} placeholder="Enter username" name="username" ref={usernameRef} autoComplete='username' required />
							{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
    					<label htmlFor="password">Password</label>
    					<p>
							<input type="password" onKeyPress={hitKey} placeholder="Enter Password" name="password" ref={passwordRef} autoComplete='new-password' required />
							{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
    					<label htmlFor="verifypass">Verify Password</label>
    					<p>
							<input type="password" onKeyPress={hitKey} placeholder="Enter Password" name="verifypass" ref={verifypasswordRef} autoComplete='new-password' required />
							{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
						<label htmlFor="firstname">First Name</label>
    					<p>
							<input type="text" onKeyPress={hitKey} placeholder="Enter First Name" name="firstname" ref={firstnameRef} autoComplete='given-name' required />
							{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
						<label htmlFor="lastname">Last Name</label>
    					<p>
							<input type="text" onKeyPress={hitKey} placeholder="Enter Last Name" name="lastname" ref={lastnameRef} autoComplete='family-name' required  />
							{badAuth ? (<span className="errortext" >* Required</span>) : ''}
						</p>
						<input type="submit" onClick={signup} value="Signup"/>
					</div>
					<p>or <Link className="btn" to={'/login'} >Login</Link></p>
				</div>
				{loading ? (
					<Popout>
						<div>
							<LoadingSpinner/>
						</div>
					</Popout>
				) : ''}
			</SignPageWrapper>
		);			
	}
};

export default userConsumer(withRouter(LoginPage));