'use strict';

import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from '../utilities/dropzone';
import { IUserContext, userConsumer } from '../user/user-provider';
import { imageConsumer, Image, IImageContext, newImageParams } from './image-provider';
import { Location } from 'history';
import { Popout, LoadingSpinner } from '../utilities/styled.components';

export interface ImageNewProps {
	user: IUserContext;
	location: Location;
	required?: boolean;
	currentImage?: File;
	name?: string;
	alt?: string;
	image: IImageContext;
	hitKey?: (event) => void;
	addNewImage?: (event) => void;
	addNewImageResult?: (error: boolean, _imageId: string) => void;
	imageDetailChanged?: (event) => void;
	imageChanged?: (images: File[]) => void;
	deleteImage?: (event) => void;
}

export interface ImageNewState {
	redirect: boolean;
	_imageId: string;
	required: boolean;
	name: string;
	alt: string;
	currentImage: File;
	loading: boolean;
}

export interface ImageNewMethods {
	hitKey: (event) => void;
	addNewImage: (event) => void;
	addNewImageResult: (error: boolean, _imageId: string) => void;
	redirect: (event: UIEvent) => void;
	imageDetailChanged: (event) => void;
	imageChanged: (images: File[]) => void;
	deleteImage: (event) => void;
}

class ImageNew extends React.Component<ImageNewProps, ImageNewState> implements ImageNewMethods {
    constructor(props) {
		super(props);
        this.state = {
        	redirect: false,
        	_imageId: null,
        	required: false,
        	name: '',
        	alt: '',
			currentImage: new File([], 'file'),
			loading: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.addNewImage = this.addNewImage.bind(this);
		this.addNewImageResult = this.addNewImageResult.bind(this);
		this.redirect = this.redirect.bind(this);
		this.imageDetailChanged = this.imageDetailChanged.bind(this);
    	this.imageChanged = this.imageChanged.bind(this);
    	this.deleteImage = this.deleteImage.bind(this);
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.addNewImage(event);
        }
	}

	imageDetailChanged(event) {
		const {name, value} = event.target;
		this.setState((preState) => {
			preState[name] = value;
			return preState;
		});
    }

    addNewImage(event) {
		event.preventDefault();
		// const { currentImage, name, alt } = this.state;
		
		// const { currentImage as propsCurrentImage, name, alt } = this.props;
		const currentImage = 'currentImage' in this.props ? this.props.currentImage : this.state.currentImage;
		const name = 'name' in this.props ? this.props.name : this.state.name;
		const alt = 'alt' in this.props ? this.props.alt : this.state.alt;
		
		if (!name || !currentImage.name) {
			this.setState(() => {
				return {required: true};
			});
			return;
		}

		const params: newImageParams = {
			image: currentImage,
			name: name,
			alt: alt,

		};

		let addNewImageResult = 'addNewImageResult' in this.props ? this.props.addNewImageResult : this.addNewImageResult;
		this.props.image.addImage(params, addNewImageResult);
		this.setState(() => {
			return {
				required: false,
				loading: true,
			};
		});
    }

    addNewImageResult(error, _imageId) {
    	if (error) {
			this.setState(() => {
				return {
					required: true,
					loading: false,
				};
			});
    	} else {
			this.setState(() => {
				return {
					_imageId: _imageId,
					loading: false,
				};
			});
    	} 
    }

    imageChanged(images: File[]) {
		this.setState(() => {
			if (images.length > 0) {
				return {currentImage: images[0]};
			}
			return;
		});
    }

    deleteImage(event) {
		this.setState(() => {
			return {
				required: false,
				name: '',
				alt: '',
				currentImage: new File([], ''),
			}
		});
    }

	redirect(event) {
		this.setState(() => {
			return {redirect: true};
		});
	}

	render() {
		const { redirect, _imageId, loading } = this.state;
		const { admin } = this.props.user;
		if (redirect) {
			return (<Redirect to='/image' />);
		}
		if (_imageId) {
			return (<Redirect to={'/image/item/'+this.state._imageId} />);
		}
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: this.props.location.pathname}}}/>)
		}
		// variables
		const currentImage = 'currentImage' in this.props ? this.props.currentImage : this.state.currentImage;
		const name = 'name' in this.props ? this.props.name : this.state.name;
		const alt = 'alt' in this.props ? this.props.alt : this.state.alt;
		const required = 'required' in this.props ? this.props.required : this.state.required;

		// functions
		const deleteImage = 'deleteImage' in this.props ? this.props.deleteImage : this.deleteImage;
		const imageDetailChanged = 'imageDetailChanged' in this.props ? this.props.imageDetailChanged : this.imageDetailChanged;
		const hitKey = 'hitKey' in this.props ? this.props.hitKey : this.hitKey;
		const addNewImage = 'addNewImage' in this.props ? this.props.addNewImage : this.addNewImage;
		const imageChanged = 'imageChanged' in this.props ? this.props.imageChanged : this.imageChanged;

		const dropzoneDisplay = 'name' in currentImage ? (
			<div className='dropzone-display'>
				<img src={window.URL.createObjectURL(currentImage)} alt={alt}/>
				<p>Drop Image or Click to Browse</p>
			</div>
		) : '';

		return (
			<div className="image-new-item-wrapper" >
				<div className='image-wrapper' >
					<div className="image" >
						<div className="image-pic">
							<Dropzone multiple={false} handleChange={imageChanged} fileTypes={['image/jpeg','image/pjpeg','image/png']} >
								{dropzoneDisplay}
							</Dropzone>
						</div>
						<div className="image-info" >
							<button onClick={deleteImage} >X</button>
							<div className="image-info-details" >
								<h3>New Image</h3>
								{required ? (<p className="errortext" >Image required</p>) : ''}
								<p>{currentImage.name}</p>
								<p>{currentImage.type} </p>
							</div>
						</div>
					</div>
					<div className="image-input" >
						<label>Name</label>
						<input type="text" onKeyPress={hitKey} name="name" value={name} onChange={imageDetailChanged} placeholder="Great Image" />{required ? (<span className="errortext" >*</span>) : ''}
						<label>Alt</label>
						<input type="text" onKeyPress={hitKey} name="alt" value={alt} onChange={imageDetailChanged} placeholder="blue tree pencil4life" />
					</div>
				</div>
				<input type='submit' onClick={addNewImage} value='SAVE' />
				{loading ? (
					<Popout>
						<div>
							<LoadingSpinner/>
						</div>
					</Popout>
				) : ''}
			</div>
		);			
	}
};

export default userConsumer(imageConsumer(ImageNew));