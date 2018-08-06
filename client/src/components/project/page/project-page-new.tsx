'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect, Link } from 'react-router-dom';
import ImageNew from '../../image/image-new';
import ImageEdit from '../../image/image-edit';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { Location } from 'history';
import { projectPageConsumer, IProjectPageContext, addProjectPageParams } from './project-page-provider';
import ImageEditingTool from '../../image/image-editing-tool';
import { Popout } from '../../utilities/styled.components';
import styled from 'styled-components';

const ProjectPageNewWrapper = styled.div`
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

export interface ProjectPageNewProps {
	user: IUserContext;
	projectPage: IProjectPageContext;
	location: Location;
}

export interface ProjectPageNewState {
	_projectPageId: string;
	required: boolean;
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
	handleCoverImageChange: (_imageId) => void;
	removeImage: () => void;
}


class ProjectPageNew extends React.Component<ProjectPageNewProps, ProjectPageNewState> implements ProjectPageNewMethods {
    constructor(props) {
        super(props);
        this.state = {
        	_projectPageId: null,
        	required: false,
			title: null,
			page: null,
        	details: RichTextEditor.createEmptyValue(),
		};
		

		this.hitKey = this.hitKey.bind(this);
		this.addNewProject = this.addNewProject.bind(this);
		this.addNewProjectResult = this.addNewProjectResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
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

	hitKey(event) {
		if (event.key == 'Enter') {
			this.addNewProject(event);
		}
	}
	
	componentDidMount() {
		this.props.projectPage.getProjectPages(this.props.projectPage._projectId, {});
	}

	titleRef: React.RefObject<HTMLInputElement> = React.createRef();
	pageRef: React.RefObject<HTMLInputElement> = React.createRef();

	addNewProject(event) {
		event.preventDefault();
		const title = this.titleRef.current.value;
		const page: number = Number(this.pageRef.current.value);
		const { details, _imageId } = this.state;

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

	addNewProjectResult = (error, _projectPageId) => {
		if (error) {
			this.setState(() => {
				return {required: true};
			});
		} else {
			this.setState(() => {
				return {_projectPageId: _projectPageId};
			});
		} 
	}

	onRichTextChange = (value) => {
		this.setState(() => {
			return {details: value};
		});
	}
	
	render() {
		const { addNewProject, hitKey, onRichTextChange, titleRef, pageRef, handleCoverImageChange, removeImage } = this;
		const { _imageId, _projectPageId, required, details, page } = this.state;
		const { _projectId } = this.props.projectPage;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;
		const { total } = this.props.projectPage;

		if (_projectPageId) {
			return (<Redirect to={'/project/item/'+this.state._projectPageId} />);
		}
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}
	
		return (
			<Popout>
				<ProjectPageNewWrapper>
					<Link className="exit" to={'/project/item/'+ _projectId}>X</Link>

					<h3>New Project Page</h3>
					<label>Image</label>
					<ImageEditingTool _imageId={_imageId} onChange={handleCoverImageChange} removeImage={removeImage} />
					<label>Title{required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="Great Project" ref={titleRef} />
					<br/>
					<label>Page</label>
					<br/>
					<input type="number" min={1} max={total+1} onKeyPress={hitKey} ref={pageRef} defaultValue={(total+1).toString()} />
					<br/>
					<label>Details</label>
					<br/>
					<RichTextEditor value={details} onChange={onRichTextChange} />
					<br/>
					<input type='submit' onClick={addNewProject} value='SAVE' />
				</ProjectPageNewWrapper>
			</Popout>
		);			
	}
};

export default userConsumer(projectPageConsumer(ProjectPageNew));