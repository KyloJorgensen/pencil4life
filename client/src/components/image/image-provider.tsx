'use strict';

import * as React from 'react';
import { stringify } from 'querystring';

import './image.less';

export interface IImageContext extends ImageWrapperMethods, ImageWrapperState{
}

const Context: IImageContext = {
    getImages: (params) => {
        console.error('Error: Cannot getImages no ImageContext.Provider element in parents');
    },
    getImage: (params) => {
        console.error('Error: Cannot getImage no ImageContext.Provider element in parents');
    },
    addImage: (params) => {
        console.error('Error: Cannot addImage no ImageContext.Provider element in parents');
    },
    updateImage: (params) => {
        console.error('Error: Cannot updateImage no ImageContext.Provider element in parents');
    },
    images: [],
    imageList: {},
    page: 0,
    totalPages: 0,
    limit: 0,
    total: 0,
    pageTotal: 0,
};

export const ImageContext = React.createContext(Context);

export interface getImagesQuery {
    discontinued?: boolean;
    limit?: number;
}

export interface newImageParams {
    image: File;
    name: string;
    alt: string;
}

export interface updateImageParams {
    image?: File;
    name?: string;
    alt?: string;
    discontinued?: boolean;
}
export interface Image {
    _imageId: string;
    name: string;
    alt: string;
    filename: string;
    discontinued: boolean;
}

export interface ImageWrapperProps {
  initialState?: ImageWrapperState;
}

export interface ImageWrapperState {
    images: string[];
    imageList: {
        [key: string]: Image;
    };
    page: number;
    totalPages: number;
    limit: number;
    total: number;
    pageTotal: number;
    image?: Image;
}

export interface ImageWrapperMethods {
    getImages: (query: getImagesQuery) => void,
    getImage: (_imageId: string) => void,
    addImage: (params: newImageParams, callback: (error: boolean, _imageId: string) => void) => void,
    updateImage: (_new: updateImageParams, _old: Image, callback: (error: boolean) => void) => void;
}

export class ImageWrapper extends React.Component<ImageWrapperProps, ImageWrapperState> implements ImageWrapperMethods {
    public static defaultProps: ImageWrapperProps = {
        initialState: {
            images: [],
            imageList: {},
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
        this.getImages = this.getImages.bind(this);
        this.getImage = this.getImage.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    getImages(query) {
        let querydefaults: getImagesQuery = {
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

        const request = new Request('/api/image' + _query, {
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
                    images: body.images,
                };
            });
        })
        .catch((error) => {
            this.setState(() => {
                return {
                    images: null,
                    page: null,
                    totalPages: null,
                    limit: null,
                    total: null,
                    pageTotal: null,
                };
            });
        });
    }

    getImage(_imageId) {
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

        const request = new Request('/api/image/' + _imageId + query, {
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
            const { _id, name, alt, filename, discontinued } = body;
            this.setState((preState) => {
                preState.imageList[_id] = {
                    _imageId: _id,
                    name: name,
                    alt: alt,
                    filename: '/images/site/' + filename.split('.')[0].slice(0, -4) + '/'+filename,
                    discontinued: discontinued,
                };
                return preState;
            });
        })
        .catch((error) => {
            console.log(error);
        });

    }

    addImage(params, callback) {
        const data = new FormData();
        data.append('image', params.image);
        data.append('name', params.name);
        data.append('alt', params.alt);

        const request = new Request('/api/image', {
            method: 'POST',
            credentials: 'same-origin',
            body: data, 
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

    updateImage(_new, _old, callback) {
        const data  = new FormData();
        data.append('_id', _old._imageId);
        let vaildKeys = ['name', 'alt', 'image', 'discontinued'];
        vaildKeys.forEach((_key) => {
            if (_key == 'image') {
                if (_new.image.name) {
                    data.append('image', _new.image);
                }
            } else if (_new[_key] != _old[_key]) {
                data.append(_key, _new[_key]);
            }
        })

        // for(var pair of data.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]); 
        // }
    
        const request = new Request('/api/image', {
            method: 'PUT',
            credentials: 'same-origin',
            body: data, 
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
    const { getImages, getImage, addImage, updateImage } = this;
    const { images, imageList, page, totalPages, limit, total, pageTotal } = this.state;
        const context: IImageContext = {
            getImages: getImages,
            getImage: getImage,
            addImage: addImage,
            updateImage: updateImage,
            images: images,
            imageList: imageList,
            page: page,
            totalPages: totalPages,
            limit: limit,
            total: total,
            pageTotal: pageTotal,
        }
        return (
            <ImageContext.Provider value={context} >
                {this.props.children}
            </ImageContext.Provider>
        );
    }
}


export default ImageWrapper;

export interface imageProviderOptions {
  props?: ImageWrapperProps;
}

export const imageProvider = (Component, options?: imageProviderOptions) => {
  class ImageProvider extends React.Component<null, null> {
    render () {
      let imageWrapperProps: ImageWrapperProps = {};
      if (options) {
        if ('props' in options) {
          imageWrapperProps = options.props;
        }
      }
      return (
        <ImageWrapper {...imageWrapperProps}>
          <Component {...this.props} />  
        </ImageWrapper>
      );
    }
  }
  
    return ImageProvider;
}

export const imageConsumer = (Component) => {
    class ImageConsumer extends React.Component<any> {
        render () {
            let { _imageId } = this.props;
            if ('match' in this.props) {
                if ('_imageId' in this.props.match.params) {
                    _imageId = this.props.match.params._imageId;
                }
            }
            return (
            <ImageContext.Consumer>
                {(context) => {
                    if (_imageId) {
                        context.image = {
                            _imageId: _imageId,
                            name: '',
                            alt: '',
                            filename: '',
                            discontinued: false,
                        };

                        if (_imageId in context.imageList) {
                            context.image = {
                                _imageId: _imageId,
                                name:                 'name' in context.imageList[_imageId] ? context.imageList[_imageId].name : '',
                                alt:                   'alt' in context.imageList[_imageId] ? context.imageList[_imageId].alt : '',
                                filename:         'filename' in context.imageList[_imageId] ? context.imageList[_imageId].filename : '',
                                discontinued: 'discontinued' in context.imageList[_imageId] ? context.imageList[_imageId].discontinued : false,
                            };
                        }
                    }
                    return (
                        <Component {...this.props} {...{image: context}} />
                    )
                }}
            </ImageContext.Consumer>
            );
        }
    }
    return ImageConsumer;
}