'use strict';

import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from '../utilities/dropzone';
import { IImageContext, imageConsumer } from './image-provider';
import { userConsumer, IUserContext } from '../user/user-provider';
import { Location } from 'history';
import { Popout, LoadingSpinner } from '../utilities/styled.components';

export interface ImageEditProps {
	image: IImageContext;
	user: IUserContext;
	location: Location;
	updateRedirect?: boolean;
	redirectfunc?: () => void;
}

export interface ImageEditState {
	redirect: boolean;
	_imageId: boolean;
	required: boolean;
	discontinued: boolean;
	name: string;
	alt: string;
	image: File;
	loading: boolean;
}

export interface ImageEditMethods {
	hitKey: (event: UIEvent) => void;
	updateImage: (event: UIEvent) => void;
	updateImageResult: (error: boolean) => void;
	redirect: () => void;
	imageDetailChanged: (event: UIEvent) => void;
	imageChanged: (images: File[]) => void;
	handleCheckboxChange: (event: UIEvent) => void;
}

class ImageEdit extends React.Component<ImageEditProps, ImageEditState> implements ImageEditMethods {
	public static defaultProps = {
		updateRedirect: true,
	};
    constructor(props) {
        super(props);
        this.state = {
        	redirect: false,
        	_imageId: false,
        	required: false,
        	discontinued: false,
        	name: '',
        	alt: '',
			image: new File([], ''),
			loading: false,
        };

		this.hitKey = this.hitKey.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.updateImageResult = this.updateImageResult.bind(this);
		this.redirect = this.redirect.bind(this);
		this.imageDetailChanged = this.imageDetailChanged.bind(this);
    	this.imageChanged = this.imageChanged.bind(this);
    	this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    componentWillMount() {
		const { name, alt, discontinued } = this.props.image.image;
		this.setState(() => {
			return {
				name: name,
				alt: alt,
				discontinued: discontinued,
			};
		});
    }

	componentDidUpdate(prevProps: ImageEditProps, prevState) {
		let propsToCheck = ['name', 'alt', 'discontinued'];
		let _state = null;
		propsToCheck.forEach((propToCheck) => {
			if (prevProps.image.image[propToCheck] !== this.props.image.image[propToCheck]) {
				_state = _state == null ? {} : _state;
				_state[propToCheck] = this.props.image.image[propToCheck];
			}
		})
		if (_state) {
			this.setState(_state);
		}
	}

    componentDidMount() {
    	this.props.image.getImage(this.props.image.image._imageId);
    }

	hitKey(event) {
		if (event.key == 'Enter') {
            this.updateImage(event);
        }
	}

	imageDetailChanged(event) {
		const { name, value } = event.target;
		this.setState((prevState) => {
        	prevState[name] = value;
			return prevState;
		});
    }

    updateImage(event) {
		event.preventDefault();
		const { image, name, alt } = this.state;
		
		if (!name) {
			this.setState((prevState) => {
				return {required: true};
			});
			return;
		}

		this.props.image.updateImage(this.state, this.props.image.image, this.updateImageResult);
		this.setState((prevState) => {
			return {
				required: false,
				loading: true,
			};
		});
    }

    updateImageResult(error) {
    	if (error) {
			this.setState((prevState) => {
				return {
					required: true,
					loading: false,
				};
			});
    	} else {
			this.setState((prevState) => {
				return {
					required: false,
					loading: false,
				};
			});
    		if (this.props.updateRedirect) {
				this.redirect();
			}
			if ('redirectfunc' in this.props) {
				this.props.redirectfunc();
			}
    	} 
    }

    imageChanged(images) {
		const _state = this.state;
		this.setState(() => {
			return { image: images[0]};
		});
    }

    handleCheckboxChange(event) {
		const { name, checked } = event.target;
		this.setState((prevState) => {
			prevState[name] = checked;
			return prevState;
		});
    }

	redirect() {
		this.setState(() => {
			return {redirect: true};
		});
	}

	render() {
		const { imageDetailChanged, hitKey, updateImage, imageChanged, handleCheckboxChange } = this;
		const { redirect, image, name, alt, required, discontinued, loading } = this.state;
		const { filename, _imageId } = this.props.image.image;
		const { admin } = this.props.user;
		if (redirect) {
			return (<Redirect to={'/image/item/'+_imageId} />);
		}
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: this.props.location.pathname}}}/>)
		}

		const dropzoneDisplay = image.name ? (
			<div className='dropzone-display'>
				<img src={window.URL.createObjectURL(image)} alt={alt}/>
				<p>Drop Image or Click to Browse</p>
			</div>
		) : filename ? 
			<div className='dropzone-display'>
				<img src={filename} alt={alt}/>
				<p>Drop Image or Click to Browse</p>
			</div> : '';

		return (
			<div className="image-edit-item-wrapper" >
				<div className='image-wrapper' >
					<div className="image" >
						<div className="image-pic">
							<Dropzone multiple={false} handleChange={imageChanged} fileTypes={['image/jpeg','image/pjpeg','image/png']} >
								{dropzoneDisplay}
							</Dropzone>
						</div>
						<div className="image-info" >
							<div className="image-info-details" >
								<h3>Edit Image</h3>
								{required ? (<p className="errortext" >Image required</p>) : ''}
								<p>{image.name}</p>
								<p>{image.type} </p>
							</div>
						</div>
					</div>
					<div className="image-input" >
						<label>Name{required ? (<span className="errortext" >*</span>) : ''}</label>
						<input type="text" onKeyPress={hitKey} name="name" value={name} onChange={imageDetailChanged} placeholder="Great Image" />
						<label>Alt</label>
						<input type="text" onKeyPress={hitKey} name="alt" value={alt} onChange={imageDetailChanged} placeholder="blue tree pencil4life" />
						<label>Discontinued</label>
					<input type='checkbox' checked={!!discontinued} name="discontinued" onChange={handleCheckboxChange} />
					</div>
				</div>
				<input type='submit' onClick={updateImage} value='SAVE' />
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

export default userConsumer(imageConsumer(ImageEdit));