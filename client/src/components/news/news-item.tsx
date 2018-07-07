'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link } from "react-router-dom";
import { INewsContext, newsConsumer } from './news-provider';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface NewsItemProps {
	news: INewsContext;
	user: IUserContext;
}

class NewsItem extends React.Component<NewsItemProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.news.getNewsItem(this.props.news.newsItem._newsItemId);
    }

	render() {
		return (
			<div className="news-item-wrapper" >
				<RichTextEditor value={RichTextEditor.createValueFromString(this.props.news.newsItem.post, 'html')} readOnly={true} />
				<p className='news-created-updated-date-time' >{this.props.news.newsItem.createdUpdatedDateTime}</p>
				{this.props.user.admin ? <Link to={'/news/edit/'+this.props.news.newsItem._newsItemId}>EDIT</Link> : ''}
			</div>
		);			
	}
};

export default userConsumer(newsConsumer(NewsItem));