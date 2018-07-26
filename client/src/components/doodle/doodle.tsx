'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Link, Redirect } from "react-router-dom";
import ImageTag from '../image/image-tag';
import { IUserContext, userConsumer } from '../user/user-provider';
import { doodleConsumer, IDoodleContext } from './doodle-provider';
import { BackArrow, NextArrow } from './doodle-changer';
import { Popout } from '../utilities/styled.components';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: auto auto auto min-content;

	> .back {
		grid-row: 1;
	}

	> .edit {
		grid-column: 2;
		align-self: center;
		text-align: center;
	}

	> .next {
		grid-column: 3;  
		grid-row: 1;
	}

	> .exit {
		color: white;
		background-color: #e98383;
		width: 2em;
		height: 2em;
		line-height: 2;
		padding: 0;
		text-align: center;
		grid-column: 4;  
	}

	> .content {
		grid-column-start: 1;
		grid-column-end: -1;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		
		> * {
			padding: 1em;
		}
		> img {
			max-width: 100%;
			align-self: center;
		}
	}

	@media (min-width: 575px) {
		grid-template-columns: auto 1fr auto;
		> .back {
			grid-row: unset;
		}
		
		> .edit {
			text-align: left; 
		}

		> .next {
			grid-row: unset;
		}

		> .exit {
			grid-column: 3;  
		}

		> .content {
			grid-column: unset;
		}
	}

`;

export interface DoodleProps {
    doodle: IDoodleContext;
	user: IUserContext;
}

export interface DoodleState {
	redirect: boolean;
}

class Doodle extends React.Component<DoodleProps, DoodleState> {
    constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		}
		this.exit = this.exit.bind(this);
	}
	
	exit(event) {
		console.log('keydown')
		if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
			this.setState(() => {
				return {redirect: true};
			});
		}
	}

    componentDidMount() {
        const {_doodleId} = this.props.doodle.doodle;
		this.props.doodle.getDoodle(_doodleId);
		document.addEventListener('keydown', this.exit, false);
	}

	componentDidUpdate(prevProps: DoodleProps, prevState) {
        const {_doodleId} = this.props.doodle.doodle;
		if (prevProps.doodle.doodle._doodleId != _doodleId) {
			this.props.doodle.getDoodle(_doodleId);
		}
		document.removeEventListener('keydown', this.exit, false);
	}

	render() {
		const { redirect } = this.state;
		const { _doodleId, title, _imageId, details } = this.props.doodle.doodle;
		const { admin } = this.props.user;

		const coverImageElem = _imageId ? (<ImageTag _imageId={_imageId} />) : '';

		if (redirect) {
			return (
				<Redirect to='/doodle/'/>
			)
		}
		return (
			<Popout onKeyDown={this.exit}>
				<Wrapper>
					{admin ? <Link className="edit" to={'/doodle/edit/' + _doodleId}>EDIT</Link> : ''}
					<Link className="exit" to='/doodle/'>X</Link>
					<BackArrow _doodleId={_doodleId} />
					<div className="content">
						{coverImageElem}
						{title || details != '<p><br></p>' ? <div>
							{title ? <h2 className="title">{title}</h2> : ''}
							{details != '<p><br></p>' ? <RichTextEditor value={RichTextEditor.createValueFromString(details, 'html')} readOnly={true} /> : ''}
						</div> : ''}
					</div>
					<NextArrow _doodleId={_doodleId} />
				</Wrapper>
			</Popout>
		);			
	}
};

export default userConsumer(doodleConsumer(Doodle));