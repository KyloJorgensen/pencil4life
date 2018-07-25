'use strict';

import * as React from 'react';
import styled from 'styled-components';
import { eventListenerConsumer, IEventListenerContext } from '../event-listener/event-listener';
import Footer from './footer';

const FooterBarWrapper = styled.div`
	background-color: black;
	position: sticky;
	bottom: 0;
	z-index: 10;

	.footer-bar {
		height: 2em;
	}
`;

export interface FooterBarState {
	show: boolean;
	over: boolean;
}

export interface FooterBarMethods {
	popUpToggle: () => void;
	handleOutside: () => void;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
	handleMouseMove: () => void;
}

class FooterBar extends React.Component<IEventListenerContext, FooterBarState, FooterBarMethods> {
    constructor(props) {
        super(props);
        this.state = {
  			show: false,
  			over: false,
		};
		this.popUpToggle = this.popUpToggle.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.handleOutsideScroll = this.handleOutsideScroll.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
    }

	popUpToggle() {
		this.setState((prevState) => {return {show: !prevState.show}});
	}

	handleOutsideClick() {
		if (!this.state.over) {
			this.setState(() => {return {show: false}});
		}
	}

	handleOutsideScroll() {
		this.setState(() => {return {show: false}});
	}

	handleMouseEnter() {
		this.setState(() => {return {over: true}});
	}

	handleMouseLeave() {
		this.setState(() => {return {over: false}});
	}

	handleMouseMove() {
		this.setState(() => {return {over: true}});
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleOutsideScroll);
		window.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleOutsideScroll);
		window.removeEventListener('click', this.handleOutsideClick);
	}

	render() {

		const { handleMouseEnter, handleMouseLeave, handleMouseMove, popUpToggle } = this;
		const { show } = this.state;

		return (
			<FooterBarWrapper>
		    	<div onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onClick={popUpToggle} >
					{show ? (<Footer/>) : ''}
		    		<div className="footer-bar"></div>
	    		</div>
			</FooterBarWrapper>
		);
	}
};

export default eventListenerConsumer(FooterBar);