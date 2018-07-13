'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect } from 'react-router-dom';
import ImageNew from '../../image/image-new';
import ImageEdit from '../../image/image-edit';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { Location } from 'history';
import { projectPageConsumer, IProjectPageContext, addProjectPageParams } from './project-page-provider';

export interface ProjectPageNewProps {
	user: IUserContext;
	projectPage: IProjectPageContext;
	location: Location;
}

export interface ProjectPageNewState {
	_projectId: string;
	required: boolean;
	imageRequired: boolean;
	title: string;
	details: any;
	page: number;
	 _imageId?: string;
}

export interface ProjectPageNewMethods {
	hitKey: (event: UIEvent) => void;
	addNewProject: (event: UIEvent) => void;
	addNewProjectResult: (error: boolean, _projectId: string) => void;
	onRichTextChange: (value: string) => void;
	addNewImageResult: (error: boolean, _imageId: string) => void;
}


class ProjectPageNew extends React.Component<ProjectPageNewProps, ProjectPageNewState> implements ProjectPageNewMethods {
    constructor(props) {
        super(props);
        this.state = {
        	_projectId: null,
        	required: false,
        	imageRequired: false,
			title: null,
			page: null,
        	details: RichTextEditor.createEmptyValue(),
		};
		

		this.hitKey = this.hitKey.bind(this);
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

	titleRef: React.RefObject<HTMLInputElement> = React.createRef();
	pageRef: React.RefObject<HTMLInputElement> = React.createRef();

	addNewProject(event) {
		event.preventDefault();
		const title = this.titleRef.current.value;
		const page: number = Number(this.pageRef.current.value);
		const { details, _imageId } = this.state;
		if (!title) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

		const newProject: addProjectPageParams = {
			title: title,
			page: page,
			details: details.toString('html'),
		}

		if (_imageId != null) {
			newProject._imageId = _imageId;
		}
		this.props.projectPage.addProjectPage(this.props.projectPage._projectId, newProject, this.addNewProjectResult);

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
					_imageId: _imageId,
					imageRequired: false,
				};
			});
		} 
	}
	
	render() {
		const { addNewImageResult, addNewProject, hitKey, onRichTextChange, titleRef, pageRef } = this;
		const { _imageId, imageRequired, _projectId, required, details, page } = this.state;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;
		const { total } = this.props.projectPage;

		

		if (_projectId) {
			return (<Redirect to={'/project/item/'+this.state._projectId} />);
		}
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}
	
		return (
			<div className="project-page-new-wrapper" >
				<form onSubmit={addNewProject}>
					<h3>New Project Page</h3>
					<label>Image</label>
					{_imageId ? <ImageEdit _imageId={_imageId} updateRedirect={false} /> : <ImageNew required={imageRequired} addNewImageResult={addNewImageResult} />}
					
					<label>Title{required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="Great Project" ref={titleRef} />
					<br/>
					<label>Page</label>
					<br/>
					<input type="number" min={1} max={total} onKeyPress={hitKey} ref={pageRef} defaultValue={total.toString()} />
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

export default userConsumer(projectPageConsumer(ProjectPageNew));