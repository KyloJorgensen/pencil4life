'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link } from "react-router-dom";
import ImageTag from '../../image/image-tag';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { projectPageConsumer, IProjectPageContext } from './project-page-provider';
import { ProjectPageChanger, BackArrow, NextArrow } from './project-page-changer';
import { Popout } from '../../utilities/styled.components';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: auto auto auto min-content;

	> .back {
		grid-row: 1;
	}

	> .edit {
		grid-column: 2;
		align-self: center;
		text-align: center;
	}

	> .next {
		grid-column: 3;  
		grid-row: 1;
	}

	> .exit {
		color: white;
		background-color: #e98383;
		width: 2em;
		height: 2em;
		line-height: 2;
		padding: 0;
		text-align: center;
		grid-column: 4;  
	}

	> .content {
		grid-column-start: 1;
		grid-column-end: -1;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		
		> * {
			padding: 1em;
		}
		> img {
			max-width: 100%;
			align-self: center;
		}
	}

	@media (min-width: 575px) {
		grid-template-columns: auto 1fr auto;
		> .back {
			grid-row: unset;
		}
		> .edit {
			text-align: left; 
		}
		> .next {
			grid-row: unset;
		}
		> .exit {
			grid-column: 3;  
		}

		> .content {
			grid-column: unset;
		}
	}

`;

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
			<Popout>
				<Wrapper>
					{admin ? <Link className="edit" to={'/project/edit/'+ _projectId + '/' + _projectPageId}>EDIT</Link> : ''}
					<Link className="exit" to={'/project/item/'+ _projectId}>X</Link>
					<BackArrow _projectId={_projectId} />
					<div className="content">
						{coverImageElem}
						{title || details != '<p><br></p>' ? <div>
							{title ? <h2 className="title">{title}</h2> : ''}
							{details != '<p><br></p>' ? <RichTextEditor value={RichTextEditor.createValueFromString(details, 'html')} readOnly={true} /> : ''}
						</div> : ''}
					</div>
					<NextArrow _projectId={_projectId} />
				</Wrapper>
			</Popout>
		);			
	}
};

export default userConsumer(projectPageConsumer(ProjectPage));