'use strict';

import * as React from 'react';
import { Redirect } from "react-router-dom";
import { userConsumer, IUserContext, UpdateUserParams } from '../user/user-provider';

export interface ProfileEditProps {
	user: IUserContext;
}

export interface ProfileEditState {
	redirect: boolean;
	required: boolean;
	email: string;
	firstname: string;
	lastname: string;
}

export interface ProfileEditMethods {
	hitKey: (event: UIEvent) => void;
	editField: (event: UIEvent) => void;
	updateUser: (event: UIEvent) => void;
	updateUserResult: (error: boolean) => void;
	redirect: () => void;
}

class ProfileEdit extends React.Component<ProfileEditProps, ProfileEditState> implements ProfileEditMethods {
    constructor(props) {
        super(props);
        this.state = {
			redirect: false,
			required: false,
        	email: null,
        	firstname: null,
        	lastname: null,
        };

		this.hitKey = this.hitKey.bind(this);
		this.editField = this.editField.bind(this);
		this.updateUser = this.updateUser.bind(this);
		this.updateUserResult = this.updateUserResult.bind(this);
		this.redirect = this.redirect.bind(this);
    }

    componentWillMount() {
		const { email, firstname, lastname } = this.props.user;
		this.setState(() => {
			return {
				email: email,
				firstname: firstname,
				lastname: lastname,
			}
		});
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.updateUser(event);
        }
	}

    editField(event) {
		const { name, value} = event.target;
		this.setState((preState) => {
			preState[name] = value;
			return preState;
		});
        let _state = this.state;
        _state[event.target.name] = event.target.value;
        this.setState(_state);
    }

    updateUser(event) {
		event.preventDefault();
		const params: UpdateUserParams = {};
		let vaildKeys = ['email', 'firstname', 'lastname'];

		for (let i = 0; i < vaildKeys.length; i++) {
			let _new = this.state[vaildKeys[i]];
			if (_new != this.props.user[vaildKeys[i]]) {
				params[vaildKeys[i]] = _new;
			}
		}


		this.props.user.updateUser(params, this.updateUserResult);
		this.redirect();
	}

	updateUserResult(error) {
		if (error) {
			this.setState(() => {
				return {
					required: true,
				};
			});
		} else {
			this.setState(() => {
				return {
					redirect: true,
				};
			});
		}
	}

	redirect() {
		this.setState(() => {
			return {
				redirect: true,
			};
		});
	}

	render() {
		const { hitKey, updateUser, editField } = this;
		const { redirect, email, firstname, lastname} = this.state;

		if (redirect) {
			return (<Redirect to='/profile'/>);
		}
		return (
			<div className="profile-wrapper" >
				<h1>Profile</h1>
				<form onSubmit={updateUser}>
					<label>Email</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="joe.jones@example.com" onChange={editField} name='email' value={email} />
					<br/>
					<label>First Name</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="Joe" onChange={editField} name='firstname' value={firstname} />
					<br/>
					<label>Last Name</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="Jones" onChange={editField} name='lastname' value={lastname} />
					<br/>
					<input type='submit' onClick={updateUser} value='SAVE' />
				</form>	
			</div>
		);			
	}
};

export default userConsumer(ProfileEdit);