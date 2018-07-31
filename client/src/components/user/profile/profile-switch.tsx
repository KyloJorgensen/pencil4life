'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect, NavLink } from "react-router-dom";
import Profile from './profile';
import ProfileEdit from './profile-edit';
import ProfileChangePassword from './profile-change-password';
import NoMatch from '../../no-match';
import { IUserContext, userConsumer } from '../user-provider';

export interface ProfileSwitchProps {
	user: IUserContext;
}

class ProfileSwitch extends React.Component<ProfileSwitchProps> {
    constructor(props) {
        super(props);
    }

	render() {
		if (!this.props.user.userAccess) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: '/profile'}}}/>);
		}

		return (
			<div className="profile-page-wrapper">
				<div className="container">
					<NavLink exact to={'/profile'} activeClassName="selected" ><h2>PROFILE</h2></NavLink>
                    <Switch>
                    	<Route exact path="/profile" component={Profile} />
                        <Route path="/profile/edit" component={ProfileEdit} />
                        <Route path="/profile/changepassword" component={ProfileChangePassword} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default userConsumer(ProfileSwitch);