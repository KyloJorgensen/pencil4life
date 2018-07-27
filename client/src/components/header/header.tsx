'use strict';

import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import * as  fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';
import * as faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import * as faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import * as faUserAlt from '@fortawesome/fontawesome-free-solid/faUserAlt';
import styled, { defaultTheme } from '../utilities/styled.components';
import Dropdown from '../utilities/dropdown';
import { userConsumer, IUserContext } from '../user/user-provider';

fontawesome.library.add(faCheckSquare, faSignInAlt, faSignOutAlt, faUserAlt);

const HeaderWrapper = styled.header`
	margin: 0;
	color: white;
	
	@media (min-width: 768px) {
		position: sticky;
		top: 0;
		z-index: 9999;
	}

	.dropdown-toggle::after {
		display: inline-block;
		width: 0;
		height: 0;
		margin-left: .255em;
		vertical-align: .255em;
		content: "";
		border-top: .3em solid;
		border-right: .3em solid transparent;
		border-bottom: 0;
		border-left: .3em solid transparent;
	}

	.user-info {
		display: flex;
		justify-content: flex-end;

		> * {
			margin: 0.3em 0.2em !important;

		}

		> .btn {
			background: ${props => props.theme.darkblue};
			a {
				padding: 0;
			}
		}
	}

	.nav-wrapper {
		nav {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			background-color: ${props => props.theme.darkblue};
			margin: 0;
		}
	}
	.user-info, .nav-wrapper nav {
		.selected {
			text-decoration: underline;
		}

		a {
			font-family: "QueenOfCamelot", "Lato", sans-serif;
			color: white;
			margin: 0;
			font-size: 1em;
			text-decoration: none;
			padding: 0.5em;
			background-color: ${props => props.theme.darkblue};
		}

		a:hover, a:focus{
			outline: none;
			color: white;
			text-decoration: none;
			box-shadow: none;
			background-color: ${props => props.theme.highlightblue};
		}
		.dropdown-menu, .dropdown-menu-right {
			display: none;
			border: none;
			border-radius: unset;
			margin: 0.167rem 0 0 0;
			padding: 0;
			background-color: ${props => props.theme.darkblue};
			.btn {
				display: block;
				text-align: unset;
			}
		}
		.dropdown-menu-right {
			position: absolute;
			right: 0;
			> * {
				justify-self: right;
			}
		}
		.show {
			display: block;
		}
	}
`;

export interface IHeaderProps {
	location: Location;
	user: IUserContext;
}

export interface IHeaderState {
	navPosition: 'initial' | 'fixed';
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props) {
        super(props);
        this.state = {
  			navPosition: 'initial',
		  };
  		this.logout = this.logout.bind(this);
    }

	logout() {
		this.props.user.logout();
	}
	
	componentDidMount() {
		this.props.user.getUser();
	}

	render() {
		let user = []

		let selectedAdmin = ['/image'];
		let adminClasses = "btn dropdown-toggle";
		if (selectedAdmin.includes(this.props.location.pathname)) {
			adminClasses += " selected ";
		}

		let admin = this.props.user.admin ? (
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

		let profile = this.props.user.userAccess ? (
			<NavLink exact key="profile" className="btn" role="menuitem" tabIndex={-1} to={'/profile'} activeClassName="selected" >
				PROFILE <FontAwesomeIcon icon={["fas", "user-alt"]} />
			</NavLink>
		) : ''; 
		user.push(profile);

		let logInOut = this.props.user.userAccess ? (
			<a key="logout" className="btn" onClick={this.logout} >
				SIGN OUT <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
			</a>
		) : (
			<NavLink exact key="login" className="btn" role="menuitem" tabIndex={-1} to={{
				pathname: '/login', 
				state: {
					redirectPath: this.props.location.pathname
				}
			}} activeClassName="selected" >
				SIGN IN <FontAwesomeIcon icon={["fas", "sign-in-alt"]} />
 			</NavLink>
		); 
		user.push(logInOut);
		let selectedCommunity = ['/soundboard', '/news', '/event'];
		let communityClasses = "btn dropdown-toggle";
		if (selectedCommunity.includes(this.props.location.pathname)) {
			communityClasses += " selected ";
		}

		return (
			<HeaderWrapper theme={defaultTheme}>
				<div className="container nav-wrapper" >
				    <nav >
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/'} activeClassName="selected" >HOME</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/project'} activeClassName="selected" >PROJECTS</NavLink>
				    	<NavLink exact className="btn" role="menuitem" tabIndex={-1} to={'/doodle'} activeClassName="selected" >DOODLES</NavLink>
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
			</HeaderWrapper>
		);
	}
};

export default userConsumer(withRouter(Header));