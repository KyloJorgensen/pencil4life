'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import ContactPage from './contact-page';
import NoMatch from '../no-match';

class ContactSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="contact-switch-wrapper">
				<div className="container">
					<NavLink exact to={'/contact'} activeClassName="selected" ><h2>Contact</h2></NavLink>
                    <Switch>
						<Route exact path="/contact" component={ContactPage} />
                        <Route path="/contact/contact" component={NoMatch} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default ContactSwitch;