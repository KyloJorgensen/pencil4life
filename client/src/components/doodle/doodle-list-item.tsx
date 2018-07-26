'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import * as objectPath from 'object-path';
import ImageTag from '../image/image-tag';
import { doodleConsumer, IDoodleContext } from './doodle-provider';
import styled from 'styled-components';

const DoodleListItemWrapper = styled.div`
	.doodle-link {    
		display: grid;
		grid-template-rows: 1fr auto;
		width: 100%;
		height: 100%;
		color: black;
		border-color: #ffffff;
		border-style: solid;
	}
	.doodle-link:hover {
		border-style: solid;
		border-color: black;
		transition: border-color 2s linear;
	}

	.image-wrapper {
		align-self: stretch;
		width: 100%;
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

export interface DoodleListItemProps {
	doodle: IDoodleContext;
	_doodleId: string;
}

class DoodleListItem extends React.Component<DoodleListItemProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.doodle.getDoodle(this.props._doodleId);
    }

	render() {

		const { _doodleId, title, _imageId } = this.props.doodle.doodle;

		const ImageElem = _imageId ? (<ImageTag _imageId={this.props.doodle.doodle._imageId} />) : '';

		return (
			<DoodleListItemWrapper>				
				<Link className="doodle-link" to={'/doodle/item/'+_doodleId} >
					<div className="image-wrapper">
						{ImageElem}
					</div>
					<div className="title-year-wrapper">
						<p className="title">{title}</p>
					</div>
				</Link>
			</DoodleListItemWrapper>
		);		
	}
};

export default doodleConsumer(DoodleListItem);