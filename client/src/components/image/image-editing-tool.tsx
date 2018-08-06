'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import {Redirect, withRouter} from "react-router-dom";
import * as Datetime from 'react-datetime';
import ImageNew from '../image/image-new';
import ImageEdit from '../image/image-edit';
import { IUserContext, userConsumer } from '../user/user-provider';
import { Location } from 'history';
import { Popout } from '../utilities/styled.components';
import ImageListItem from './image-list-item';
import Dropzone from '../utilities/dropzone';
import styled from 'styled-components';
import ImageTag from './image-tag';

const ImageEditingToolWrapper = styled.div`
	> .image-display {
		display: grid;
		grid-template-rows: minmax(100px, 300px);
		grid-gap: 1em;

		img {
			max-height: 100%;
		}
		
		> .image-display-options {
			display: flex;
			justify-content: space-evenly;
		}
	}

	> .popout > .edit {
		display: flex;
		flex-wrap: wrap-reverse;
		> * {
			flex-grow: 1;
		}
		
		.exit {
			flex-grow: 0;
			align-self: end;
			color: white;
			background-color: #e98383;
			width: 3.5em;
			line-height: 2em;
			text-align: center;
			display: block;
			margin-left: auto;
			margin-right: 1em;
			padding: 0;
		}
	}
`;

export interface ImageEditingToolProps {
	user: IUserContext;
	location: Location;
	_imageId: string;
	removeImage: () => void;
	onChange: (_imageId) => void;
}

export interface ImageEditingToolState {
	imageRequired: boolean;
	show: boolean;
	currentImage: File;
}

export interface ImageEditingToolMethods {
	addNewImageResult: (error: boolean, _imageId: string) => void;
	handleDropzoneImageChange: (images: File[]) => void;
	cancel: () => void;
	toggleShow: () => void;
}

class ImageEditingTool extends React.Component<ImageEditingToolProps, ImageEditingToolState> implements ImageEditingToolMethods {
    constructor(props) {
        super(props);
        this.state = {
			imageRequired: false,
			show: false,
			currentImage: new File([], ''),
		};

		this.addNewImageResult = this.addNewImageResult.bind(this);
		this.handleDropzoneImageChange = this.handleDropzoneImageChange.bind(this);
		this.cancel = this.cancel.bind(this);
		this.toggleShow = this.toggleShow.bind(this);
	}

	addNewImageResult(error, _imageId) {
		if (error) {
			this.setState(() => {
				return {imageRequired: true};
			});
		} else {
			this.setState(() => {
				return {
					imageRequired: false,
					show: false,
					currentImage: new File([], ''),
				};
			});
			this.props.onChange(_imageId);
		} 
	}

	handleDropzoneImageChange(images) {
		this.setState(() => {
			if (images.length > 0) {
				return {
					currentImage: images[0],
					show: true,
				};
			}
			return;
		});
	}

	cancel() {
		this.setState(() => {
			return {
				currentImage: new File([], ''),
				show: false,
			};
		});
	}

	toggleShow() {
		this.setState((prevState) => {
			return {
				show: !prevState.show,
			};
		});
	}
	
	render() {
		const { addNewImageResult, handleDropzoneImageChange, cancel, toggleShow } = this;
		const { imageRequired, show, currentImage } = this.state;
		const { _imageId, removeImage } = this.props;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;

		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}

		return (
			<ImageEditingToolWrapper>
				{_imageId ? (
					<div className='image-display'>
						<ImageTag _imageId={_imageId} displayDetails={true} />
						<div className="image-display-options">
							<button onClick={toggleShow}>EDIT</button>
							<button onClick={removeImage}>REMOVE</button>
						</div>
					</div>
				) : (
					<Dropzone multiple={false} handleChange={handleDropzoneImageChange} fileTypes={['image/jpeg','image/pjpeg','image/png']} />
				)}				
				{show ? (
					<Popout className="popout" >
						{_imageId ? (
							<div className='edit'>
								<ImageEdit _imageId={_imageId} updateRedirect={false} />
								<button className="exit" onClick={cancel}>x</button>
							</div>
						) : (
							<div>
								<ImageNew deleteImage={cancel} currentImage={currentImage} imageRequired={imageRequired} addNewImageResult={addNewImageResult} />
							</div>
						)}
					</Popout>
				) : ''}
			</ImageEditingToolWrapper>
		);			
	}
};

export default userConsumer(withRouter(ImageEditingTool));