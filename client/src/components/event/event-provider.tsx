'use strict';

import * as React from 'react';
import * as querystring from 'querystring';
import * as moment from 'moment';
import eventListItem from './event-list-item';
import { match } from 'react-router';

export interface IEventContext extends IEventWrapperState, IEventWrapperMethods {
    eventItem?: EventItem;
}

const Context: IEventContext =  {
    getEventItems: (query) => {
        console.error('Error: Cannot getEventItems no EventContext.Provider element in parents');
    },
    getEventItem: (_eventItemId) => {
        console.log('Error: Cannot getEventItem no EventContext.Provider element in parents');
    },
    addEventItem: (params, callback) => {
        console.log('Error: Cannot addEventItem no EventContext.Provider element in parents');
    },
    updateEventItem: (params, callback) => {
        console.log('Error: Cannot updateEventItemParams no EventContext.Provider element in parents');
    },
    eventItemList: {},
    eventItems: [],
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
}

export const EventContext = React.createContext(Context);

export interface IEventWrapperProps {
    initialState?: IEventWrapperState;
}

export interface IEventWrapperState {
    eventItemList: {};
    eventItems: string[];
    page: number;
    totalPages: number;
    limit: number;
    total: number;
    pageTotal: number;
}

export interface getEventItemsQuery {
    limit?: number,
    format?: 'json',
    discontinued?: boolean; 
}

export interface EventItem extends addEventItemParams {
    _eventItemId: string,
    createdUpdatedDateTime: string,
    discontinued: boolean,
}

export interface addEventItemParams {
    title: string; 
    start_date: string | moment.Moment | Date; 
    end_date: string | moment.Moment | Date;
    details: string;
}

export interface updateEventItemParams {
    _id: string;
    title?: string; 
    start_date?: string | moment.Moment | Date; 
    end_date?: string | moment.Moment | Date;
    details?: string;
    discontinued?: boolean;
}

export interface IEventWrapperMethods {
    getEventItems: (query: getEventItemsQuery) => void;
    getEventItem: (_eventItemId: string) => void;
    addEventItem: (params: addEventItemParams , callback: (error, _eventItemId) => void) => void;
    updateEventItem: (params: updateEventItemParams, callback: (error: boolean) => void) => void;
}

export class EventWrapper extends React.Component<IEventWrapperProps, IEventWrapperState, IEventWrapperMethods> implements IEventWrapperMethods {
    public static defaultProps: (IEventWrapperProps) = {
        initialState: {
            eventItemList: {},
            eventItems: [],
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
        }
    } 
    constructor(props) {
        super(props);
        this.state = this.props.initialState;
        this.getEventItems = this.getEventItems.bind(this);
        this.getEventItem = this.getEventItem.bind(this);
        this.addEventItem = this.addEventItem.bind(this);
        this.updateEventItem = this.updateEventItem.bind(this);
    }

