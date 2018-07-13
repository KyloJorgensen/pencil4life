'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import {Redirect} from "react-router-dom";
import * as Datetime from 'react-datetime';
import ImageNew from '../../image/image-new';
import ImageEdit from '../../image/image-edit';
import { IProjectPageContext, updateProjectPageParams, projectPageConsumer } from './project-page-provider';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { Location } from 'history';

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
	imageRequired: boolean;
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
	addNewImageResult: (error: boolean, _imageId: string) => void;
}

class ProjectPageEdit extends React.Component<ProjectPageEditProps, ProjectPageEditState> implements ProjectPageEditMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	required: false,
        	title: null,
        	page: null,
        	imageRequired: false,
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
		this.addNewImageResult = this.addNewImageResult.bind(this);
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

		if (!title) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

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

	addNewImageResult(error, _imageId) {
		if (error) {
			this.setState(() => {
				return {imageRequired: true};
			});
		} else {
			this.setState(() => {
				return {
					_imageId: _imageId,
					imageRequired: false,
				};
			});
		} 
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
		const { addNewImageResult, hitKey, handleCheckboxChange, editField, updateProjectPage, onRichTextChange} = this;
		const { title, _imageId, imageRequired, redirect, required, page, details, discontinued } = this.state;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;
		const { total } = this.props.projectPage;


		if (redirect) {
			return (<Redirect to={'/project/item/'+this.props.projectPage._projectId+'/'+this.props.projectPage.projectPage._projectPageId} />);
		}

		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}

		return (
			<div className="project-page-edit-wrapper" >
				<form onSubmit={updateProjectPage}>
					<h3>EDIT PROJECT PAGE</h3>

					<label>Image</label>
					{_imageId ? <ImageEdit _imageId={_imageId} updateRedirect={false} /> : <ImageNew required={imageRequired} addNewImageResult={addNewImageResult} />}
					
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
				</form>	
			</div>
		);			
	}
};

export default userConsumer(projectPageConsumer(ProjectPageEdit));