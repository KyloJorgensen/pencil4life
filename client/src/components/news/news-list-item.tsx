'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link } from 'react-router-dom';
import { INewsContext, newsConsumer } from './news-provider';

export interface NewsListItemProps {
	news: INewsContext;
	_newsItemId: string;
}

class NewsListItem extends React.Component<NewsListItemProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
		this.props.news.getNewsItem(this.props._newsItemId);
    }

	render() {
		const { post, createdUpdatedDateTime } = this.props.news.newsItem;
		return (
			<li className="news-list-item-wrapper" >
				<Link className="news-link" to={'/news/item/'+this.props._newsItemId} >
					<RichTextEditor value={RichTextEditor.createValueFromString(post, 'html')} readOnly={true} />	
				</Link>
				<p className='news-created-updated-date-time' >{createdUpdatedDateTime}</p>
			</li>
		);			
	}
};

export default newsConsumer(NewsListItem);