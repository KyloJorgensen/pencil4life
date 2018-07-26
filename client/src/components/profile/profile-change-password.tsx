'use strict';

import * as React from 'react';
import { Redirect, NavLink } from "react-router-dom";
import { IUserContext, userConsumer } from '../user/user-provider';

export interface ProfileChangePasswordProps {
	user: IUserContext;
}

export interface ProfileChangePasswordState {
	redirect: boolean;
	passwordMismtach: boolean;
	passwordBad: boolean;
}

export interface ProfileChangePasswordMethods {
	hitKey: (event: UIEvent) => void;
	updatePassword: (event: UIEvent) => void;
	updatePasswordResult: (error: boolean) => void;
	redirect: (event: UIEvent) => void;
}


class ProfileChangePassword extends React.Component<ProfileChangePasswordProps, ProfileChangePasswordState> implements ProfileChangePasswordMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	passwordMismtach: false,
        	passwordBad: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.updatePasswordResult = this.updatePasswordResult.bind(this);
		this.redirect = this.redirect.bind(this);
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.updatePassword(event);
        }
	}

    updatePassword(event) {
		event.preventDefault();
		let oldpassword = this.oldpasswordRef.current.value;
		let newpassword = this.newpasswordRef.current.value;
		let confirmpassword = this.confirmpasswordRef.current.value;
		if (!oldpassword) {
			this.setState(() => {
				return {
					passwordBad: true,
				};
			});
			return;
		}

		if (newpassword == confirmpassword) {
			this.setState(() => {
				return {
					passwordBad: false,
					passwordMismtach: false,
				};
			});
			this.props.user.updatePassword(oldpassword, newpassword, this.updatePasswordResult);
		} else {
			this.oldpasswordRef.current.value = '';
			this.newpasswordRef.current.value = '';
			this.confirmpasswordRef.current.value = '';

			this.setState(() => {
				return {
					passwordMismtach: true,
				};
			});
		}
    }

    updatePasswordResult(error) {
    	if (error) {
			this.oldpasswordRef.current.value = '';
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

	redirect() {
		this.setState(() => {
			return {
				redirect: true,
			};
		});
	}

	oldpasswordRef: React.RefObject<HTMLInputElement> = React.createRef();
	newpasswordRef: React.RefObject<HTMLInputElement> = React.createRef();
	confirmpasswordRef: React.RefObject<HTMLInputElement> = React.createRef();

	render() {
		const { hitKey, updatePassword, oldpasswordRef, newpasswordRef, confirmpasswordRef } = this;
		const { redirect, passwordBad, passwordMismtach} = this.state;

		if (redirect) {
			return (<Redirect to='/profile'/>);
		}

		return (
			<div className="profile-wrapper" >
				<NavLink exact to={'/profile/changepassword'} activeClassName="selected" ><h2>Change Password</h2></NavLink>
				<form onSubmit={updatePassword}>
					<label>Old Password{passwordBad ? (<span className="errortext" >* Bad Password</span>) : ''}</label>
					<br/>
					<input type='password' onKeyPress={hitKey} placeholder="Old Password" ref={oldpasswordRef} />
					<br/>
					<label>New Password{passwordMismtach ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='password' onKeyPress={hitKey} placeholder="New Password" ref={newpasswordRef} />
					<br/>
					<label>Confrim New Password{passwordMismtach ? (<span className="errortext" >* Must match new Password</span>) : ''}</label>
					<br/>
					<input type='password' onKeyPress={hitKey} placeholder="New Password" ref={confirmpasswordRef} />
					<br/>
					<input type='submit' onClick={updatePassword} value='SAVE' />
				</form>	
			</div>
		);			
	}
};

export default userConsumer(ProfileChangePassword);