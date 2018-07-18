'use strict';

import * as React from 'react';
import { stringify } from 'querystring';
import { match, withRouter } from 'react-router';

export interface IProjectPageContext extends ProjectPageWrapperMethods, ProjectPageWrapperState{
    _projectId?: string;
}

const Context: IProjectPageContext = {
    getProjectPages: (params) => {
        console.error('Error: Cannot getProjectPages no ProjectPageContext.Provider element in parents');
    },
    getProjectPage: (params) => {
        console.error('Error: Cannot getProjectPage no ProjectPageContext.Provider element in parents');
    },
    addProjectPage: (params) => {
        console.error('Error: Cannot addProjectPage no ProjectPageContext.Provider element in parents');
    },
    updateProjectPage: (params, callback) => {
        console.error('Error: Cannot updateProjectPage no ProjectPageContext.Provider element in parents');
    },
    projectPages: [],
    projectPageList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};

export const ProjectPageContext = React.createContext(Context);

export interface getProjectPagesQuery {
    discontinued?: boolean;
    limit?: number;
}

export interface addProjectPageParams {
    title: string;
    details: string;
    page: number;
    _imageId?: string;
}

export interface updateProjectPageParams {
    _projectPageId?: string;
    title?: string;
    page?: number;
    details?: string;
    _imageId?: string;
    discontinued?: boolean;
}

export interface ProjectPage {
    _projectPageId: string;
    title: string;
    page: number;
    details: string;
        _imageId: string;
    discontinued: boolean;
}

export interface ProjectPageWrapperProps {
    initialState?: ProjectPageWrapperState;
}

export interface ProjectPageWrapperState {
    projectPages: string[];
    projectPageList: {
        [key: string]: ProjectPage;
    };
    page: number;
    totalPages: number;
    limit: number;
    total: number;
    pageTotal: number;
    projectPage?: ProjectPage;
}

export interface ProjectPageWrapperMethods {
    getProjectPages: (_projectId: string, query: getProjectPagesQuery) => void,
    getProjectPage: (_projectId: string, _projectPageId: string) => void,
    addProjectPage: (_projectId: string, params: addProjectPageParams, callback: (error: boolean, _projectPageId: string) => void) => void,
    updateProjectPage: (_projectId: string, params: updateProjectPageParams, callback: (error: boolean) => void) => void;
}

export class ProjectPageWrapper extends React.Component<ProjectPageWrapperProps, ProjectPageWrapperState> implements ProjectPageWrapperMethods {
    public static defaultProps: ProjectPageWrapperProps = {
        initialState: {
            projectPages: [],
            projectPageList: {},
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
        },
    }

    constructor(props) {
        super(props)
        this.state = this.props.initialState;
        this.getProjectPages = this.getProjectPages.bind(this);
        this.getProjectPage = this.getProjectPage.bind(this);
        this.addProjectPage = this.addProjectPage.bind(this);
    }

    getProjectPages(_projectId, query) {
        let querydefaults: getProjectPagesQuery = {
            limit: 100,
        };
        if (query) {
            if (!query.discontinued) {
                querydefaults.discontinued = false;
            }
            if (query.limit) {
                querydefaults.limit = query.limit;
            }
        } else {
            querydefaults.discontinued = false;
        }

        let _query = stringify(querydefaults);
        _query = _query ? '?'+_query : '';

        const request = new Request('/api/project/' + _projectId + '/page' + _query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        fetch(request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.message = JSON.stringify(response);
                throw error;
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((body) => {
            this.setState(() => {
                return {
                    page: body.page,
                    totalPages: body.totalPages,
                    limit: body.pageLimit,
                    total: body.total,
                    pageTotal: body.totalBatch,
                    projectPages: body.pages,
                };
            });
        })
        .catch((error) => {
            this.setState(() => {
                return {
                    projectPages: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    }

    getProjectPage(_projectId, _projectPageId) {
        let query = stringify({
            field: [
                '_id',
                'tiltle',
                'page',
                '_imageId',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?'+query : '';

        const request = new Request('/api/project/' + _projectId + '/page/' + _projectPageId + query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }   
        });

        fetch(request)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.message = JSON.stringify(response);
                throw error;
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((body) => {
            const { _id, title, details, _imageId, discontinued, page } = body;

            this.setState((preState) => {
                preState.projectPageList[_id] = {
                    _projectPageId: _id,
                    title: title,
                    page: page,
                    details: details,
                    _imageId: _imageId,
                    discontinued: discontinued,
                };
                return preState;
            });
        })
        .catch((error) => {
            console.log(error);
        });

    }

    addProjectPage(_projectId, params, callback) {           
        const payload: addProjectPageParams = {
            title: params.title,
            page: params.page,
            details: params.details,
        }

        if ('_imageId' in params) {
            payload._imageId = params._imageId;
        }

        const request = new Request('/api/project/' + _projectId + '/page/', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload), 
        });
        fetch(request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.message = JSON.stringify(response);
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            callback(false, response._id);
        })
        .catch(function(error) {
            callback(true);
        });
    }

    updateProjectPage(_projectId, params: updateProjectPageParams, callback) {
        let payload: updateProjectPageParams = {};

        if ('title' in params) {
            payload.title = params.title;
        }
        if ('page' in params) {
            payload.page = params.page;
        }
        if ('details' in params) {
            payload.details = params.details;
        }
        if ('_imageId' in params) {
            payload._imageId = params._imageId;
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }

        const request = new Request('/api/project/' + _projectId + '/page/' + params._projectPageId, {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload), 
        });
        fetch(request)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText)
                error.message = JSON.stringify(response);
                throw error;
            }
            return response;
        })
        .then((response) => {
            callback(false);
        })
        .catch((error) => {
            callback(true);
        });
    }

