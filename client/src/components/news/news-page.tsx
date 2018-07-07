'use strict';

import * as React from 'react';
import NewsList from './news-list';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface NewsPageProps {
    user: IUserContext;
}

export interface NewsPageState {
    discontinued: boolean;
}

export interface NewsPageMethods {
    handleCheckboxChange: (event: UIEvent) => void;
}

class NewsPage extends React.Component<NewsPageProps, NewsPageState, NewsPageMethods> implements NewsPageMethods {
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
			<div className="news-wrapper" >
				{adminOptions}
				<NewsList discontinued={this.state.discontinued} />
			</div>
		);			
	}
};

export default userConsumer(NewsPage);