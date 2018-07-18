'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import {Redirect} from 'react-router-dom';
import * as Datetime from 'react-datetime';
import ImageNew from '../image/image-new';
import ImageEdit from '../image/image-edit';
import { IUserContext, userConsumer } from '../user/user-provider';
import { IProjectContext, addProjectParams, projectConsumer } from './project-provider';
import { Location } from 'history';

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
	addNewImageResult: (error: boolean, _imageId: string) => void;
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
		this.addNewImageResult = this.addNewImageResult.bind(this);
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

	addNewImageResult = (error, _imageId) => {
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
	
	render() {
		const { addNewImageResult, addNewProject, hitKey, yearChanged, onRichTextChange } = this;
		const { coverImage, imageRequired, _projectId, required, details, year } = this.state;
		const { _imageId } = coverImage;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;

		if (_projectId) {
			return (<Redirect to={'/project/item/'+this.state._projectId} />);
		}
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}
	
		return (
			<div className="project-new-wrapper" >
				<form onSubmit={addNewProject}>
					<h3>New Project</h3>
					<label>Cover Image</label>
					{_imageId ? <ImageEdit _imageId={_imageId} updateRedirect={false} /> : <ImageNew required={imageRequired} addNewImageResult={addNewImageResult} />}
					
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
				</form>	
			</div>
		);			
	}
};

export default userConsumer(projectConsumer(ProjectNew));