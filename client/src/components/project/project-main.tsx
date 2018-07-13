'use strict';

import * as React from 'react';
import ProjectList from './project-list';
import { userConsumer, IUserContext } from '../user/user-provider';
import { IProjectContext, projectConsumer } from './project-provider';

export interface ProjectMainProps {
    user: IUserContext;
    project: IProjectContext;
}

export interface ProjectMainState {
    discontinued: boolean;
}

export interface ProjectMainMethods {
    handleCheckboxChange: (event: UIEvent) => void;
}

class ProjectMain extends React.Component<ProjectMainProps, ProjectMainState> implements ProjectMainMethods {
    constructor(props) {
        super(props);
        this.state = {
        	discontinued: false,
        };

		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        const { name, checked } = event.target;
        this.setState((prevState) => {
            prevState[name] = checked; 
            return prevState;
        });
    }

	render() {
        let adminOptions = this.props.user.admin ? (
            <div>
                <h5>Admin Options</h5>
                <label>Discontinued</label><input type='checkbox' checked={!!this.state.discontinued} name="discontinued" onChange={this.handleCheckboxChange} />
            </div>
        ) : '';

        return (
			<div className="project-wrapper" >
                {adminOptions}
				<ProjectList discontinued={this.state.discontinued} />
			</div>
		);			
	}
};

export default userConsumer(projectConsumer(ProjectMain));