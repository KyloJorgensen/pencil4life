'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link } from "react-router-dom";
import * as moment from 'moment';
import { projectConsumer, IProjectContext } from './project-provider';
import { IUserContext, userConsumer } from '../user/user-provider';
import ImageTag from '../image/image-tag';
import ProjectPageChanger from './page/project-page-changer';

export interface ProjectProps {
	project: IProjectContext;
	user: IUserContext;
}

class Project extends React.Component<ProjectProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.project.getProject(this.props.project.project._projectId);
    }

	render() {
		const { _projectId, title, year, details, coverImage } = this.props.project.project;
		const { _imageId } = coverImage;
		const { admin } = this.props.user;

		const formatedYear = moment(year).format("YYYY");
		const coverImageElem = _imageId? (<ImageTag _imageId={_imageId} />) : '';
		const convertedDetails = RichTextEditor.createValueFromString(details, 'html');
		return (
			<div className="project-wrapper" >
				{admin ? <p className="text-right" ><Link to={'/project/edit/'+_projectId}>EDIT</Link></p> : ''}
				{coverImageElem}
				<div className="title-year-wrapper">
					<p className="title">{title}</p>
					<p className="year">{formatedYear}</p>
				</div>
				{ details != '<p><br></p>' ? <RichTextEditor value={convertedDetails} readOnly={true} /> : ''}
				<ProjectPageChanger _projectId={_projectId} />
			</div>
		);			
	}
};

export default userConsumer(projectConsumer(Project));