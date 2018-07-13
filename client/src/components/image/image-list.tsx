'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import ImageListItem from './image-list-item';
import { IImageContext, getImagesQuery, imageConsumer } from './image-provider';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface ImageListProps {
	user: IUserContext;
	image: IImageContext;
	discontinued?: boolean;
	limit?: number;
	displayDetails: boolean;
}

class ImageList extends React.Component<ImageListProps> {
	public static defaultProps = {
		displayDetails: true,
	}
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	let query: getImagesQuery = {};
    	if (this.props.image.limit) {
            query = {};
    		query.limit = this.props.image.limit;
    	}
    	this.props.image.getImages(query);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    	let update = false;
    	let prevDiscontinued = prevProps.discontinued || false;
    	let currentDiscontinued = this.props.discontinued || false;

    	if (prevDiscontinued != currentDiscontinued) {
	    	update = true;
    	}

    	if (update) {
    		let query = {
    			discontinued: this.props.discontinued || false,
    			limit: this.props.limit || 10,
    		}
    		this.props.image.getImages(query);
    	}
    }

	render() {
		const { displayDetails } = this.props;
		const { images } = this.props.image;
		const { admin } = this.props.user;

		let ImageList = [];
		if (images) {
            images.forEach((imageKey) => {
				ImageList.push(<ImageListItem key={imageKey} _imageId={imageKey} displayDetails={displayDetails} />)
			});
		}
		return (
			<div className="image-list-wrapper" >
				{admin ? (
					<div>
						<Link to="/image/new">NEW IMAGE</Link>
						<br/>
					</div>
				) : ''}
				<ul className='image-list' >
					{ImageList}
				</ul>
			</div>
		);			
	}
};

export default userConsumer(imageConsumer(ImageList));