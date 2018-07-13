'use strict';

import * as React from 'react';
import { stringify } from 'querystring';

import './project.less';

export interface IProjectContext extends ProjectWrapperMethods, ProjectWrapperState{
}

const Context: IProjectContext = {
    getProjects: (params) => {
        console.error('Error: Cannot getProjects no ProjectContext.Provider element in parents');
    },
    getProject: (params) => {
        console.error('Error: Cannot getProject no ProjectContext.Provider element in parents');
    },
    addProject: (params) => {
        console.error('Error: Cannot addProject no ProjectContext.Provider element in parents');
    },
    updateProject: (params, callback) => {
        console.error('Error: Cannot updateProject no ProjectContext.Provider element in parents');
    },
    projects: [],
    projectList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};

export const ProjectContext = React.createContext(Context);

export interface getProjectsQuery {
    discontinued?: boolean;
    limit?: number;
}

export interface addProjectParams {
    title: string;
    year: Date;
    details: string;
    coverImage?: {
        _imageId: string;
    };
}

export interface updateProjectParams {
    _id?: string;
    title?: string;
    year?: Date;
    details?: string;
    coverImage?: {
        _imageId: string;
    };
    discontinued?: boolean;
}

export interface Project {
    _projectId: string;
    title: string;
    year: Date;
    details: string;
    coverImage?: {
        _imageId: string;
    };
    discontinued: boolean;
}


export interface ProjectPage {
    _projectPageId: string;
    title: string;
    details: string;
    image?: {
        _imageId: string;
    };
    discontinued: boolean;
}

export interface ProjectWrapperProps {
  initialState?: ProjectWrapperState;
}

export interface ProjectWrapperState {
    projects: string[];
    projectList: {
        [key: string]: Project;
    };
    page: number;
    totalPages: number;
    limit: number;
    total: number;
    pageTotal: number;
    project?: Project;
}

export interface ProjectWrapperMethods {
    getProjects: (query: getProjectsQuery) => void,
    getProject: (_projectId: string) => void,
    addProject: (params: addProjectParams, callback: (error: boolean, _projectId: string) => void) => void,
    updateProject: (params: updateProjectParams, callback: (error: boolean) => void) => void;
}

