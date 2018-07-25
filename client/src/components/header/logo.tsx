'use strict';

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LogoWrapper = styled.div`
	> .logo {
		background: -webkit-linear-gradient(#727c92, white);
		background: -o-linear-gradient(#727c92, white);
		background: linear-gradient(#727c92, white);
		
		> a {
			> .logo-img {
				width: 100%;
				padding: 20px 0;
			}
		}
	}
`;

class Logo extends React.Component<null> {
	render() {
		return (
            <LogoWrapper className="container" >
                <div className="logo">
                    <NavLink role="menuitem" tabIndex={-1} to={'/'} ><img className="logo-img" src="/images/pencil4lifelogo-blue-transparent.png" alt="Pencil4Life" /></NavLink>
                </div>
            </LogoWrapper>
		);
	}
};

export default Logo;