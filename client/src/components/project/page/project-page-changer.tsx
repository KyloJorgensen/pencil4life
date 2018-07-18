'use strict';

import * as React from 'react';
import { Link, Redirect } from "react-router-dom";
import * as  fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';
import * as faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft';
import { IUserContext, userConsumer } from '../../user/user-provider';
import { projectPageConsumer, IProjectPageContext } from './project-page-provider';
import styled from 'styled-components';

fontawesome.library.add(faCaretRight, faCaretLeft);

export interface ProjectPageChangerProps {
    projectPage: IProjectPageContext;
    user: IUserContext;
}

class ProjectPageChanger extends React.Component<ProjectPageChangerProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {_projectId, getProjectPages} = this.props.projectPage;
    	getProjectPages(_projectId, {});
    }

	render() {
        const { projectPage } = this.props;
        const { _projectId, projectPages } = this.props.projectPage;
		const { _projectPageId, page } = 'projectPage' in this.props.projectPage ? this.props.projectPage.projectPage : {_projectPageId: '', page: 'MAIN'};
        const { admin } = this.props.user;
        
        const pages = projectPages.map((page) => page);
        pages.push('');
        const index = pages.findIndex((page) => page == ('projectPage' in projectPage? projectPage.projectPage._projectPageId : ''));

		return (
			<div className="project-page-changer-wrapper" >
				{admin ? <p>
                    <Link to={'/project/edit/'+ _projectId + '/' + _projectPageId }>EDIT</Link>
                    <Link to={'/project/new/'+ _projectId + '/' }>NEW PAGE</Link>
                </p> : ''}
                <p>
                    <Link to={'/project/item/'+_projectId+'/'+pages[(index+pages.length-1)%pages.length]} >
                        <FontAwesomeIcon icon={["fas", "caret-left"]} />
                    </Link>
                    <span>
                        {page}/{this.props.projectPage.total}
                    </span>
                    <Link to={'/project/item/'+_projectId+'/'+pages[(index+pages.length+1)%pages.length]} >
                        <FontAwesomeIcon icon={["fas", "caret-right"]} />
                    </Link>
                    
                </p>
                
			</div>
		);			
	}
};

export default userConsumer(projectPageConsumer(ProjectPageChanger));

const changer = userConsumer(projectPageConsumer(ProjectPageChanger));
export {changer as ProjectPageChanger};

export interface BackArrowProps {
    projectPage: IProjectPageContext;
}

const ArrowStyle = styled.div`
    > a {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0 1em;
        > svg {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0;                    
            width: 2em !important;
            height: 5em;
            color: #494949;
        }
    }
    &:hover {
        > a > svg {
            color: white;
        }
    }
`;

class BackArrow extends React.Component<BackArrowProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {_projectId, getProjectPages} = this.props.projectPage;
    	getProjectPages(_projectId, {});
    }

	render() {
        const { projectPage } = this.props;
        const { _projectId, projectPages } = this.props.projectPage;
        
        const pages = projectPages.map((page) => page);
        pages.push('');
        const index = pages.findIndex((page) => page == ('projectPage' in projectPage? projectPage.projectPage._projectPageId : ''));

		return (
			<ArrowStyle className='back' >
                <Link to={'/project/item/'+_projectId+'/'+pages[(index+pages.length-1)%pages.length]} >
                    <FontAwesomeIcon icon={["fas", "caret-left"]} />
                </Link>
			</ArrowStyle>
		);			
	}
};

const backarrow = userConsumer(projectPageConsumer(BackArrow));
export {backarrow as BackArrow};

export interface NextArrowProps {
    projectPage: IProjectPageContext;
}

class NextArrow extends React.Component<NextArrowProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {_projectId, getProjectPages} = this.props.projectPage;
    	getProjectPages(_projectId, {});
    }

	render() {
        const { projectPage } = this.props;
        const { _projectId, projectPages } = this.props.projectPage;
        
        const pages = projectPages.map((page) => page);
        pages.push('');
        const index = pages.findIndex((page) => page == ('projectPage' in projectPage? projectPage.projectPage._projectPageId : ''));

		return (
			<ArrowStyle className='next' >
                <Link to={'/project/item/'+_projectId+'/'+pages[(index+pages.length+1)%pages.length]} >
                    <FontAwesomeIcon icon={["fas", "caret-right"]} />
                </Link>
			</ArrowStyle>
		);			
	}
};

const nextarrow = userConsumer(projectPageConsumer(NextArrow));
export {nextarrow as NextArrow};