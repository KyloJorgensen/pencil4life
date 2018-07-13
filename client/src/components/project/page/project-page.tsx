'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link } from "react-router-dom";
import ImageTag from '../../image/image-tag';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { projectPageConsumer, IProjectPageContext } from './project-page-provider';
import { ProjectPageChanger, BackArrow, NextArrow } from './project-page-changer';

export interface ProjectPageProps {
    projectPage: IProjectPageContext;
	user: IUserContext;
}

class ProjectPage extends React.Component<ProjectPageProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {_projectId} = this.props.projectPage;
        const {_projectPageId} = this.props.projectPage.projectPage;
    	this.props.projectPage.getProjectPage(_projectId, _projectPageId);
	}


	componentDidUpdate(prevProps: ProjectPageProps, prevState) {
		const {_projectId} = this.props.projectPage;
        const {_projectPageId} = this.props.projectPage.projectPage;

		if (prevProps.projectPage.projectPage._projectPageId != _projectPageId) {
			this.props.projectPage.getProjectPage(_projectId, _projectPageId);
		}
	}


	render() {
		const { _projectId } = this.props.projectPage;
		const {  _projectPageId, title, page, _imageId, details } = this.props.projectPage.projectPage;
		const { admin } = this.props.user;

		const coverImageElem = _imageId ? (<ImageTag _imageId={_imageId} />) : '';
		return (
			<div className="project-page-wrapper" >
				{admin ? <p className="text-right" ><Link to={'/project/edit/'+ _projectId + '/' + _projectPageId }>EDIT</Link></p> : ''}
				{coverImageElem}
				<div className="title-year-wrapper">
					<p className="title">{title}</p>
                    <p className="page">{page}</p>
				</div>
				<RichTextEditor value={RichTextEditor.createValueFromString(details, 'html')} readOnly={true} />
				<ProjectPageChanger _projectId={_projectId} />
				<BackArrow _projectId={_projectId} />
				<NextArrow _projectId={_projectId} />
			</div>
		);			
	}
};

export default userConsumer(projectPageConsumer(ProjectPage));