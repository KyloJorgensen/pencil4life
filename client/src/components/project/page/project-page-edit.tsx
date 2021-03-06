'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect, Link } from "react-router-dom";
import ImageNew from '../../image/image-new';
import ImageEdit from '../../image/image-edit';
import { IProjectPageContext, updateProjectPageParams, projectPageConsumer } from './project-page-provider';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { Location } from 'history';
import ImageEditingTool from '../../image/image-editing-tool';
import { Popout } from '../../utilities/styled.components';
import styled from 'styled-components';

const ProjectPageEditWrapper = styled.div`
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

export interface ProjectPageEditProps {
	projectPage: IProjectPageContext;
	user: IUserContext;
	location: Location;
}

export interface ProjectPageEditState {
	redirect: boolean;
	required: boolean;
	title: string;
	page: number;
	_imageId: string;
	details: any;
	discontinued: boolean;
}

export interface ProjectPageEditMethods {
	editField: (event: UIEvent) => void;
	handleCheckboxChange: (event: UIEvent) => void;
	hitKey: (event: UIEvent) => void;
	updateProjectPage: (event: UIEvent) => void;
	updateProjectPageResult: (error: boolean) => void;
	onRichTextChange: (value) => void;
	redirect: () => void;
}

class ProjectPageEdit extends React.Component<ProjectPageEditProps, ProjectPageEditState> implements ProjectPageEditMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	required: false,
        	title: null,
        	page: null,
        	_imageId: null,
        	details: RichTextEditor.createEmptyValue(),
        	discontinued: false,
        };

		this.editField = this.editField.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.hitKey = this.hitKey.bind(this);
		this.updateProjectPage = this.updateProjectPage.bind(this);
		this.updateProjectPageResult = this.updateProjectPageResult.bind(this);
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
			this.updateProjectPage(event);
		}
	}

	updateProjectPage(event) {
		event.preventDefault();

		const { title, page, details, _imageId, discontinued } = this.state;

		const changes: updateProjectPageParams = {
			title: title,
			page: page,
			details: details.toString('html'),
			_imageId: _imageId,
			discontinued: discontinued
		};

		const params: updateProjectPageParams = {_projectPageId: this.props.projectPage.projectPage._projectPageId};
		let vaildKeys = ['title', 'page', 'details', '_imageId', 'discontinued'];

		vaildKeys.forEach((vaildKey) => {
			if (changes[vaildKey] != this.props.projectPage.projectPage[vaildKey]) {
				params[vaildKey] = changes[vaildKey];
			}
		});

		this.props.projectPage.updateProjectPage(this.props.projectPage._projectId, params, this.updateProjectPageResult);

		this.setState(() => {
			return {required: false};
		});
	}

	updateProjectPageResult(error) {
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
			return {details: value};
		});
	}

	redirect() {
		this.setState(() => {
			return {redirect: true};
		});
	}

    componentWillMount() {
		const { title, page, details, _imageId, discontinued } = this.props.projectPage.projectPage;

		this.setState(() => {
			return {
				title: title,
				page: page,
				details: RichTextEditor.createValueFromString(details, 'html'),
				_imageId: _imageId,
				discontinued: discontinued,
			}
		});
    }

	componentDidUpdate(prevProps: ProjectPageEditProps, prevState) {
		let propsToCheck = ['title', 'year', 'coverImage', 'details', 'discontinued'];
		let _state = null;
		propsToCheck.forEach((propToCheck) => {
			if (prevProps.projectPage.projectPage[propToCheck] !== this.props.projectPage.projectPage[propToCheck]) {
				_state = _state == null ? {} : _state;
				if (propToCheck == 'details') {
					_state[propToCheck] = RichTextEditor.createValueFromString(this.props.projectPage.projectPage[propToCheck], 'html');
				} else {
					_state[propToCheck] = this.props.projectPage.projectPage[propToCheck];
				}
			}
		})
		if (_state) {
			this.setState(_state);
		}
	}

    componentDidMount() {
    	this.props.projectPage.getProjectPage(this.props.projectPage._projectId, this.props.projectPage.projectPage._projectPageId);
    }

	render() {
		const { hitKey, handleCheckboxChange, editField, updateProjectPage, onRichTextChange, handleCoverImageChange, removeImage} = this;
		const { title, _imageId, redirect, required, page, details, discontinued } = this.state;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;
		const { total, _projectId } = this.props.projectPage;
		const { _projectPageId } = this.props.projectPage.projectPage;


		if (redirect) {
			return (<Redirect to={'/project/item/'+this.props.projectPage._projectId+'/'+this.props.projectPage.projectPage._projectPageId} />);
		}

		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}

		return (
			<Popout>
				<ProjectPageEditWrapper>
					<Link className="exit" to={`/project/item/${_projectId}/${_projectPageId}`}>X</Link>
					<h3>EDIT PROJECT PAGE</h3>
					<label>Image</label>
					<ImageEditingTool _imageId={_imageId} onChange={handleCoverImageChange} removeImage={removeImage} />
					<label>Title{required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='text' onKeyPress={hitKey} onChange={editField} name='title' placeholder="Great ProjectPage" value={title} />
					<br/>
					<label>Page</label>
					<br/>
					<input type="number" onKeyPress={hitKey} onChange={editField} name="page" min={1} max={total} value={page}/>
					<br/>
					<label>Details</label>
					<br/>
					<RichTextEditor value={details} onChange={onRichTextChange} />
					<label>Discontinued</label>
					<br/>
					<input type='checkbox' checked={!!discontinued} name="discontinued" onChange={handleCheckboxChange} />
					<br/>
					<input type='submit' onClick={updateProjectPage} value='SAVE' />
				</ProjectPageEditWrapper>
			</Popout>
		);			
	}
};

export default userConsumer(projectPageConsumer(ProjectPageEdit));