'use strict';

import * as React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { eventListenerConsumer, IEventListenerContext } from '../event-listener/event-listener';

import './footer.less'; 

fontawesome.library.add(brands);

export interface FooterState {
	show: boolean;
	over: boolean;
}

export interface FooterMethods {
	popUpToggle: () => void;
	handleOutsideClick: () => void;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
	handleMouseMove: () => void;
	handleClick: () => void;
}

class Footer extends React.Component<IEventListenerContext, FooterState, FooterMethods> {
    constructor(props) {
        super(props);
        this.state = {
  			show: false,
  			over: false,
		};
		this.popUpToggle = this.popUpToggle.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleClick = this.handleClick.bind(this);
    }

	popUpToggle() {
		this.setState((prevState) => {return {show: !prevState.show}});
	}

	handleOutsideClick() {
		if (!this.state.over) {
			this.setState(() => {return {show: false}});
		}
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

	handleClick() {
		this.setState(() => {return {show: false, over: false}});
	}

	componentDidMount() {
		this.props.addEventListener('scroll', this.handleOutsideClick);
		this.props.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		this.props.removeEventListener('scroll', this.handleOutsideClick);
		this.props.removeEventListener('click', this.handleOutsideClick);
	}

	render() {

		const { handleClick, handleMouseEnter, handleMouseLeave, handleMouseMove, popUpToggle } = this;
		const { show } = this.state;


		let footerBodyClass = show ? 'footer-body fixed' : 'footer-body';
		let BodyFillerClass = show ? 'container' : 'hide';

		return (
			<footer id="footer" >
		    	<div className={footerBodyClass} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onClick={handleClick} >
			    	<div className="container" >
			    		<a href="https://www.instagram.com/pencil.4.life/"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
			    		<a href="https://www.twitch.tv/pencil4life"><FontAwesomeIcon icon={["fab", "twitch"]} /></a>
			    		<a href="https://twitter.com/pencil4life"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
			    		<a href="https://www.facebook.com/pencil4life/?ref=br_rs"><FontAwesomeIcon icon={["fab", "facebook-f"]} /></a>

			    		{/*<a className="button alt" onClick={this.login} >ADMIN</a>*/}
			    	</div>
			    	<div className="legal container">
			    		<a href="">&copy;Pencil4Life</a>
			    		<a href="">&copy;Brad Ashworth</a>
			    		<a href="">&copy;Kylo Jorgensen</a>
			    		<a href="">Privacy Policy</a>
			    		<a href="">User Agreement</a>
			    	</div>
		    	</div>
		    		<div className={BodyFillerClass} >
			    		<a href="">This is the body filler</a>
			    	</div>
		    	<div className="footer-bar" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onClick={popUpToggle} ></div>
	    	</footer>
		);
	}
};

export default eventListenerConsumer(Footer);