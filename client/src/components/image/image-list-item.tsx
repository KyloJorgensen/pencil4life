'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IImageContext, imageConsumer } from './image-provider';
import ImageTag from './image-tag';

const ImamgeListItem = styled.div`

	.image-link {    
		display: grid;
		grid-template-rows: 1fr auto;
		height: 100%;
	}
	.name-alt-wrapper {
		align-self: end;
	}
`;

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
		if (this.props._imageId) {
			this.props.image.getImage(this.props._imageId);
		}
    }

	render() {
		const { name, alt, filename, _imageId } = this.props.image.image;
		return (
			<ImamgeListItem className="image-list-item-wrapper" >	
				<Link className="image-link" to={'/image/item/'+_imageId} >
					<ImageTag _imageId={_imageId} />
					<div className="name-alt-wrapper">
						<p>{name}</p>
						<p>{alt}</p>
					</div>
				</Link>
			</ImamgeListItem>
		);		
	}
};

export default imageConsumer(ImageListItem);