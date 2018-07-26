'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import DoodlePage from './doodle-page';
import NoMatch from '../no-match';

class DoodleSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="doodle-switch-wrapper">
				<div className="container">
					<NavLink exact to={'/doodle'} activeClassName="selected" ><h2>Doodles</h2></NavLink>
                    <Switch>
						<Route exact path="/doodle" component={DoodlePage} />
						<Route exact path="/doodle/new" component={DoodlePage} />
						<Route exact path="/doodle/item/:_doodleId" component={DoodlePage} />
						<Route exact path="/doodle/edit/:_doodleId" component={DoodlePage} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default DoodleSwitch;