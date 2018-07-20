'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './project-list-item';
import { IProjectContext, projectConsumer, getProjectsQuery } from './project-provider';
import { IUserContext, userConsumer } from '../user/user-provider';


export interface ProjectListProps {
	project: IProjectContext;
	user: IUserContext;
	limit: number;
	discontinued: boolean;
	displayDetails?: boolean;
}

class ProjectList extends React.Component<ProjectListProps> {
	public static defaultProps = {
		displayDetails: true,
	};
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	let query: getProjectsQuery = {};
    	if (this.props.limit) {
    		query.limit = this.props.limit;
    	}
    	this.props.project.getProjects(query);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    	let update = false;
    	let prevDiscontinued = prevProps.discontinued || false;
    	let currentDiscontinued = this.props.discontinued || false;
    	if (prevDiscontinued != currentDiscontinued) {
	    	update = true;
    	}

    	if (update) {
    		let query = {
    			discontinued: this.props.discontinued || false,
    			limit: this.props.limit || 10,
    		}
    		this.props.project.getProjects(query);
    	}

    }

	render() {
		const { displayDetails } = this.props;
		let ProjectList = [];
		if (this.props.project.projects) {
            this.props.project.projects.forEach((projectKey) => {
				ProjectList.push(<ProjectListItem key={projectKey} _projectId={projectKey} displayDetails={displayDetails} />)
			});
		}
		return (
			<div className="project-wrapper" >
				{this.props.user.admin ? (
					<div>
						<Link to="/project/new">NEW PROJECT</Link>
						<br/>
					</div>
				) : ''}
				<ul className='project-list' >
					{ProjectList}
				</ul>
			</div>
		);			
	}
};

export default userConsumer(projectConsumer(ProjectList));