'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link, Switch, Route, NavLink } from "react-router-dom";
import * as moment from 'moment';
import { projectConsumer, IProjectContext } from './project-provider';
import { IUserContext, userConsumer } from '../user/user-provider';
import ImageTag from '../image/image-tag';
import ProjectPageList from './page/project-page-list';
import { projectPageProvider } from './page/project-page-provider';
import ProjectPage from './page/project-page';
import ProjectPageNew from './page/project-page-new';
import ProjectPageEdit from './page/project-page-edit';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-row-gap: 1em;
	> .title-year-wrapper {
		display: flex;
		justify-content: space-between;
	}
	> img {
		max-width: 100%;
		margin: 0 auto;
	}

`;

export interface ProjectProps {
	project: IProjectContext;
	user: IUserContext;
}

export interface ProjectState {
	discontinued: boolean;
}

class Project extends React.Component<ProjectProps, ProjectState> {
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

    componentDidMount() {
    	this.props.project.getProject(this.props.project.project._projectId);
    }

	render() {
		const { _projectId, title, year, details, coverImage } = this.props.project.project;
		const { _imageId } = coverImage;
		const { admin } = this.props.user;
		const { discontinued } = this.state;

		const formatedYear = moment(year).format("YYYY");
		const coverImageElem = _imageId? (<ImageTag _imageId={_imageId} />) : '';
		const convertedDetails = RichTextEditor.createValueFromString(details, 'html');
		return (
			<Wrapper className="project-wrapper" >
				{admin ? <p className="text-right" ><Link to={'/project/edit/'+_projectId}>EDIT</Link></p> : ''}
				<div className="title-year-wrapper">
					<NavLink to={'/project/item/'+_projectId} ><h2 className="title">{title}</h2></NavLink>
					<p className="year">{formatedYear}</p>
				</div>
				{coverImageElem}
				{ details != '<p><br></p>' ? <RichTextEditor value={convertedDetails} readOnly={true} /> : ''}
				{admin ? (
					<div>
						<Link to={"/project/new/"+_projectId}>NEW PAGE</Link>
						<label>Discontinued</label><input type='checkbox' checked={!!this.state.discontinued} name="discontinued" onChange={this.handleCheckboxChange} />
					</div>
				) : ''}
				<ProjectPageList discontinued={discontinued} />
				<Switch>
					<Route exact path="/project/new/:_projectId/" component={ProjectPageNew} />
					<Route exact path="/project/item/:_projectId/:_projectPageId" component={ProjectPage} />
					<Route exact path="/project/edit/:_projectId/:_projectPageId" component={ProjectPageEdit} />				
				</Switch>
			</Wrapper>
		);			
	}
};


export { Project };

export default userConsumer(projectConsumer(projectPageProvider(Project)));