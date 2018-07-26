'use strict';

import * as React from 'react';
import { IImageContext, imageConsumer } from './image-provider';
import styled from 'styled-components';

const ImgWrapper = styled.div`
	align-self: stretch;
	width: 100%;
	img {
		max-width: 100%;
     	max-height: 100%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export interface ImageTagProps {
	image: IImageContext;
	_imageId: string;
}

class ImageTag extends React.Component<ImageTagProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
		if (this.props._imageId) {
			this.props.image.getImage(this.props._imageId);
		}
    }

	render() {
		const { alt, filename } = this.props.image.image;
		return (
			<ImgWrapper>
				<img src={filename} alt={alt} />
			</ImgWrapper>
		);			
	}
};

export default imageConsumer(ImageTag);