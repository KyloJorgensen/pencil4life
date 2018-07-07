'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect } from "react-router-dom";
import { newsConsumer, INewsContext } from './news-provider';
import { userConsumer, IUserContext } from '../user/user-provider';
import { Location } from 'history';

export interface NewsNewItemProps {
	user: IUserContext;
	news: INewsContext;
	location: Location;
}

export interface NewsNewItemState {
	required: boolean;
	post: any;
	_newsItemId: false | string;
}

export interface NewsNewItemMethods {
	addNewNewsItem: (event: UIEvent) => void;
	addNewNewsItemResult: (error: any, _newsItemId: string) => void;
	onRichTextChange: (value: any) => void;
}

class NewsNewItem extends React.Component<NewsNewItemProps, NewsNewItemState, NewsNewItemMethods> implements NewsNewItemMethods {
    constructor(props) {
        super(props);
        this.state = {
        	post: RichTextEditor.createEmptyValue(),
        	_newsItemId: false,
        	required: false,
        };

		this.addNewNewsItem = this.addNewNewsItem.bind(this);
		this.addNewNewsItemResult = this.addNewNewsItemResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
    }

    addNewNewsItem(event) {
		event.preventDefault();
		let post = this.state.post;
		if (!post) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}
		this.props.news.addNewsItem(post.toString('html'), this.addNewNewsItemResult);
		this.setState(() => {
			return {required: false};
		});
    }

    addNewNewsItemResult(error, _newsItemId) {
    	if (error) {
			this.setState(() => {
				return {required: true};
			});
    	} else {
			this.setState(() => {
				return {_newsItemId: _newsItemId};
			});
    	} 
    }

    onRichTextChange(value) {
		this.setState(() => {
			return {post: value};
		});
    }

	render() {
		if (this.state._newsItemId) {
			return (<Redirect to={'/news/item/'+this.state._newsItemId} />);
		}
		if (!this.props.user.admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: this.props.location.pathname}}}/>)
		}
	
		return (
			<div className="news-new-item-wrapper" >
				<form onSubmit={this.addNewNewsItem}>
					<h3>New Item</h3>
					<label>Post{this.state.required ? (<span className="errortext" >* Needs to have something in the text field below.</span>) : ''}</label>
					<br/>
					<RichTextEditor value={this.state.post} onChange={this.onRichTextChange} />
					<input type='submit' onClick={this.addNewNewsItem} value='SAVE' />
				</form>	
			</div>
		);			
	}
};

export default userConsumer(newsConsumer(NewsNewItem));