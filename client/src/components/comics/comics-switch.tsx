'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import ComicsPage from './comics-page';
import NoMatch from '../no-match';

class ComicsSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="comics-switch-wrapper">
				<div className="container">
					<NavLink exact to={'/comics'} activeClassName="selected" ><h2>Comics</h2></NavLink>
                    <Switch>
						<Route exact path="/comics" component={ComicsPage} />
                        <Route path="/comics/comics" component={NoMatch} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);			
	}
};

export default ComicsSwitch;