    render() {
    const { getProjectPages, getProjectPage, addProjectPage, updateProjectPage } = this;
    const { projectPages, projectPageList, page, totalPages, limit, total, pageTotal } = this.state;
        const context: IProjectPageContext = {
            getProjectPages: getProjectPages,
            getProjectPage: getProjectPage,
            addProjectPage: addProjectPage,
            updateProjectPage: updateProjectPage,
            projectPages: projectPages,
            projectPageList: projectPageList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        }
        return (
            <ProjectPageContext.Provider value={context} >
                {this.props.children}
            </ProjectPageContext.Provider>
        );
    }
}


export default ProjectPageWrapper;

export interface projectPageProviderOptions {
    props?: ProjectPageWrapperProps;
}

export const projectPageProvider = (Component, options?: projectPageProviderOptions) => {
    class ProjectPageProvider extends React.Component<ProjectPageProvider> {
        render () {
            let projectPageWrapperProps: ProjectPageWrapperProps = {};
            if (options) {
                if ('props' in options) {
                    projectPageWrapperProps = options.props;
                }
            }
            return (
                <ProjectPageWrapper {...projectPageWrapperProps}>
                    <Component {...this.props} />  
                </ProjectPageWrapper>
            );
        }
    }
  
    return ProjectPageProvider;
}

export interface ProjectPageConsumerProps {
    _projectId?: string;
    _projectPageId?: string;
    match: match<{
        _projectId: string;
        _projectPageId?: string;
    }>;
}

export const projectPageConsumer = (Component) => {


    class ProjectPageConsumer extends React.Component<ProjectPageConsumerProps> {
        render () {
            let _projectPageId, _projectId;
            if ('match' in this.props) {
                if ('_projectPageId' in this.props.match.params) {
                    _projectPageId = this.props.match.params._projectPageId;
                }
                if ('_projectId' in this.props.match.params) {
                    _projectId = this.props.match.params._projectId;
                }
            }
            if ('_projectId' in this.props) {
                _projectId = this.props._projectId;
            }
            if ('_projectPageId' in this.props) {
                _projectPageId = this.props._projectPageId;
            }
            return (
                <ProjectPageContext.Consumer>
                    {(context) => {
                        if (_projectPageId) {
                            context.projectPage = {
                                _projectPageId: _projectPageId,
                                title: '',
                                page: 0,
                                details: '',
                                _imageId: null,
                                discontinued: false,
                            };

                            if (_projectPageId in context.projectPageList) {
                                const projectPage = context.projectPageList[_projectPageId];

                                context.projectPage = {
                                    _projectPageId: _projectPageId,
                                    title:               'title' in projectPage ? projectPage.title : '',
                                    page:                 'page' in projectPage ? projectPage.page : 0,
                                    details:           'details' in projectPage ? projectPage.details : '',
                                    _imageId:         '_imageId' in projectPage ? projectPage._imageId : null,
                                    discontinued: 'discontinued' in projectPage ? projectPage.discontinued : false,
                                };
                            }
                        }
                        if (_projectId) {
                            context._projectId = _projectId;
                        }

                        return (
                            <Component {...this.props} {...{projectPage: context}} />
                        )
                    }}
                </ProjectPageContext.Consumer>
            );
        }
    }
    //@ts-ignore
    return withRouter(ProjectPageConsumer);
}