'use strict';

import * as  React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import InfoPage from './info-page';
import NoMatch from '../no-match';

class InfoSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="info-switch-wrapper">
				<div className="container">
					<NavLink exact to={'/info'} activeClassName="selected" ><h2>Info</h2></NavLink>
                    <Switch>
						<Route exact path="/info" component={InfoPage} />
                        <Route path="/info/info" component={NoMatch} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default InfoSwitch;