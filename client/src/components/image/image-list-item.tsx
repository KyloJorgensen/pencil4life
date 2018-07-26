'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IImageContext, imageConsumer } from './image-provider';
import ImageTag from './image-tag';

const ImamgeListItem = styled.div`

	.image-link {
		display: grid;
		grid-template-rows: minmax(100px, 200px);
		> img {
			max-width: 100%;
			max-height: 100%;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

	}

	.image-wrapper {
		align-self: stretch;
		width: 100%;
		img {
			max-width: 100%;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.title-year-wrapper {
		align-self: end;
		> .title, > .year {
			margin: 0.25em;
			display: inline-block;
		}
		> .year {
			float:right;
		}
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
					<p>{name}</p>
					<p>{alt}</p>
				</Link>
			</ImamgeListItem>
		);		
	}
};

export default imageConsumer(ImageListItem);