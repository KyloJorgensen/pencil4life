'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import * as objectPath from 'object-path';
import ImageTag from '../../image/image-tag';
import { projectPageConsumer, IProjectPageContext } from './project-page-provider';

export interface ProjectPageListItemProps {
	projectPage: IProjectPageContext;
	_projectPageId: string;
}

class ProjectPageListItem extends React.Component<ProjectPageListItemProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.projectPage.getProjectPage(this.props.projectPage._projectId, this.props._projectPageId);
    }

	render() {
		const { _projectId } = this.props.projectPage;
		const { _projectPageId, title, _imageId } = this.props.projectPage.projectPage;
		const imageIdElem = _imageId ? (<ImageTag _imageId={_imageId} />) : '';
		
		return (
			<div className="project-page-list-item-wrapper" >				
				<Link className="project-link" to={'/project/item/'+_projectId+'/'+_projectPageId} >
					<div className="image-wrapper">
						{imageIdElem}
					</div>
				</Link>
			</div>
		);		
	}
};

export default projectPageConsumer(ProjectPageListItem);
export {ProjectPageListItem};