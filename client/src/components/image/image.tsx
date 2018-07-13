'use strict';

import * as React from 'react';
import {Link} from "react-router-dom";
import { IImageContext, imageConsumer } from './image-provider';
import { userConsumer, IUserContext } from '../user/user-provider';

export interface ImageProps {
	image: IImageContext;
	user: IUserContext;
}

class Image extends React.Component<ImageProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    	this.props.image.getImage(this.props.image.image._imageId);
    }

	render() {
		const { admin } = this.props.user;
		const { _imageId, name, alt, filename } = this.props.image.image;
		return (
			<div className="image-wrapper" >
				{admin ? <p className="text-right" ><Link to={'/image/edit/'+_imageId}>EDIT</Link></p> : ''}
				<img src={filename} alt={alt} />
				<p>{name}</p>
				<p>{alt}</p>
			</div>
		);			
	}
};

export default userConsumer(imageConsumer(Image));