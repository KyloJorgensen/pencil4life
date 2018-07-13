'use strict';

import * as  React from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from '../utilities/dropzone';
import ImageNew from './image-new';
import { IUserContext, userConsumer } from '../user/user-provider';
import { IImageContext, imageConsumer, Image, newImageParams } from './image-provider';
import { Location } from 'history';
import ImageListItem from './image-list-item';

export interface ImageNewPageProps {
	user: IUserContext;
	image: IImageContext;
	location: Location;
}

export interface newImageParamsList extends newImageParams {
	required?: boolean;
	_imageId?: string;
}

export interface ImageNewPageState {
	required: boolean;
	images: newImageParamsList[];
}

export interface ImageNewPageMethods {
	hitKey: (index: number, event: UIEvent) => void;
	addNewImage: (index: number, event: UIEvent) => void;
	addNewImages: (event: UIEvent) => void;
	addNewImageResult: (index: number, error: boolean, _imageId: string) => void;
	imageDetailChanged: (index: number, event: UIEvent) => void;
	imagesChanged: (images: File[]) => void;
	imageChanged: (index: number, images: File[]) => void;
	deleteImage: (image: number) => void;
	deleteAllImages: () => void;
}

class ImageNewPage extends React.Component<ImageNewPageProps, ImageNewPageState> implements ImageNewPageMethods {
    constructor(props) {
        super(props);
        this.state = {
        	required: false,
        	images: [],
        };

		this.hitKey = this.hitKey.bind(this);
		this.addNewImage = this.addNewImage.bind(this);
		this.addNewImages = this.addNewImages.bind(this);
		this.addNewImageResult = this.addNewImageResult.bind(this);
		this.imageDetailChanged = this.imageDetailChanged.bind(this);
    	this.imagesChanged = this.imagesChanged.bind(this);
    	this.imageChanged = this.imageChanged.bind(this);
    	this.deleteImage = this.deleteImage.bind(this);
    	this.deleteAllImages = this.deleteAllImages.bind(this);
    }

    deleteImage(index) {
		this.setState((prevState) => {
			prevState.images.splice(index, 1);
			return prevState;
		});
    }

    deleteAllImages() {
		this.setState(() => {
			return {images: []};
		});
    }

    imageDetailChanged(index, event) {
		const { name, value } = event.target;
		this.setState((prevState) => {
			prevState.images[index][name] = value;
			return prevState;
		});
    }

	hitKey(index, event) {
		if (event.key == 'Enter') {
            this.addNewImage(index, event);
        }
	}

    addNewImage(index, event) {
		event.preventDefault();
		const { image, name, alt } = this.state.images[index];
		if (!name || !image.name) {
			let _state = this.state;
			_state.images[index].required = true;
			_state.images[index]._imageId = '';
			this.setState(_state);
			return;
		}

		const newImage: newImageParams = {
			image: image,
			name: name,
			alt: alt,
		};

		const { addNewImageResult } = this;
		const _addNewImageResult = function(error, _imageId) {
			addNewImageResult(index, error, _imageId);
		}
		this.props.image.addImage(newImage, _addNewImageResult);
		let _state = this.state;
		_state.images[index].required = false;
		this.setState(_state);
    }

    addNewImages(event) {
    	event.preventDefault();
    }

    addNewImageResult(index, error, _imageId) {
    	if (error) {
			this.setState((prevState) => {
				prevState.images[index].required = true;
				return prevState;
			});
    	} else {
			// this.setState(() => {
			// 	return {_imageId: _imageId};
			// });
			this.setState((prevState) => {
				prevState.images[index]._imageId = _imageId;
				return prevState;
			});
    	} 
    }

    imageChanged(index, images) {
    	const _state = this.state;
    	_state.images[index].image = images[0];    	
    	this.setState(_state);
    }

    imagesChanged(images) {
		this.setState((prevState) => {
			images.forEach((image) => {
				prevState.images.push({
					image: image,
					name: '',
					alt: '',
					required: false,
				})
			});
			return prevState;
		});
    }

	render() {
		// const { _imageId } = this.state;
		const { images } = this.state;
		const { admin } = this.props.user;
		const { deleteAllImages, deleteImage, imageDetailChanged, hitKey, addNewImage, addNewImages, imageChanged, imagesChanged } = this;

		// if (_imageId) {
		// 	return (<Redirect to={'/image/item/'+this.state._imageId} />);
		// }
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: this.props.location.pathname}}}/>)
		}

		const _images = [];
		images.forEach(function(_image, index, array){
			const { image, name, alt, required, _imageId } = _image;
			const _deleteImage = function() {
				deleteImage(index);
			};
			const _imageDetailChanged = function(e) {
				imageDetailChanged(index, e);
			}
			const _hitKey = function(e) {
				hitKey(index, e);
			}
			const _addNewImage = function(e) {
				addNewImage(index, e);
			}
			const _imageChanged = function(e) {
				imageChanged(index, e);
			}
			if (_imageId) {
				return _images.push(
					<li className="image-new-list-item" key={index} >
						<p>Saved</p>
						<button onClick={_deleteImage} >X</button>
						<ImageListItem _imageId={_imageId} />
						
					</li>
				);
			}
			_images.push(
				<li className="image-new-list-item" key={index} >
					<ImageNew required={required} currentImage={image} name={name} alt={alt} deleteImage={_deleteImage} imageDetailChanged={_imageDetailChanged} hitKey={_hitKey} addNewImage={_addNewImage} imageChanged={_imageChanged} />
				</li>
			);
		});	



		return (
			<div className="image-new-page-wrapper" >							
				<Dropzone multiple={true} handleChange={imagesChanged} fileTypes={['image/jpeg','image/pjpeg','image/png']} />
				<ul className="image-new-list" >
					{_images}
				</ul>
				{images.length > 1 ? (<input type="button" onClick={deleteAllImages} value='Delete All Images' />) : ''}
				{images.length > 1 ? (<input type='submit' onClick={addNewImages} value='SAVEALL' />) : ''}
			</div>
		);			
	}
};

export default userConsumer(imageConsumer(ImageNewPage));