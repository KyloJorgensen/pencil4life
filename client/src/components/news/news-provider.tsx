'use strict';

import * as React from 'react';
import * as querystring from 'querystring';
import * as moment from 'moment';

export interface INewsContext extends NewsWrapperMethods, INewsState{
}

const Context: INewsContext = {
  getNewsItems: (query) => {
    console.error('Error: Cannot getNewsItems no NewsContext.Provider element in parents');
  },
  getNewsItem: (_newsItemId) => {
    console.error('Error: Cannot getNewsItem no NewsContext.Provider element in parents');
  },
  addNewsItem: (error, _newsItemId) => {
    console.error('Error: Cannot addNewsItem no NewsContext.Provider element in parents');
  },
  updateNewsItem: (params, callback) => {
    console.error('Error: Cannot updateNewsItem no NewsContext.Provider element in parents');
  },
  page: 0,
  totalPages: 0,
  limit: 0,
  total: 0,
  pageTotal: 0,
  newsItems: [],
  newsItemList: {},
};

export const NewsContext = React.createContext(Context);

export interface getNewsItemsQuery {
    limit?: number;
    discontinued?: boolean;
}

export interface updateNewsItemParams {
    _id: string;
    post?: string;
    discontinued?: boolean;
}

export interface NewsItem {
    _newsItemId: string;
    post: string;
    createdUpdatedDateTime: string;
    discontinued: boolean;
}

export interface INewsProps {
    initialState?: INewsState;
}

export interface INewsState {
    page: number;
    totalPages: number;
    limit: number;
    total: number;
    pageTotal: number;
    newsItems: string[];
    newsItemList: {
        [key: string]: NewsItem
    };
    newsItem?: NewsItem;
}

export interface NewsWrapperMethods {
    getNewsItems: (query?: getNewsItemsQuery) => void;
    getNewsItem: (_newsItemId: string) => void;
    addNewsItem: (post: string, callback: (error: boolean, _newsItemId: string) => void) => void;
    updateNewsItem: (params: updateNewsItemParams, callback: (error: boolean) => void) => void;
}

export class NewsWrapper extends React.Component<INewsProps, INewsState, NewsWrapperMethods> implements NewsWrapperMethods {
    public static defaultProps: INewsProps = {
        initialState: {
            page: 0,
            totalPages: 0,
            limit: 0,
            total: 0,
            pageTotal: 0,
            newsItems: [],
            newsItemList: {},
        },
    }
    constructor(props) {
        super(props)
        this.state = this.props.initialState;
        this.getNewsItems = this.getNewsItems.bind(this);
        this.getNewsItem = this.getNewsItem.bind(this);
    }

