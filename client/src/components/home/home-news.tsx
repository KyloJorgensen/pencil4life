'use strict';

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import NewsList from '../news/news-list';

class HomeNews extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="news-wrapper p-2" >
                <NavLink exact to={'/news'} activeClassName="selected" ><h2>News</h2></NavLink>
				<NewsList limit={4} />
                <NavLink exact to={'/news'} activeClassName="selected" >More News</NavLink>
			</div>
		);			
	}
};

export default HomeNews;