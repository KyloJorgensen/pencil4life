'use strict';

// import * as React from 'react';
// import { NavLink } from 'react-router-dom';

// class Header extends React.Component<null, null> {
// 	render() {
// 		return (
// 			<header>
// 				<div>
// 					<NavLink role="menuitem" tabIndex={-1} to={'/'} ><img className="logo-img" src="/images/pencil4lifelogo-blue-transparent.png" alt="Pencil4Life" /></NavLink>
// 				</div>
// 				<div>
//  				    <nav >
//  				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/'} activeClassName="selected" >HOME</NavLink>
//  				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/project'} activeClassName="selected" >PROJECTS</NavLink>
//  				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/doodles'} activeClassName="selected" >DOODLES</NavLink>
//  				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/comics'} activeClassName="selected" >COMICS</NavLink>
//  				    	<div toggleClass={communityClasses}  toggleChild='COMMUNITY'>
//  				    		<NavLink className="dropdown-item" exact className="btn" role="menuitem" tabIndex={-1} to={'/event'} activeClassName="selected" >EVENTS</NavLink>
//  						    <NavLink className="dropdown-item" exact className="btn" role="menuitem" tabIndex={-1} to={'/news'} activeClassName="selected" >NEWS</NavLink>
//  						    <NavLink className="dropdown-item" exact className="btn" role="menuitem" tabIndex={-1} to={'/soundboard'} activeClassName="selected" >SOUNDBOARD</NavLink>
//  				    	</div>
//  					    <NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/shop'} activeClassName="selected" >SHOP</NavLink>
//  				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/commission'} activeClassName="selected" >COMMISSION</NavLink>
//  				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/info'} activeClassName="selected" >INFO</NavLink>
//  				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/contact'} activeClassName="selected" >CONTACT</NavLink>
//  				    </nav>
//  					<div className="user-info" >
//  						{user}
//  					</div>
// 				</div>
// 			</header>
// 		)
// 	}
// }

// export default Header;

import * as React from 'react';
import { NavLink } from 'react-router-dom';
// import userActions from '../../actions/user.actions';
import Dropdown from '../utilities/dropdown';
import * as  fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';
import * as faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import * as faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import * as faUserAlt from '@fortawesome/fontawesome-free-solid/faUserAlt';
import { withRouter } from 'react-router';

fontawesome.library.add(faCheckSquare, faSignInAlt, faSignOutAlt, faUserAlt);

import './header.less';

export interface IHeaderProps {
	location: any;
	dispatch: any;
	adminAccess: boolean;
	userAccess: boolean;
}

export interface IHeaderState {
	logoMargin: number;
	navPosition: 'initial' | 'fixed';
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props) {
        super(props);
        this.state = {
  			navPosition: 'initial',
  			logoMargin: 0,
		  };
  		this.logout = this.logout.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.setLogoRef = this.setLogoRef.bind(this);
		this.setNavRef = this.setNavRef.bind(this);  
    }

	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}
	
	logoRef = null;
	navRef = null;
	
	setLogoRef(ref) {
		this.logoRef = ref;
	}

	setNavRef(ref) {
		this.navRef = ref;
	}

	handleScroll(e) {

		this.setState((prevState, props) => {
			
			const scroll = window.pageYOffset;
			//@ts-ignore
			const imgHeight = this.logoRef.clientHeight;
			//@ts-ignore
			const navBarHeight = this.navRef.clientHeight;
			//@ts-ignore
			const navBarWidth = this.navRef.clientWidth;

			return {
				navPosition: scroll >= imgHeight && navBarWidth > 900 ? 'fixed' : 'initial',
				logoMargin: scroll >= imgHeight && navBarWidth > 900 ? navBarHeight+20 : 0,
			}

		});
	}

	logout() {
		// this.props.dispatch(userActions.userLogout());
	}

	render() {
		let user = []

		let selectedAdmin = ['/image'];
		let adminClasses = "btn dropdown-toggle";
		if (selectedAdmin.includes(this.props.location.pathname)) {
			adminClasses += " selected ";
		}

		let admin = this.props.adminAccess ? (
			<Dropdown key="admin" toggleClass={adminClasses} menuClass="dropdown-menu-right" toggleChild='ADMIN'>
				<NavLink exact className="dropdown-item" role="menuitem" tabIndex={-1} to={'/image'} activeClassName="selected" >IMAGES</NavLink>
			</Dropdown>
		) : ''; 
		user.push(admin);

		let selectedProfile = ['/profile'];
		let profileClasses = "btn dropdown-toggle";
		if (selectedProfile.includes(this.props.location.pathname)) {
			profileClasses += " selected ";
		}

		let profile = this.props.userAccess ? (
			<NavLink exact key="profile" className="btn mytooltip" role="menuitem" tabIndex={-1} to={'/profile'} activeClassName="selected" >
				<FontAwesomeIcon icon={["fas", "user-alt"]} />
				<span className="btn mytooltiptext">PROFILE</span>
			</NavLink>
		) : ''; 
		user.push(profile);

		let logInOut = this.props.userAccess ? (
			<a key="logout" className="btn mytooltip" onClick={this.logout} >
				<FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
 				<span className="btn mytooltiptext">SIGN OUT</span>
			</a>
		) : (
			<NavLink exact key="login" className="btn mytooltip" role="menuitem" tabIndex={-1} to={{
				pathname: '/login', 
				state: {
					redirectPath: this.props.location.pathname
				}
			}} activeClassName="selected" >
				<FontAwesomeIcon icon={["fas", "sign-in-alt"]} />
 				<span className="btn mytooltiptext">SIGN IN</span>
 			</NavLink>
		); 
		user.push(logInOut);
		let selectedCommunity = ['/soundboard', '/news', '/event'];
		let communityClasses = "btn dropdown-toggle";
		if (selectedCommunity.includes(this.props.location.pathname)) {
			communityClasses += " selected ";
		}

		return (
			<header onScroll={this.handleScroll}>
				<div className="container" >
					<div className="logo" ref={this.setLogoRef} style={{marginBottom: this.state.logoMargin+'px'}}>
						<NavLink role="menuitem" tabIndex={-1} to={'/'} ><img className="logo-img" src="/images/pencil4lifelogo-blue-transparent.png" alt="Pencil4Life" /></NavLink>
					</div>
				</div>
				<div className="container nav-wrapper" ref={this.setNavRef} style={{position: this.state.navPosition}} >
				    <nav >
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/'} activeClassName="selected" >HOME</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/project'} activeClassName="selected" >PROJECTS</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/doodles'} activeClassName="selected" >DOODLES</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/comics'} activeClassName="selected" >COMICS</NavLink>
				    	<Dropdown toggleClass={communityClasses}  toggleChild='COMMUNITY'>
				    		<NavLink className="btn dropdown-item" exact role="menuitem" tabIndex={-1} to={'/event'} activeClassName="selected" >EVENTS</NavLink>
						    <NavLink className="btn dropdown-item" exact role="menuitem" tabIndex={-1} to={'/news'} activeClassName="selected" >NEWS</NavLink>
						    <NavLink className="btn dropdown-item" exact role="menuitem" tabIndex={-1} to={'/soundboard'} activeClassName="selected" >SOUNDBOARD</NavLink>
				    	</Dropdown>
					    <NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/shop'} activeClassName="selected" >SHOP</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/commission'} activeClassName="selected" >COMMISSION</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/info'} activeClassName="selected" >INFO</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/contact'} activeClassName="selected" >CONTACT</NavLink>
				    </nav>
					<div className="user-info" >
						{user}
					</div>
				</div>
			</header>
		);
	}
};

export default withRouter(Header);