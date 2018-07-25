'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import ProjectPageListItem from './project-page-list-item';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { IProjectPageContext, projectPageConsumer, getProjectPagesQuery } from './project-page-provider';


export interface ProjectPageListProps {
	projectPage: IProjectPageContext;
	user: IUserContext;
	limit: number;
	discontinued: boolean;
	displayDetails?: boolean;
}

class ProjectPageList extends React.Component<ProjectPageListProps> {
	public static defaultProps = {
		displayDetails: true,
		discontinued: false,
		limit: 10,
	};
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	let query: getProjectPagesQuery = {};
    	if (this.props.limit) {
    		query.limit = this.props.limit;
    	}
		this.props.projectPage.getProjectPages(this.props.projectPage._projectId, query)
	}

    componentDidUpdate(prevProps, prevState, snapshot) {
    	let update = false;
    	let prevDiscontinued = prevProps.discontinued;
    	let currentDiscontinued = this.props.discontinued;

    	if (prevDiscontinued != currentDiscontinued) {
	    	update = true;
		}

    	if (update) {
    		let query = {
    			discontinued: this.props.discontinued,
    			limit: this.props.limit,
    		}
    		this.props.projectPage.getProjectPages(this.props.projectPage._projectId, query);
    	}

    }

	render() {
		const { displayDetails } = this.props;
		const { projectPages } = this.props.projectPage;

		let ProjectPageList = [];
		if (projectPages) {
            projectPages.forEach((_projectPageId) => {
				ProjectPageList.push(<ProjectPageListItem key={_projectPageId} _projectPageId={_projectPageId} displayDetails={displayDetails} />)
			});
		}
		return (
			<div className="project-page-list-wrapper" >
				<ul className='project-list' >
					{ProjectPageList}
				</ul>
			</div>
		);			
	}
};

export default userConsumer(projectPageConsumer(ProjectPageList));
export { ProjectPageList };