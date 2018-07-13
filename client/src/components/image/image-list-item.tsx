'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { IImageContext, imageConsumer } from './image-provider';

export interface ImageListItemProps {
	image: IImageContext;
	_imageId: string;
}

class ImageListItem extends React.Component<ImageListItemProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    	this.props.image.getImage(this.props._imageId);
    }

	render() {
		const { name, alt, filename, _imageId } = this.props.image.image;
		return (
			<div className="image-list-item-wrapper" >	
				<Link className="image-link" to={'/image/item/'+_imageId} >
					<img src={filename} alt={alt}/>
					<p>{name}</p>
					<p>{alt}</p>
				</Link>
			</div>
		);		
	}
};

export default imageConsumer(ImageListItem);