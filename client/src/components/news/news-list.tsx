'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import NewsListItem from './news-list-item';
import { INewsContext, newsConsumer } from './news-provider';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface NewsListProps extends NewsListDefaultProps {
	news: INewsContext;
	user: IUserContext;
}

export interface NewsListDefaultProps {
	discontinued?: boolean;
	limit?: number;
}

class NewsList extends React.Component<NewsListProps> {
	public static defualtProps: NewsListDefaultProps = {
		discontinued: false,
		limit: 10,
	}
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
		this.props.news.getNewsItems();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    	let update = false;

    	if (prevProps.discontinued != this.props.discontinued) {
	    	update = true;
		}
		
    	if (prevProps.limit != this.props.limit) {
	    	update = true;
    	}

    	if (update) {
    		let query = {
    			discontinued: this.props.discontinued,
    			limit: this.props.limit,
			}
			this.props.news.getNewsItems(query);
    	}
    }

	render() {
		const { admin } = this.props.user;
		let NewsItemList = [];
		if (this.props.news.newsItems) {
			this.props.news.newsItems.forEach(function(newsItemKey) {
				NewsItemList.push(<NewsListItem key={newsItemKey} _newsItemId={newsItemKey}/>)
			});
		}
		return (
			<div className="news-list-wrapper" >
				{admin ? (
					<div>
						<Link to="/news/newitem">NEW ITEM</Link>
						<br/>
					</div>
				) : ''}
				<ul className='news-item-list' >
					{NewsItemList}
				</ul>
			</div>
		);			
	}
};

export default userConsumer(newsConsumer(NewsList));