    getNewsItems(query) {

        let querydefaults: getNewsItemsQuery = {
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
        
        let _query = querystring.stringify(querydefaults);
        _query = _query ? '?'+_query : '';
        
        const request = new Request( '/api/newsitem' + _query, {
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
                const error = new Error(response.statusText)
                error.message = String(response)
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
                    newsItems: body.newsItems,
                }
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    getNewsItem(_newsItemId) {
        let query = querystring.stringify({
            field: [
                '_id',
                'post',
            ],
            format: 'json',
        });
        query = query ? '?'+query : '';
        
        const request = new Request('/api/newsitem/' + _newsItemId + query, {
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
                const error = new Error(response.statusText)
                error.message = String(response)
                throw error;
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((body) => {
            const {_id, post, createdAt, updatedAt, discontinued} = body;
            this.setState((prevState) => {
                let createDateTime = moment(createdAt);
                let updatedDateTime = moment(updatedAt);
        
                let daymessages = {
                    sameDay: '[Today]',
                    nextDay: '[Tomorrow]',
                    nextWeek: 'dddd',
                    lastDay: '[Yesterday]',
                    lastWeek: '[Last] dddd',
                    sameElse: 'MM/DD/YYYY',
                };
        
                let createdDay = createDateTime.calendar(null, daymessages);
                let updatedDay = updatedDateTime.calendar(null, daymessages);
        
                let createdTime = createDateTime.format("h:mm a");
                let updatedTime = updatedDateTime.format("h:mm a");
        
                let createdUpdatedDateTime = 'Created ';
                if (createdDay !== 'Today' && createdDay !== 'Yesterday') {
                    createdUpdatedDateTime += 'on '
                }
                createdUpdatedDateTime +=  createdDay + ' at ' + createdTime;
        
                if (createdDay !== updatedDay) {
                    createdUpdatedDateTime += ' Updated '
                    if (updatedDay !== 'Today' && updatedDay !== 'Yesterday') {
                        createdUpdatedDateTime += 'on ';
                    }
                    createdUpdatedDateTime += updatedDay + ' at ' + updatedTime;
        
                } else if (createdTime !== updatedTime) {
                    createdUpdatedDateTime += ' Updated at ' + updatedTime;
                }        
        
                prevState.newsItemList[_id] = {
                    _newsItemId: _id,
                    post: post,
                    createdUpdatedDateTime: createdUpdatedDateTime,
                    discontinued: discontinued,
                };
                return prevState;
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    addNewsItem(post, callback) {
        const payload = {
            post: post,
        };
        const request = new Request('/api/newsitem', {
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
                error.message = String(response)
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

    updateNewsItem(params, callback) {
        
        let payload: updateNewsItemParams = {
            _id: params._id
        };

        if ('post' in params) {
            payload.post = params.post;
        }
        if ('discontinued' in params) {
            payload.discontinued = params.discontinued;
        }
        
        const request = new Request('/api/newsitem', {
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
                error.message = String(response)
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
        const { getNewsItems, getNewsItem, addNewsItem, updateNewsItem } = this;
        const { page, totalPages, limit, total, pageTotal, newsItems, newsItemList } = this.state;
        const context: INewsContext = {
            getNewsItems: getNewsItems, 
            getNewsItem: getNewsItem, 
            addNewsItem: addNewsItem,
            updateNewsItem: updateNewsItem,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
            newsItems: newsItems,
            newsItemList: newsItemList,
        }
        return (
            <NewsContext.Provider value={context} >
                {this.props.children}
            </NewsContext.Provider>
        );
    }
}


export default NewsWrapper;

export interface newsProviderOptions {
  props?: INewsProps;
}

export const newsProvider = (Component, options?: newsProviderOptions) => {
  class NewsProvider extends React.Component<null, null> {
    render () {
      let newsWrapperProps: INewsProps = {};
      if (options) {
        if ('props' in options) {
          newsWrapperProps = options.props;
        }
      }
      return (
        <NewsWrapper {...newsWrapperProps}>
          <Component {...this.props} />  
        </NewsWrapper>
      );
    }
  }
  
    return NewsProvider;
}

export const newsConsumer = (Component) => {
    class NewsConsumer extends React.Component<any> {
    render () {
        let { _newsItemId } = this.props;
        if ('match' in this.props) {
            if ('_newsItemId' in this.props.match.params) {
                _newsItemId = this.props.match.params._newsItemId;
            }
        }
        return (
          <NewsContext.Consumer>
            {(context) => {
                if (_newsItemId) {
                    context.newsItem = {
                        _newsItemId: _newsItemId,
                        post: '',
                        createdUpdatedDateTime: '',
                        discontinued: false,
                    };

                    if (_newsItemId in context.newsItemList) {
                        context.newsItem = {
                            _newsItemId: _newsItemId,
                            post:                                     'post' in context.newsItemList[_newsItemId] ? context.newsItemList[_newsItemId].post : '',
                            createdUpdatedDateTime: 'createdUpdatedDateTime' in context.newsItemList[_newsItemId] ? context.newsItemList[_newsItemId].createdUpdatedDateTime : '',
                            discontinued:                     'discontinued' in context.newsItemList[_newsItemId] ? context.newsItemList[_newsItemId].discontinued : false,
                        };
                    }
                }  
              return (
                <Component {...this.props} {...{news: context}} />
              )
            }}
          </NewsContext.Consumer>
        );
      }
    }
  
    return NewsConsumer;
}