    getEventItems(query) {
        let querydefaults: getEventItemsQuery = {
            limit: 100,
            format: 'json',
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

        let _query = querystring.stringify(querydefaults);
        _query = _query ? '?'+_query : '';

        const request = new Request('/api/event/' + _query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        fetch(request)
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
                    eventItems: body.eventItems,
                };
            });
        })
        .catch((error) => {
            this.setState(() => {
                return {
                    eventItems: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    }

    getEventItem(_eventItemId) {
        let query = querystring.stringify({
            field: [
                '_id',
                'title',
                'start_date',
                'end_date',
                'details',
                'discontinued',
            ],
            format: 'json',
        });
        query = query ? '?'+query : '';

        const request = new Request('/api/event/' + _eventItemId  + query, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        
        fetch(request).then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText)
                error.message = String(response);
                throw error;
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((body) => {
            const {_id, title, start_date, end_date, details, createdAt, updatedAt, discontinued} = body;

            this.setState((preState) => {
                const { eventItemList } = preState;
                    
                let createDateTime = moment(createdAt);
                let updatedDateTime = moment(updatedAt);

                let daymessages = {
                    sameDay: '[today]',
                    nextDay: '[tomorrow]',
                    nextWeek: 'dddd',
                    lastDay: '[yesterday]',
                    lastWeek: '[last] dddd',
                    sameElse: 'MM/DD/YYYY',
                };
                let createdDay = createDateTime.calendar(null, daymessages);
                let updatedDay = updatedDateTime.calendar(null, daymessages);

                let createdTime = createDateTime.format("h:mm a");
                let updatedTime = updatedDateTime.format("h:mm a");

                let createdUpdatedDateTime = 'Created ';
                if (createdDay !== 'today' && createdDay !== 'yesterday') {
                    createdUpdatedDateTime += 'on '
                }
                createdUpdatedDateTime +=  createdDay + ' at ' + createdTime;

                if (createdDay !== updatedDay) {
                    createdUpdatedDateTime += ' updated '
                    if (updatedDay !== 'today' && updatedDay !== 'yesterday') {
                        createdUpdatedDateTime += 'on ';
                    }
                    createdUpdatedDateTime += updatedDay + ' at ' + updatedTime;

                } else if (createdTime !== updatedTime) {
                    createdUpdatedDateTime += ' updated at ' + updatedTime;
                } 

                createdUpdatedDateTime += '.';
                
                eventItemList[_id] = {
                    _eventItemId: _id,
                    title: title,
                    start_date: start_date,
                    end_date: end_date,
                    details: details,
                    createdUpdatedDateTime: createdUpdatedDateTime,
                    discontinued: discontinued,
                };

                return {eventItemList: eventItemList};
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    addEventItem(params, callback) {
        const payload = {
            title: params.title,
            start_date: params.start_date,
            end_date: params.end_date,
            details: params.details,
        };
            
        const url = '/api/event';
        const request = new Request('/api/event/', {
            method: 'POST',
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
            return response.json();
        })
        .then((response) => {
            callback(false, response._id);
        })
        .catch((error) => {
            callback(true);
        });
    }

    updateEventItem(params:updateEventItemParams, callback) {

        let payload: updateEventItemParams = {
            _id: params._id
        };

        if ('title' in params) {
            payload.title = params.title;
        }
        if ('start_date' in params) {
            payload.start_date = params.start_date;
        }
        if ('end_date' in params) {
            payload.end_date = params.end_date;
        }
        if ('details' in params) {
            payload.details = params.details;
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }

        const request = new Request('/api/event', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload), 
        });

        return fetch(request)
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
            console.log(error);
        });
    }

    render() {
        const { getEventItems, getEventItem, addEventItem, updateEventItem } = this;
        const { eventItems, page, pageTotal, totalPages, limit, total, eventItemList } = this.state;

        const context = {
            eventItems: eventItems,
            eventItemList: eventItemList,
            page: page,
            pageTotal: pageTotal,
            totalPages: totalPages,
            limit: limit,
            total: total,
            getEventItems: getEventItems,
            getEventItem: getEventItem,
            addEventItem: addEventItem,
            updateEventItem: updateEventItem,
        }
        
        return (
            <EventContext.Provider value={context}>
                {this.props.children}
            </EventContext.Provider>
        );
    }
}

export default EventWrapper;



export interface eventProviderOptions {
  props?: IEventWrapperProps;
}

export const eventProvider = (Component, options?: eventProviderOptions) => {
  class EventProvider extends React.Component<null, null> {
    render () {
      let eventWrapperProps: IEventWrapperProps = {};
      if (options) {
        if ('props' in options) {
          eventWrapperProps = options.props;
        }
      }
      return (
        <EventWrapper {...eventWrapperProps}>
          <Component {...this.props} />  
        </EventWrapper>
      );
    }
  }
  
    return EventProvider;
}

type ANY = any;
interface eventConsumerprops extends ANY {
    _eventItemId?: string
    match?: match<{_eventItemId: string}>
}

export const eventConsumer = (Component) => {
  class EventConsumer extends React.Component<eventConsumerprops, null> {
    render () {
        let { _eventItemId } = this.props;
        if ('match' in this.props) {
            if ('_eventItemId' in this.props.match.params) {
                _eventItemId = this.props.match.params._eventItemId;
            }
        }
        return (
            <EventContext.Consumer>
                {(context) => {
                    if (_eventItemId) {
                        context.eventItem = {
                            _eventItemId: _eventItemId,
                            title: '',
                            start_date: '',
                            end_date: '',
                            details: '',
                            createdUpdatedDateTime: '',
                            discontinued: false,
                        };

                        if (_eventItemId in context.eventItemList) {
                            context.eventItem = {
                                _eventItemId: _eventItemId,
                                title:                                   'title' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].title : '',
                                start_date:                         'start_date' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].start_date : '',
                                end_date:                             'end_date' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].end_date : '',
                                details:                               'details' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].details : '',
                                createdUpdatedDateTime: 'createdUpdatedDateTime' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].createdUpdatedDateTime : '',
                                discontinued:                     'discontinued' in context.eventItemList[_eventItemId] ? context.eventItemList[_eventItemId].discontinued : false,
                            };
                        }
                    }

                    return (
                        <Component {...this.props} {...{event: context}} />
                    )
                }}
            </EventContext.Consumer>
        );
    }
  }

  return EventConsumer;
}

















// const UPDATE_EVENT_ITEM = 'UPDATE_EVENT_ITEM';
// const updateEventItem = function(_new, _old, callback) {
//     let payload = {_id: _old._eventItemId};
//     let vaildKeys = ['title', 'start_date', 'end_date', 'details', 'discontinued'];

//     for (let i = 0; i < vaildKeys.length; i++) {
//         if (_new[vaildKeys[i]] != _old[vaildKeys[i]]) {
//             payload[vaildKeys[i]] = _new[vaildKeys[i]];
//         }
//     }
    
//     return function(dispatch) {
//         const url = '/api/event';
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
//             return dispatch(updateEventItemSuccess());
//         })
//         .catch(function(error) {
//             callback(true);
//             return dispatch(updateEventItemError(error));
//         });
//     };
// };

// const UPDATE_EVENT_ITEM_SUCCESS = "UPDATE_EVENT_ITEM_SUCCESS";
// const updateEventItemSuccess = function() {
//     return {
//         type: UPDATE_EVENT_ITEM_SUCCESS,
//     };
// };

// const UPDATE_EVENT_ITEM_ERROR = 'UPDATE_EVENT_ITEM_ERROR';
// const updateEventItemError = function(error) {
//     return {
//         type: UPDATE_EVENT_ITEM_ERROR,
//         error: error,
//     };
// };

// exports.updateEventItem = updateEventItem;
// exports.UPDATE_EVENT_ITEM_SUCCESS = UPDATE_EVENT_ITEM_SUCCESS;
// exports.updateEventItemSuccess = updateEventItemSuccess;
// exports.UPDATE_EVENT_ITEM_ERROR = UPDATE_EVENT_ITEM_ERROR;
// exports.updateEventItemError = updateEventItemError;