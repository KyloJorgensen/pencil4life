'use strict';

import * as React from 'react';
import { IImageContext, imageConsumer } from './image-provider';

export interface ImageTagProps {
	image: IImageContext;
	_imageId: string;
}

class ImageTag extends React.Component<ImageTagProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.image.getImage(this.props._imageId);
    }

	render() {
		const { alt, filename } = this.props.image.image;
		return (
			<img src={filename} alt={alt} />
		);			
	}
};

export default imageConsumer(ImageTag);