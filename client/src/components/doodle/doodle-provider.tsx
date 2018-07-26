'use strict';

import * as React from 'react';
import * as RichTextEditor from 'react-rte';
import { stringify } from 'querystring';

export interface IDoodleContext extends DoodleWrapperMethods, DoodleWrapperState{
}

const Context: IDoodleContext = {
    getDoodles: (params) => {
        console.error('Error: Cannot getDoodles no DoodleContext.Provider element in parents');
    },
    getDoodle: (params) => {
        console.error('Error: Cannot getDoodle no DoodleContext.Provider element in parents');
    },
    addDoodle: (params) => {
        console.error('Error: Cannot addDoodle no DoodleContext.Provider element in parents');
    },
    updateDoodle: (params, callback) => {
        console.error('Error: Cannot updateDoodle no DoodleContext.Provider element in parents');
    },
    doodles: [],
    doodleList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};

export const DoodleContext = React.createContext(Context);

export interface getDoodlesQuery {
    discontinued?: boolean;
    limit?: number;
}

export interface addDoodleParams {
    title: string;
    details: string;
    _imageId?: string;
}

export interface updateDoodleParams {
    _id?: string;
    title?: string;
    details?: string;
    _imageId?: string;
    discontinued?: boolean;
}

export interface Doodle {
    _doodleId: string;
    title: string;
    details: string;
    _imageId: string;
    discontinued: boolean;
}

export interface DoodleWrapperProps {
  initialState?: DoodleWrapperState;
}

export interface DoodleWrapperState {
    doodles: string[];
    doodleList: {
        [key: string]: Doodle;
    };
    page: number;
    totalPages: number;
    limit: number;
    total: number;
    pageTotal: number;
    doodle?: Doodle;
}

export interface DoodleWrapperMethods {
    getDoodles: (query: getDoodlesQuery) => void,
    getDoodle: (_doodleId: string) => void,
    addDoodle: (params: addDoodleParams, callback: (error: boolean, _doodleId: string) => void) => void,
    updateDoodle: (params: updateDoodleParams, callback: (error: boolean) => void) => void;
}

export class DoodleWrapper extends React.Component<DoodleWrapperProps, DoodleWrapperState> implements DoodleWrapperMethods {
    public static defaultProps: DoodleWrapperProps = {
        initialState: {
            doodles: [],
            doodleList: {},
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
        this.getDoodles = this.getDoodles.bind(this);
        this.getDoodle = this.getDoodle.bind(this);
        this.addDoodle = this.addDoodle.bind(this);
    }

    getDoodles(query) {
        let querydefaults: getDoodlesQuery = {
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

        const request = new Request('/api/doodle' + _query, {
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
                    doodles: body.doodles,
                };
            });
        })
        .catch((error) => {
            this.setState(() => {
                return {
                    doodles: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    }

    getDoodle(_doodleId) {
        let query = stringify({
            field: [
                '_id',
                'title',
                'details',
                '_imageId',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?'+query : '';

        const request = new Request('/api/doodle/' + _doodleId + query, {
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
            const { _id, title, details, _imageId, discontinued } = body;
            this.setState((preState) => {
                preState.doodleList[_id] = {
                    _doodleId: _id,
                    title: title,
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

    addDoodle(params, callback) {           
        const payload: addDoodleParams = {
            title: params.title,
            details: params.details,
        }

        if ('_imageId' in params) {
            payload._imageId = params._imageId;
        }

        const request = new Request('/api/doodle', {
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

    updateDoodle(params: updateDoodleParams, callback) {

        let payload: updateDoodleParams = {
            _id: params._id
        };

        if ('title' in params) {
            payload.title = params.title;
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

        const request = new Request('/api/doodle', {
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
    const { getDoodles, getDoodle, addDoodle, updateDoodle } = this;
    const { doodles, doodleList, page, totalPages, limit, total, pageTotal } = this.state;
        const context: IDoodleContext = {
            getDoodles: getDoodles,
            getDoodle: getDoodle,
            addDoodle: addDoodle,
            updateDoodle: updateDoodle,
            doodles: doodles,
            doodleList: doodleList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        }
        return (
            <DoodleContext.Provider value={context} >
                {this.props.children}
            </DoodleContext.Provider>
        );
    }
}


export default DoodleWrapper;

export interface doodleProviderOptions {
  props?: DoodleWrapperProps;
}

export const doodleProvider = (Component, options?: doodleProviderOptions) => {
  class DoodleProvider extends React.Component<null, null> {
    render () {
      let doodleWrapperProps: DoodleWrapperProps = {};
      if (options) {
        if ('props' in options) {
          doodleWrapperProps = options.props;
        }
      }
      return (
        <DoodleWrapper {...doodleWrapperProps}>
          <Component {...this.props} />  
        </DoodleWrapper>
      );
    }
  }
  
    return DoodleProvider;
}

export const doodleConsumer = (Component) => {
    class DoodleConsumer extends React.Component<any> {
        render () {
            let { _doodleId } = this.props;
            if ('match' in this.props) {
                if ('_doodleId' in this.props.match.params) {
                    _doodleId = this.props.match.params._doodleId;
                }
            }
            return (
            <DoodleContext.Consumer>
                {(context) => {
                    if (_doodleId) {
                        context.doodle = {
                            _doodleId: _doodleId,
                            title: '',
                            details: RichTextEditor.createEmptyValue().toString('html'),
                            _imageId: null,
                            discontinued: false,
                        };

                        if (_doodleId in context.doodleList) {

                            const doodle = context.doodleList[_doodleId];
                            context.doodle = {
                                _doodleId: _doodleId,
                                title:               'title' in doodle ? doodle.title : '',
                                details:           'details' in doodle ? doodle.details : RichTextEditor.createEmptyValue().toString('html'),
                                _imageId:     '_imageId' in doodle ? doodle._imageId : null,
                                discontinued: 'discontinued' in doodle ? doodle.discontinued : false,
                            };
                        }
                    }
                    return (
                        <Component {...this.props} {...{doodle: context}} />
                    )
                }}
            </DoodleContext.Consumer>
            );
        }
    }
    return DoodleConsumer;
}