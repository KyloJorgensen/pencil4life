'use strict';

import * as React from 'react';
import EventList from './event-list';
import { IUserContext, userConsumer } from '../user/user-provider';

export interface EventPageProps {
    user: IUserContext
}

export interface EventPageState {
    discontinued: boolean;
}

export interface EventPageMethods {
    handleCheckboxChange: (event: UIEvent) => void;
}

class EventPage extends React.Component<EventPageProps, EventPageState, EventPageMethods> implements EventPageMethods {
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
        const { handleCheckboxChange } = this;
        const { discontinued } = this.state;
        const { admin } = this.props.user;

        let adminOptions = admin ? (
            <div>
                <h5>Admin Options</h5>
                <label>Discontinued</label><input type='checkbox' checked={!!discontinued} name="discontinued" onChange={handleCheckboxChange} />
            </div>
        ) : '';

        return (
			<div className="event-wrapper" >
                {adminOptions}
				<EventList discontinued={discontinued} />
			</div>
		);			
	}
};

export default userConsumer(EventPage);