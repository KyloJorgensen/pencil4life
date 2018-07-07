'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";

import NewsPage from './news-page';
import NewsItem from './news-item';
import NewsItemEdit from './news-item-edit';
import NewsNewItem from './news-new-item';
import NoMatch from '../no-match';

class NewsSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="news-page-wrapper">
				<div className="container">
					<NavLink exact to={'/news'} activeClassName="selected" ><h2>News</h2></NavLink>
                    <Switch>
						<Route exact path="/news" component={NewsPage} />
	                    <Route path="/news/newitem" component={NewsNewItem} />
	                    <Route path="/news/item/:_newsItemId" component={NewsItem} />
	                    <Route path="/news/edit/:_newsItemId" component={NewsItemEdit} />
                        <Route component={NoMatch}/>
                    </Switch>
				</div>
			</div>
		);		
	}
};

export default NewsSwitch;