'use strict';

import * as React from 'react';
import { Link, Redirect } from "react-router-dom";
import * as  fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';
import * as faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft';
import { doodleConsumer, IDoodleContext } from './doodle-provider';
import styled from 'styled-components';

fontawesome.library.add(faCaretRight, faCaretLeft);

export interface BackArrowProps {
    doodle: IDoodleContext;
}

const ArrowStyle = styled.div`
    > a {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0 1em;
        > svg {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 0;                    
            width: 2em !important;
            height: 5em;
            color: #494949;
        }
    }
    &:hover {
        > a > svg {
            color: white;
        }
    }
`;

class BackArrow extends React.Component<BackArrowProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getDoodles } = this.props.doodle;
    	getDoodles({});
    }

	render() {
        const { doodles, doodle } = this.props.doodle;
        
        const pages = doodles.map((page) => `item/${page}`);
        pages.push('');
        const index = pages.findIndex((page) => page == ('_doodleId' in doodle? `item/${doodle._doodleId}` : ''));

		return (
			<ArrowStyle className='back' >
                <Link to={`/doodle/${pages[(index+pages.length-1)%pages.length]}`} >
                    <FontAwesomeIcon icon={["fas", "caret-left"]} />
                </Link>
			</ArrowStyle>
		);			
	}
};

const backarrow = doodleConsumer(BackArrow);
export {backarrow as BackArrow};

export interface NextArrowProps {
    doodle: IDoodleContext;
}

class NextArrow extends React.Component<NextArrowProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {getDoodles} = this.props.doodle;
    	getDoodles({});
    }

	render() {
        const { doodles, doodle } = this.props.doodle;
        
        const pages = doodles.map((page) => `item/${page}`);
        pages.push('');
        const index = pages.findIndex((page) => page == ('_doodleId' in doodle? `item/${doodle._doodleId}` : ''));

		return (
			<ArrowStyle className='next' >
                <Link to={`/doodle/${pages[(index+pages.length+1)%pages.length]}`} >
                    <FontAwesomeIcon icon={["fas", "caret-right"]} />
                </Link>
			</ArrowStyle>
		);			
	}
};

const nextarrow = doodleConsumer(NextArrow);
export {nextarrow as NextArrow};