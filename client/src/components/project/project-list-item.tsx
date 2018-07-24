'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import * as objectPath from 'object-path';
import ImageTag from '../image/image-tag';
import { projectConsumer, IProjectContext } from './project-provider';

export interface ProjectListItemProps {
	project: IProjectContext;
	_projectId: string;
}

class ProjectListItem extends React.Component<ProjectListItemProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.project.getProject(this.props._projectId);
    }

	render() {

		const { _projectId, title, coverImage } = this.props.project.project;

		let year = moment(this.props.project.project.year).format("YYYY");
		const coverImageElem = objectPath.get(coverImage, '_imageId', false) ? (<ImageTag _imageId={this.props.project.project.coverImage._imageId} />) : '';

		return (
			<div className="project-list-item-wrapper" >				
				<Link className="project-link" to={'/project/item/'+_projectId} >
					<div className="image-wrapper">
						{coverImageElem}
					</div>
					<div className="title-year-wrapper">
						<p className="title">{title}</p>
						<p className="year">{year}</p>
					</div>
				</Link>
			</div>
		);		
	}
};

export default projectConsumer(ProjectListItem);