'use strict';

import * as React from 'react'
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import CommissionPage from './commission-page';
import NoMatch from '../no-match';

class CommissionSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="commission-switch-wrapper">
				<div className="container">
					<NavLink exact to={'/commission'} activeClassName="selected" ><h2>Commission</h2></NavLink>
                    <Switch>
						<Route exact path="/commission" component={CommissionPage} />
                        <Route path="/commission/commission" component={NoMatch} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default CommissionSwitch;