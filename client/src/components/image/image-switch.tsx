'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect, NavLink } from "react-router-dom";
import ImagePage from './image-page';
import Image from './image';
import ImageEdit from './image-edit';
import ImageNew from './image-new';
import ImageNewPage from './image-new-page';
import NoMatch from '../no-match';
import { IUserContext, userConsumer } from '../user/user-provider';
import { Location } from 'history';

export interface ImageSwitchProps {
	user: IUserContext;
	location: Location;
}

class ImageSwitch extends React.Component<ImageSwitchProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		if (!this.props.user.admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: this.props.location.pathname}}}/>)
		}
		return (
			<div className="image-page-wrapper">
				<div className="container">
					<NavLink exact to={'/image'} activeClassName="selected" ><h2>Images</h2></NavLink>
                    <Switch>
						<Route exact path="/image" component={ImagePage} />
	                    <Route path="/image/new" component={ImageNewPage} />
	                    <Route path="/image/item/:_imageId" component={Image} />
	                    <Route path="/image/edit/:_imageId" component={ImageEdit} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default userConsumer(ImageSwitch);