export class ProjectWrapper extends React.Component<ProjectWrapperProps, ProjectWrapperState> implements ProjectWrapperMethods {
    public static defaultProps: ProjectWrapperProps = {
        initialState: {
            projects: [],
            projectList: {},
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
        this.getProjects = this.getProjects.bind(this);
        this.getProject = this.getProject.bind(this);
        this.addProject = this.addProject.bind(this);
    }

    getProjects(query) {
        let querydefaults: getProjectsQuery = {
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

        const request = new Request('/api/project' + _query, {
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
                error.message = String(response);
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
                    limit: body.limit,
                    total: body.total,
                    pageTotal: body.pageTotal,
                    projects: body.projects,
                };
            });
        })
        .catch((error) => {
            this.setState(() => {
                return {
                    projects: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    }

    getProject(_projectId) {
        let query = stringify({
            field: [
                '_id',
                'name',
                'alt',
                'filename',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?'+query : '';

        const request = new Request('/api/project/' + _projectId + query, {
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
                error.message = String(response);
                throw error;
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((body) => {
            const { _id, title, year, details, discontinued } = body;
            let { coverImage } = body;
            if (coverImage == undefined) {
                coverImage = {};
            }
            this.setState((preState) => {
                preState.projectList[_id] = {
                    _projectId: _id,
                    title: title,
                    year: year,
                    details: details,
                    coverImage: coverImage,
                    discontinued: discontinued,
                };
                return preState;
            });
        })
        .catch((error) => {
            console.log(error);
        });

    }

    addProject(params, callback) {           
        const payload: addProjectParams = {
            title: params.title,
            year: params.year,
            details: params.details,
        }

        if ('coverImage' in params) {
            payload.coverImage = params.coverImage;
        }

        const request = new Request('/api/project', {
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
                error.message = String(response);
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

    updateProject(params: updateProjectParams, callback) {

        let payload: updateProjectParams = {
            _id: params._id
        };

        if ('title' in params) {
            payload.title = params.title;
        }
        if ('year' in params) {
            payload.year = params.year;
        }
        if ('details' in params) {
            payload.details = params.details;
        }
        if ('coverImage' in params) {
            if ('_imageId' in params.coverImage) {
                payload.coverImage = payload.coverImage || {_imageId: null};
                payload.coverImage._imageId = params.coverImage._imageId;
            }
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }

        const request = new Request('/api/project', {
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
                error.message = String(response);
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
    const { getProjects, getProject, addProject, updateProject } = this;
    const { projects, projectList, page, totalPages, limit, total, pageTotal } = this.state;
        const context: IProjectContext = {
            getProjects: getProjects,
            getProject: getProject,
            addProject: addProject,
            updateProject: updateProject,
            projects: projects,
            projectList: projectList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        }
        return (
            <ProjectContext.Provider value={context} >
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
}


export default ProjectWrapper;

export interface projectProviderOptions {
  props?: ProjectWrapperProps;
}

export const projectProvider = (Component, options?: projectProviderOptions) => {
  class ProjectProvider extends React.Component<null, null> {
    render () {
      let projectWrapperProps: ProjectWrapperProps = {};
      if (options) {
        if ('props' in options) {
          projectWrapperProps = options.props;
        }
      }
      return (
        <ProjectWrapper {...projectWrapperProps}>
          <Component {...this.props} />  
        </ProjectWrapper>
      );
    }
  }
  
    return ProjectProvider;
}

export const projectConsumer = (Component) => {
    class ProjectConsumer extends React.Component<any> {
        render () {
            let { _projectId } = this.props;
            if ('match' in this.props) {
                if ('_projectId' in this.props.match.params) {
                    _projectId = this.props.match.params._projectId;
                }
            }
            return (
            <ProjectContext.Consumer>
                {(context) => {
                    if (_projectId) {
                        context.project = {
                            _projectId: _projectId,
                            title: '',
                            year: new Date(),
                            details: '',
                            coverImage: {_imageId: null},
                            discontinued: false,
                        };

                        if (_projectId in context.projectList) {

                            const project = context.projectList[_projectId];
                            context.project = {
                                _projectId: _projectId,
                                title:               'title' in project ? project.title : '',
                                year:                 'year' in project ? project.year : new Date(),
                                details:           'details' in project ? project.details : '',
                                coverImage:     'coverImage' in project ? '_imageId' in project.coverImage ? project.coverImage : {_imageId: null} : {_imageId: ''},
                                discontinued: 'discontinued' in project ? project.discontinued : false,
                            };
                        }
                    }
                    return (
                        <Component {...this.props} {...{project: context}} />
                    )
                }}
            </ProjectContext.Consumer>
            );
        }
    }
    return ProjectConsumer;
}









// 'use strict';

// import actions from '../actions/project.actions';
// import objectPath from 'object-path';

// const projectInitialState = {
//     projectsDisplay: null,
//     projectList: null,
//     projectListLength: null,
//     projectsPage: null,
//     projectsTotalPages: null,
//     projectsPageLimit: null,
//     projectsTotal: null,
//     projectsTotalBatch: null,
// };

// const projectReducer = function(state, action) {
//     state = state || projectInitialState;
//     const _state = state;
//     if (action.type === actions.GET_PROJECTS_SUCCESS) {
//         _state.projectsDisplay = action.projects;
//         // _state.projectList = action.projects;

//         _state.projectsPage = action.projectsPage; 
//         _state.projectsTotalPages = action.projectsTotalPages; 
//         _state.projectsPageLimit = action.projectsPageLimit; 
//         _state.projectsTotal = action.projectsTotal; 
//         _state.projectsTotalBatch = action.projectsTotalBatch; 
//         // _state.projects = action.projects; 
//     }    
//     if (action.type === actions.GET_PROJECTS_ERROR) {
//         _state.projectList = null;
//         _state.projectsPage = null;
//         _state.projectsTotalPages = null;
//         _state.projectsPageLimit = null;
//         _state.projectsTotal = null;
//         _state.projectsTotalBatch = null;
//     }
//     if (action.type === actions.GET_PROJECT_SUCCESS) {
//         _state.projectList = _state.projectList || {};
//         const project = action.response;



//         _state.projectList[project._id] = {
//             _id: project._id,
//             title: project.title,
//             year: project.year,
//             details: project.details,
//             discontinued: project.discontinued,
//             coverImage: objectPath.get(project, "coverImage", {_imageId: null}),
//         };
//     }    
//     if (action.type === actions.GET_PROJECT_ERROR) {
//         console.error(action.error);
//     }
//     if (_state.projectList !== null) {
//     	_state.projectListLength = Object.keys(_state.projectList).length;
//     }
//     return _state;
// };





















// const addProject = function(newProject, callback) {

//     const payload = {
//         title: newProject.title,
//         year: newProject.year,
//         details: newProject.details,
//     };

//     if ('coverImage' in newProject) {
//         const { coverImage } = newProject;
//         payload.coverImage = {};
//         if ('_imageId' in coverImage) {
//             payload.coverImage._imageId = coverImage._imageId;
//         }
//     }
//     return function(dispatch) {
//         const url = '/api/project';
//         return fetch(url, {
//             method: 'POST',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             body: JSON.stringify(payload), 
//         }).then(function(response) {
//             if (response.status < 200 || response.status >= 300) {
//                 const error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             callback(false, response._id);
//             return dispatch(addProjectSuccess());
//         })
//         .catch(function(error) {
//             callback(true);
//             return dispatch(addProjectError(error));
//         });
//     };
// };

// const UPDATE_PROJECT = 'UPDATE_PROJECT';
// const updateProject = function(_new, _old, callback) {
//     let payload = {_id: _old._projectId};
//     let vaildKeys = ['title', 'year', 'end_date', 'details', 'discontinued'];

//     for (let i = 0; i < vaildKeys.length; i++) {
//         if (_new[vaildKeys[i]] != _old[vaildKeys[i]]) {
//             payload[vaildKeys[i]] = _new[vaildKeys[i]];
//         }
//     }
    
//     return function(dispatch) {
//         const url = '/api/project';
//         return fetch(url, {
//             method: 'PUT',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             body: JSON.stringify(payload), 
//         }).then(function(response) {
//             if (response.status < 200 || response.status >= 300) {
//                 const error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             callback(false);
//             return dispatch(updateProjectSuccess());
//         })
//         .catch(function(error) {
//             callback(true);
//             return dispatch(updateProjectError(error));
//         });
//     };
// };


// const getProjects = function(query){
//     return function(dispatch) {
//         dispatch(gettingProjects());
//         const querydefaults = {
//             limit: 100,
//             format: 'json',
//         };
//         if (query) {
//             if (!query.discontinued) {
//                 querydefaults.discontinued = false;
//             }
//             if (query.limit) {
//                 querydefaults.limit = query.limit;
//             }
//         } else {
//             querydefaults.discontinued = false;
//         }

//         let _query = querystring.stringify(querydefaults);
//         _query = _query ? '?'+_query : '';
//         let _url = '/api/project' + _query;
//         return fetch(_url, {
//             method: 'GET',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             }   
//         }).then(function(response) {
//             if (response.status < 200 || response.status >= 300) {
//                 const error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             return dispatch(getProjectsSuccess(response));
//         })
//         .catch(function(error) {
//             return dispatch(getProjectsError(error));
//         });
//     };
// };

// const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
// const getProjectsSuccess = function(response) {
//     return {
//         type: GET_PROJECTS_SUCCESS,
//         projectsPage: response.page,
//         projectsTotalPages: response.totalPages,
//         projectsPageLimit: response.limit,
//         projectsTotal: response.total,
//         projectsTotalBatch: response.pageTotal,
//         projects: response.projects,
//     };
// };

// const getProject = function(_projectId){
//     return function(dispatch) {
//         dispatch(gettingProjects());

//         let query = querystring.stringify({
//             field: [
//                 '_id',
//                 'title',
//                 'year',
//                 'details',
//                 'discontinued',
//             ],
//             format: 'json',
//         });
//         query = query ? '?'+query : '';
//         let _url = '/api/project/' + _projectId + query;
//         return fetch(_url, {
//             method: 'GET',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             }   
//         }).then(function(response) {
//             if (response.status < 200 || response.status >= 300) {
//                 const error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             return dispatch(getProjectSuccess(response));
//         })
//         .catch(function(error) {
//             return dispatch(getProjectError(error));
//         });
//     };
// };

// const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
// const getProjectSuccess = function(response) {
//     return {
//         type: GET_PROJECT_SUCCESS,
//         response: response
//     };
// };

// const getProjectPages = function(_projectId, query){
//     return function(dispatch) {
//         dispatch(gettingProjectPages());
//         const querydefaults = {
//             limit: 100,
//             format: 'json',
//         };
//         if (query) {
//             if (!query.discontinued) {
//                 querydefaults.discontinued = false;
//             }
//             if (query.limit) {
//                 querydefaults.limit = query.limit;
//             }
//         } else {
//             querydefaults.discontinued = false;
//         }

//         let _query = querystring.stringify(querydefaults);
//         _query = _query ? '?'+_query : '';
//         let _url = '/api/project/' + _projectId + '/page' + _query;
//         return fetch(_url, {
//             method: 'GET',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             }   
//         }).then(function(response) {
//             if (response.status < 200 || response.status >= 300) {
//                 const error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             console.log(response)
//             return dispatch(getProjectPagesSuccess(response));
//         })
//         .catch(function(error) {
//             return dispatch(getProjectPagesError(error));
//         });
//     };
// };

// const getMoreProjectPages = function(url) {
//     return function(dispatch) {
//         return fetch(url, {
//             method: 'GET',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             }   
//         }).then(function(response) {
//             if (response.status < 200 || response.status >= 300) {
//                 const error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             return dispatch(getProjectPagesSuccess(response));
//         })
//         .catch(function(error) {
//             return dispatch(getProjectPagesError(error));
//         });
//     }
// };


// const GET_PROJECT_PAGES_SUCCESS = 'GET_PROJECT_PAGES_SUCCESS';
// const getProjectPagesSuccess = function(response) {
//     return {
//         type: GET_PROJECT_PAGES_SUCCESS,
//         projectsPage: response.page,
//         projectsTotalPages: response.totalPages,
//         projectsPageLimit: response.limit,
//         projectsTotal: response.total,
//         projectsTotalBatch: response.pageTotal,
//         projects: response.projects,
//     };
// };
