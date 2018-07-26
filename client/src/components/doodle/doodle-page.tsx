'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link, Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
import { doodleProvider } from './doodle-provider';
import { IUserContext, userConsumer } from '../user/user-provider';
import DoodleList from './doodle-list';
import Doodle from './doodle';
import DoodleNew from './doodle-new';
import DoodleEdit from './doodle-edit';

const Wrapper = styled.div`
	display: grid;
	grid-row-gap: 1em;
`;

export interface DoodlePageProps {
	user: IUserContext;
}

export interface DoodlePageState {
	discontinued: boolean;
}

class DoodlePage extends React.Component<DoodlePageProps, DoodlePageState> {
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
		const { admin } = this.props.user;
		const { discontinued } = this.state;
		return (
			<Wrapper>
				{admin ? (
					<div>
						<Link to={"/doodle/new/"}>NEW DOODLE</Link>
						<label>Discontinued</label><input type='checkbox' checked={!!this.state.discontinued} name="discontinued" onChange={this.handleCheckboxChange} />
					</div>
				) : ''}
				<DoodleList discontinued={discontinued} />
				<Switch>
					<Route exact path="/doodle/new/" component={DoodleNew} />
					<Route exact path="/doodle/item/:_doodleId/" component={Doodle} />
					<Route exact path="/doodle/edit/:_doodleId/" component={DoodleEdit} />				
				</Switch>
			</Wrapper>
		);			
	}
};


export { DoodlePage };

export default userConsumer(doodleProvider(DoodlePage));