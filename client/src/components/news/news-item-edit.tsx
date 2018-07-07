'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect } from 'react-router-dom';
import { INewsContext, newsConsumer } from './news-provider';
import { IUserContext, userConsumer } from '../user/user-provider';
import { Location } from 'history';

export interface NewsItemEditProps {
	news: INewsContext;
	user: IUserContext;
	location: Location;
}

export interface NewsItemEditState {
	redirect: boolean;
	required: boolean;
	post: any;
	discontinued: boolean;
}

export interface NewsItemEditMethods {
	hitKey: (event: UIEvent) => void;
	editField: (event: UIEvent) => void;
	handleCheckboxChange: (event: UIEvent) => void;
	updateNewsItem: (event: UIEvent) => void;
	updateNewsItemResult: (event: UIEvent) => void;
	onRichTextChange: (event: UIEvent) => void;
	redirect: (event: UIEvent) => void;
}

class NewsItemEdit extends React.Component<NewsItemEditProps, NewsItemEditState, NewsItemEditMethods> implements NewsItemEditMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	required: false,
        	post: RichTextEditor.createEmptyValue(),
        	discontinued: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.editField = this.editField.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.updateNewsItem = this.updateNewsItem.bind(this);
		this.updateNewsItemResult = this.updateNewsItemResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
		this.redirect = this.redirect.bind(this);
    }

    componentWillMount() {
		this.setState(() => {
			return {
				post: RichTextEditor.createValueFromString(this.props.news.newsItem.post, 'html'),
				discontinued: this.props.news.newsItem.discontinued,
			}
		});
    }

	componentDidUpdate(prevProps: NewsItemEditProps, prevState) {
		let propsToCheck = ['post', 'discontinued'];
		let _state = null;
		propsToCheck.forEach((propToCheck) => {
			if (prevProps.news.newsItem[propToCheck] !== this.props.news.newsItem[propToCheck]) {
				_state = _state == null ? {} : _state;
				_state[propToCheck] = this.props.news.newsItem[propToCheck];
				if (propToCheck == 'post') {
					_state[propToCheck] = RichTextEditor.createValueFromString(this.props.news.newsItem[propToCheck], 'html');
				}
			}
		})
		if (_state) {
			this.setState(() => {
				return _state;
			});
		}
	}

    componentDidMount() {
    	this.props.news.getNewsItem(this.props.news.newsItem._newsItemId);
    }

    editField(e) {
        let _state = this.state;
        _state[e.target.name] = e.target.value;
        this.setState(_state);
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.updateNewsItem(event);
        }
	}

    updateNewsItem(event) {
		event.preventDefault();
		const params = {_id: this.props.news.newsItem._newsItemId}		
		let vaildKeys = ['post', 'discontinued'];

		for (let i = 0; i < vaildKeys.length; i++) {
			let _new = this.state[vaildKeys[i]];
			if (vaildKeys[i] == 'post') {
				_new = _new.toString('html');
			}

			if (_new != this.props.news.newsItem[vaildKeys[i]]) {
				params[vaildKeys[i]] = _new;
			}
		}

		this.props.news.updateNewsItem(params, this.updateNewsItemResult);
    }

    updateNewsItemResult(error) {
    	if (error) {
			this.setState(() => {
				return {required: true};
			});
    	} else {
			this.redirect();
    	} 
    }

    onRichTextChange(value) {
		this.setState(() => {
			return {post: value};
		});
    }

    handleCheckboxChange(event) {
		const { name, checked } = event.target;

		this.setState((prevState) => {
			prevState[name] = checked;
			return {required: true};
		});
    }

	redirect() {
		this.setState(() => {
			return {redirect: true};
		});
	}

	render() {

		const { updateNewsItem, onRichTextChange, handleCheckboxChange } = this;
		const { redirect, required, post, discontinued } = this.state;
		const { location } = this.props;
		const { _newsItemId, createdUpdatedDateTime	} = this.props.news.newsItem;
		const { admin } = this.props.user;

		if (redirect) {
			return (<Redirect to={'/news/item/'+_newsItemId} />);
		}

		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: location.pathname}}}/>)
		}
		return (
			<div className="news-item-edit-wrapper" >
				<form onSubmit={updateNewsItem}>
					<h3>EDIT ITEM</h3>
					<label>Post{required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<RichTextEditor value={post} onChange={onRichTextChange} />
					<br/>
					<p className='news-created-updated-date-time' >{createdUpdatedDateTime}</p>
					<label>Discontinued</label>
					<br/>
					<input type='checkbox' checked={!!discontinued} name="discontinued" onChange={handleCheckboxChange} />
					<br/>
					<input type='submit' onClick={updateNewsItem} value='SAVE' />
				</form>	
			</div>
		);			
	}
};

export default userConsumer(newsConsumer(NewsItemEdit));