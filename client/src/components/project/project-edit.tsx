'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import {Redirect} from "react-router-dom";
import * as Datetime from 'react-datetime';
import ImageNew from '../image/image-new';
import ImageEdit from '../image/image-edit';
import { IProjectContext, updateProjectParams, projectConsumer } from './project-provider';
import { IUserContext, userConsumer } from '../user/user-provider';
import { Location } from 'history';

export interface ProjectEditProps {
	project: IProjectContext;
	user: IUserContext;
	location: Location;
}

export interface ProjectEditState {
	redirect: boolean;
	required: boolean;
	title: string;
	year: Date;
	imageRequired: boolean;
	coverImage: {
		_imageId: string;
	}; 
	details: any;
	discontinued: boolean;
}

export interface ProjectEditMethods {
	editField: (event: UIEvent) => void;
	handleCheckboxChange: (event: UIEvent) => void;
	yearChanged: (momentDateTime: Date) => void;
	hitKey: (event: UIEvent) => void;
	updateProject: (event: UIEvent) => void;
	updateProjectResult: (error: boolean) => void;
	onRichTextChange: (value) => void;
	redirect: () => void;
	addNewImageResult: (error: boolean, _imageId: string) => void;
}

class ProjectEdit extends React.Component<ProjectEditProps, ProjectEditState> implements ProjectEditMethods {
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	required: false,
        	title: null,
        	year: null,
        	imageRequired: false,
        	coverImage: {
        		_imageId: null,
        	}, 
        	details: RichTextEditor.createEmptyValue(),
        	discontinued: false,
        };

		this.editField = this.editField.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.yearChanged = this.yearChanged.bind(this);
		this.hitKey = this.hitKey.bind(this);
		this.updateProject = this.updateProject.bind(this);
		this.updateProjectResult = this.updateProjectResult.bind(this);
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

	yearChanged(momentDateTime) {
		this.setState((prevState) => {
			return {year: momentDateTime};
		});
	}

	hitKey(event) {
		if (event.key == 'Enter') {
			this.updateProject(event);
		}
	}

	updateProject(event) {
		event.preventDefault();

		const { title, year, details, coverImage, discontinued } = this.state;

		if (!title || !year) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

		const changes: updateProjectParams = {
			title: title,
			year: year,
			details: details.toString('html'),
			coverImage: coverImage,
			discontinued: discontinued
		};

		const params: updateProjectParams = {_id: this.props.project.project._projectId};
		let vaildKeys = ['title', 'year', 'details', 'coverImage', 'discontinued'];

		vaildKeys.forEach((vaildKey) => {
			if (changes[vaildKey] != this.props[vaildKey]) {
				if (vaildKey == 'coverImage') {
					if (changes.coverImage._imageId !== this.props.project.project.coverImage._imageId) {
						params.coverImage = params.coverImage || {_imageId: null};
						params.coverImage._imageId = changes.coverImage._imageId;
					} 
					return;
				}
				params[vaildKey] = changes[vaildKey];
			}
		});

		this.props.project.updateProject(params, this.updateProjectResult);

		this.setState(() => {
			return {required: false};
		});
	}

	updateProjectResult(error) {
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
					coverImage: {
						_imageId: _imageId,
					},
					imageRequired: false,
				};
			});
		} 
	}

    componentWillMount() {
		const { title, year, details, coverImage, discontinued } = this.props.project.project;
		const { _imageId } = coverImage;

		this.setState(() => {
			return {
				title: title,
				year: year,
				details: RichTextEditor.createValueFromString(details, 'html'),
				coverImage: {
					_imageId: _imageId,
				},
				discontinued: discontinued,
			}
		});
    }

	componentDidUpdate(prevProps: ProjectEditProps, prevState) {
		let propsToCheck = ['title', 'year', 'coverImage', 'details', 'discontinued'];
		let _state = null;
		propsToCheck.forEach((propToCheck) => {
			if (prevProps.project.project[propToCheck] !== this.props.project.project[propToCheck]) {
				_state = _state == null ? {} : _state;
				if (propToCheck == 'coverImage') {
					if (prevProps.project.project.coverImage._imageId !== this.props.project.project.coverImage._imageId) {
						_state.coverImage = _state.coverImage || {};
						_state.coverImage._imageId = this.props.project.project.coverImage._imageId;
					}
				} else if (propToCheck == 'details') {
					_state[propToCheck] = RichTextEditor.createValueFromString(this.props.project.project[propToCheck], 'html');
				} else {
					_state[propToCheck] = this.props.project.project[propToCheck];
				}
			}
		})
		if (_state) {
			this.setState(_state);
		}
	}

    componentDidMount() {
    	this.props.project.getProject(this.props.project.project._projectId);
    }

	render() {
		const { addNewImageResult, hitKey, handleCheckboxChange, editField, updateProject, yearChanged, onRichTextChange} = this;
		const { title, coverImage, imageRequired, redirect, required, year, details, discontinued } = this.state;
		const { _imageId } = coverImage;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;


		if (redirect) {
			return (<Redirect to={'/project/item/'+this.props.project.project._projectId} />);
		}

		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}

		return (
			<div className="project-edit-wrapper" >
				<h3>EDIT PROJECT</h3>
				<label>Cover Image</label>
				{_imageId ? <ImageEdit _imageId={_imageId} updateRedirect={false} /> : <ImageNew required={imageRequired} addNewImageResult={addNewImageResult} />}
				<label>Title{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<input type='text' onKeyPress={hitKey} placeholder="Great Project" onChange={editField} name='title' value={title} />
				<br/>
				<label>Year{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<Datetime dateFormat="YYYY" timeFormat={false} value={year} onChange={yearChanged} />
				<br/>
				<label>Details</label>
				<br/>
				<RichTextEditor value={details} onChange={onRichTextChange} />
				<label>Discontinued</label>
				<br/>
				<input type='checkbox' checked={!!discontinued} name="discontinued" onChange={handleCheckboxChange} />
				<br/>
				<input type='submit' onClick={updateProject} value='SAVE' />
			</div>
		);			
	}
};

export default userConsumer(projectConsumer(ProjectEdit));