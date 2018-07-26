'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { userConsumer, IUserContext } from '../user/user-provider';

export interface ProfileProps {
	user: IUserContext;
}

class Profile extends React.Component<ProfileProps> {
    constructor(props) {
        super(props);
    }

	render() {
		const { email, firstname, lastname } = this.props.user;
		const { logout } = this.props.user;

		return (
			<div className="profile-wrapper" >
				<label>Email</label>
				<br/>
				<p>{email}</p>
				<br/>
				<label>First Name</label>
				<br/>
				<p>{firstname}</p>
				<br/>
				<label>Last Name</label>
				<br/>
				<p>{lastname}</p>
				<br/>
				<Link to="/profile/edit">EDIT</Link>
				<br/>			
				<Link to="/profile/changepassword">Change Password</Link>
				<br/>
                <a onClick={logout} >LOGOUT</a>		
			</div>
		);			
	}
};

export default userConsumer(Profile);