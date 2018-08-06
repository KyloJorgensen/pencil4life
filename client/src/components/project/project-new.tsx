'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import {Redirect} from 'react-router-dom';
import * as Datetime from 'react-datetime';
import { Location } from 'history';
import ImageEditingTool from '../image/image-editing-tool';
import { IUserContext, userConsumer } from '../user/user-provider';
import { IProjectContext, addProjectParams, projectConsumer } from './project-provider';

export interface ProjectNewProps {
	user: IUserContext;
	project: IProjectContext;
	location: Location;
}

export interface ProjectNewState {
	_projectId: string;
	required: boolean;
	imageRequired: boolean;
	title: string;
	coverImage: {
		_imageId: string;
	};
	year: Date;
	details: any;
}

export interface ProjectNewMethods {
	hitKey: (event: UIEvent) => void;
	yearChanged: (date: Date) => void;
	addNewProject: (event: UIEvent) => void;
	addNewProjectResult: (error: boolean, _projectId: string) => void;
	onRichTextChange: (value: string) => void;
	handleCoverImageChange: (_imageId) => void;
	removeImage: () => void;
}


class ProjectNew extends React.Component<ProjectNewProps, ProjectNewState> implements ProjectNewMethods {
    constructor(props) {
        super(props);
        this.state = {
        	_projectId: null,
        	required: false,
        	imageRequired: false,
        	title: null,
        	coverImage: {
        		_imageId: null,
        	}, 
        	year: new Date(),
        	details: RichTextEditor.createEmptyValue(),
		};
		

		this.hitKey = this.hitKey.bind(this);
		this.yearChanged = this.yearChanged.bind(this);
		this.addNewProject = this.addNewProject.bind(this);
		this.addNewProjectResult = this.addNewProjectResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
		this.handleCoverImageChange = this.handleCoverImageChange.bind(this);
		this.removeImage = this.removeImage.bind(this);
	}

	hitKey(event) {
		if (event.key == 'Enter') {
			this.addNewProject(event);
		}
	}

	yearChanged(date) {
		this.setState(() => {
			return {year: date};
		});
	}

	titleRef: React.RefObject<HTMLInputElement> = React.createRef();

	addNewProject(event) {
		event.preventDefault();
		const title = this.titleRef.current.value;
		const { year, details, coverImage } = this.state;
		if (!title || !year) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

		const newProject: addProjectParams = {
			title: title,
			year: year,
			details: details.toString('html'),
		}

		if (coverImage._imageId != null) {
			newProject.coverImage = newProject.coverImage || {_imageId: ''};
			newProject.coverImage._imageId = coverImage._imageId;
		}

		this.props.project.addProject(newProject, this.addNewProjectResult);

		this.setState(() => {
			return {required: false};
		});
	}

	addNewProjectResult = (error, _projectId) => {
		if (error) {
			this.setState(() => {
				return {required: true};
			});
		} else {
			this.setState(() => {
				return {_projectId: _projectId};
			});
		} 
	}

	onRichTextChange = (value) => {
		this.setState(() => {
			return {details: value};
		});
	}

	handleCoverImageChange(_imageId) {
		this.setState(() => {
			return {
				coverImage: {
					_imageId: _imageId,
				},
			};
		});
	}

	removeImage() {
		this.setState(() => {
			return {
				coverImage: {
					_imageId: null,
				},
			}
		});
	}
	
	render() {
		const { handleCoverImageChange, removeImage, addNewProject, hitKey, yearChanged, onRichTextChange } = this;
		const { coverImage,  _projectId, required, details, year } = this.state;
		const { _imageId } = coverImage;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;

		if (_projectId) {
			return (<Redirect to={'/project/item/'+this.state._projectId} />);
		}
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}
		console.log(_imageId);
		return (
			<div className="project-new-wrapper" >
				<h3>New Project</h3>
				<label>Cover Image</label>
				<ImageEditingTool _imageId={_imageId} onChange={handleCoverImageChange} removeImage={removeImage} />				
				<label>Title{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<input type='text' onKeyPress={hitKey} placeholder="Great Project" ref={this.titleRef} />
				<br/>
				<label>Year{required ? (<span className="errortext" >*</span>) : ''}</label>
				<br/>
				<Datetime dateFormat="YYYY" timeFormat={false} onChange={yearChanged} value={year} />
				<br/>
				<label>Details</label>
				<br/>
				<RichTextEditor value={details} onChange={onRichTextChange} />
				<br/>
				<input type='submit' onClick={addNewProject} value='SAVE' />
			</div>
		);			
	}
};

export default userConsumer(projectConsumer(ProjectNew));