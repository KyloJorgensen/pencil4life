'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import DoodleListItem from './doodle-list-item';
import { IDoodleContext, doodleConsumer, getDoodlesQuery } from './doodle-provider';
import styled from 'styled-components';

const DoodleListWrapper = styled.div`	
	> ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: minmax(100px, 1fr);
		grid-gap: 2rem;
	}
`;

export interface DoodleListProps {
	doodle: IDoodleContext;
	limit: number;
	discontinued: boolean;
	displayDetails?: boolean;
}

class DoodleList extends React.Component<DoodleListProps> {
	public static defaultProps = {
		displayDetails: true,
	};
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	let query: getDoodlesQuery = {};
    	if (this.props.limit) {
    		query.limit = this.props.limit;
    	}
    	this.props.doodle.getDoodles(query);
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
    		this.props.doodle.getDoodles(query);
    	}

    }

	render() {
		const { displayDetails } = this.props;
		let DoodleList = [];
		if (this.props.doodle.doodles) {
            this.props.doodle.doodles.forEach((doodleKey) => {
				DoodleList.push(<DoodleListItem key={doodleKey} _doodleId={doodleKey} displayDetails={displayDetails} />)
			});
		}
		return (
			<DoodleListWrapper>
				<ul className='doodle-list' >
					{DoodleList}
				</ul>
			</DoodleListWrapper>
		);			
	}
};

export default doodleConsumer(DoodleList);