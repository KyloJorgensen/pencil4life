'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import ProjectMain from './project-main';
import Project from './project';
import ProjectEdit from './project-edit';
import ProjectNew from './project-new';
import ProjectPage from './page/project-page';
import ProjectPageNew from './page/project-page-new';
import ProjectPageEdit from './page/project-page-edit';
import NoMatch from '../no-match';
import CommingSoon from '../comming-soon'
import { projectProvider } from './project-provider';
import { projectPageProvider } from './page/project-page-provider';
import './project.less';

class ProjectSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div className="project-page-wrapper">
				<div className="container">
					<NavLink exact to={'/project'} activeClassName="selected" ><h2>Projects</h2></NavLink>
					<Switch>
						<Route exact path="/project" component={ProjectMain} />
						<Route exact path="/project/new/:_projectId" component={ProjectPageNew} />
						<Route exact path="/project/new" component={ProjectNew} />
						<Route exact path="/project/item/:_projectId/:_projectPageId" component={ProjectPage} />
						<Route exact path="/project/item/:_projectId" component={Project} />
						<Route exact path="/project/edit/:_projectId/:_projectPageId" component={ProjectPageEdit} />
						<Route exact path="/project/edit/:_projectId" component={ProjectEdit} />
						<Route component={NoMatch}/>
					</Switch>
				</div>
			</div>
		);			
	}
};

export default projectProvider(projectPageProvider(ProjectSwitch));