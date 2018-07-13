'use strict';

import * as React from 'react';
import ImageList from './image-list';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface ImagePageProps {
    user: IUserContext;
}

export interface ImagePageState {
    discontinued: boolean;
}

export interface ImagePageMethods {
    handleCheckboxChange: (event: UIEvent) => void;
}

class ImagePage extends React.Component<ImagePageProps, ImagePageState> implements ImagePageMethods {
    constructor(props) {
        super(props);
        this.state = {
        	discontinued: false,
        };

		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        const { name, checked } = event.target;
        this.setState((prevState) => {
            prevState[name] = checked;
            return prevState;
        });
    }

	render() {
        let adminOptions = this.props.user.admin ? (
            <div>
                <h5>Admin Options</h5>
                <label>Discontinued</label><input type='checkbox' checked={!!this.state.discontinued} name="discontinued" onChange={this.handleCheckboxChange} />
            </div>
        ) : '';

        return (
			<div className="image-wrapper" >
                {adminOptions}
				<ImageList discontinued={this.state.discontinued} />
			</div>
		);			
	}
};

export default userConsumer(ImagePage);