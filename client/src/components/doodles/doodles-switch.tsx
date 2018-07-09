'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import DoodlesPage from './doodles-page';
import NoMatch from '../no-match';

class DoodlesSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="doodles-switch-wrapper">
				<div className="container">
					<NavLink exact to={'/doodles'} activeClassName="selected" ><h2>Doodles</h2></NavLink>
                    <Switch>
						<Route exact path="/doodles" component={DoodlesPage} />
                        <Route path="/doodles/doodles" component={NoMatch} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default DoodlesSwitch;