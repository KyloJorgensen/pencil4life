'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect, Link } from "react-router-dom";
import ImageNew from '../image/image-new';
import ImageEdit from '../image/image-edit';
import { IDoodleContext, updateDoodleParams, doodleConsumer } from './doodle-provider';
import { IUserContext, userConsumer } from '../user/user-provider';
import ImageEditingTool from '../image/image-editing-tool';
import { Location } from 'history';
import { Popout } from '../utilities/styled.components';
import styled from 'styled-components';

const DoodleEditWrapper = styled.div`
	color: white;
	
	> .exit {
		color: white;
		background-color: #e98383;
		width: 2em;
		line-height: 2em;
		text-align: center; 
		display: block;
		margin-left: auto;
		margin-right: 1em;
	}
`;

export interface DoodleEditProps {
	doodle: IDoodleContext;
	user: IUserContext;
	location: Location;
}

export interface DoodleEditState {
	redirect: boolean;
	title: string;
	_imageId: string;
	details: any;
	discontinued: boolean;
}

export interface DoodleEditMethods {
	editField: (event: UIEvent) => void;
	handleCheckboxChange: (event: UIEvent) => void;
	hitKey: (event: UIEvent) => void;
	updateDoodle: (event: UIEvent) => void;
	updateDoodleResult: (error: boolean) => void;
	onRichTextChange: (value) => void;
	redirect: () => void;
	handleCoverImageChange: (_imageId) => void;
	removeImage: () => void;
}

class DoodleEdit extends React.Component<DoodleEditProps, DoodleEditState> implements DoodleEditMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	title: null,
        	_imageId: null,
        	details: RichTextEditor.createEmptyValue(),
        	discontinued: false,
        };

		this.editField = this.editField.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.hitKey = this.hitKey.bind(this);
		this.updateDoodle = this.updateDoodle.bind(this);
		this.updateDoodleResult = this.updateDoodleResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
		this.redirect = this.redirect.bind(this);
		this.handleCoverImageChange = this.handleCoverImageChange.bind(this);
		this.removeImage = this.removeImage.bind(this);
	}
	
	handleCoverImageChange(_imageId) {
		this.setState(() => {
			return {
				_imageId: _imageId,
			};
		});
	}

	removeImage() {
		this.setState(() => {
			return {
				_imageId: null,
			}
		});
	}

	editField(event) {
		const { name, value } = event.target;
		this.setState((prevState) => {
			prevState[name] = value;
			return prevState;
		});
	}

	handleCheckboxChange(event) {
		const { name, checked } = event.target;
		this.setState((prevState) => {
			prevState[name] = checked;
			return prevState;
		});
	}

	hitKey(event) {
		if (event.key == 'Enter') {
			this.updateDoodle(event);
		}
	}

	updateDoodle(event) {
		event.preventDefault();

		const { title, details, _imageId, discontinued } = this.state;

		const changes: updateDoodleParams = {
			title: title,
			details: details.toString('html'),
			_imageId: _imageId,
			discontinued: discontinued
		};

		const params: updateDoodleParams = {_id: this.props.doodle.doodle._doodleId};
		let vaildKeys = ['title', 'details', '_imageId', 'discontinued'];

		vaildKeys.forEach((vaildKey) => {
			if (changes[vaildKey] != this.props.doodle.doodle[vaildKey]) {
				params[vaildKey] = changes[vaildKey];
			}
		});

		this.props.doodle.updateDoodle(params, this.updateDoodleResult);
	}

	updateDoodleResult(error) {
		if (error) {
			console.log(error)
		} else {
			this.redirect();
		} 
	}

	onRichTextChange(value) {
		this.setState(() => {
			return {details: value};
		});
	}

	redirect() {
		this.setState(() => {
			return {redirect: true};
		});
	}

    componentWillMount() {
		const { title, details, _imageId, discontinued } = this.props.doodle.doodle;

		this.setState(() => {
			return {
				title: title,
				details: RichTextEditor.createValueFromString(details, 'html'),
				_imageId: _imageId,
				discontinued: discontinued,
			}
		});
    }

	componentDidUpdate(prevProps: DoodleEditProps, prevState) {
		let propsToCheck = ['title', 'year', 'coverImage', 'details', 'discontinued'];
		let _state = null;
		propsToCheck.forEach((propToCheck) => {
			if (prevProps.doodle.doodle[propToCheck] !== this.props.doodle.doodle[propToCheck]) {
				_state = _state == null ? {} : _state;
				if (propToCheck == 'details') {
					_state[propToCheck] = RichTextEditor.createValueFromString(this.props.doodle.doodle[propToCheck], 'html');
				} else {
					_state[propToCheck] = this.props.doodle.doodle[propToCheck];
				}
			}
		})
		if (_state) {
			this.setState(_state);
		}
	}

    componentDidMount() {
    	this.props.doodle.getDoodle(this.props.doodle.doodle._doodleId);
    }

	render() {
		const { hitKey, handleCheckboxChange, editField, updateDoodle, onRichTextChange, handleCoverImageChange, removeImage} = this;
		const { title, _imageId, redirect, details, discontinued } = this.state;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;
		const { _doodleId } = this.props.doodle.doodle;


		if (redirect) {
			return (<Redirect to={'/doodle/item/'+this.props.doodle.doodle._doodleId} />);
		}

		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}

		return (
			<Popout>
				<DoodleEditWrapper>
					<Link className="exit" to={`/doodle/item/${_doodleId}`}>X</Link>
					<h3>EDIT DOODLE</h3>
					<label>Image</label>
					<ImageEditingTool _imageId={_imageId} onChange={handleCoverImageChange} removeImage={removeImage} />
					<label>Title</label>
					<br/>
					<input type='text' onKeyPress={hitKey} onChange={editField} name='title' placeholder="Great Doodle" value={title} />
					<br/>
					<label>Details</label>
					<br/>
					<RichTextEditor value={details} onChange={onRichTextChange} />
					<label>Discontinued</label>
					<br/>
					<input type='checkbox' checked={!!discontinued} name="discontinued" onChange={handleCheckboxChange} />
					<br/>
					<input type='submit' onClick={updateDoodle} value='SAVE' />
				</DoodleEditWrapper>
			</Popout>
		);			
	}
};

export default userConsumer(doodleConsumer(DoodleEdit));