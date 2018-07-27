'use strict';

import * as  React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import AboutPage from './about-page';
import NoMatch from '../no-match';

class AboutSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="about-switch-wrapper">
				<div className="container">
					<NavLink exact to={'/about'} activeClassName="selected" ><h2>About</h2></NavLink>
                    <Switch>
						<Route exact path="/about" component={AboutPage} />
                        <Route path="/about/about" component={NoMatch} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default AboutSwitch;