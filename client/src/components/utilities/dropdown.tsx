'use strict';

import * as React from 'react';

export interface IDropdownProps {
	toggleClass?: string;  
	menuClass?: string;
	toggleChild?: string | React.Component;
}

export interface IDropdownState {
	show: boolean;
	over: boolean;
}

class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
    constructor(props) {
        super(props);
        this.state = {
			show: false,
			over: true,
  		};
  		this.dropDownToggle = this.dropDownToggle.bind(this);
  		this.click = this.click.bind(this);
  		this.onMouseEnter = this.onMouseEnter.bind(this);
  		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onClick = this.onClick.bind(this);
    }

	componentDidMount() {
		// event to hide dropdown list
	    window.addEventListener('click', this.click);
	}

	componentWillUnmount() {
		// remove eventlisters
	    window.removeEventListener('click', this.click);
	}

	click(e) {
		if (!this.state.over) {
			this.setState((prevState, props) => {
				return {show: false};
			});
		}
	}

	dropDownToggle(e) {
		e.preventDefault();
		this.setState((prevState, props) => {
			if (this.state.show == false) {
				return {show: true};
			} else {
				return {show: false};
			}
		});
	}

	onMouseEnter () {
		this.setState((prevState, props) => {
			return {over: true};
		});
	}

	onMouseMove() {
		this.setState((prevState, props) => {
			return {over: true};
		});
	}

	onMouseLeave() {
		this.setState((prevState, props) => {
			return {over: false};
		});
	}

	onClick() {
		this.setState((prevState, props) => {
			return {over: false, show: false};
		});
	}

	render() {
		const { show } = this.state;
		const { toggleClass, menuClass, toggleChild, children } = this.props;
 		
		let _toggleClass, _menuClass, _toggleChild, _children;

		_toggleClass = !!toggleClass ? toggleClass : 'btn dropdown-toggle';
		_menuClass = !!menuClass ? menuClass : 'dropdown-menu';
		_toggleChild = !!toggleChild ? toggleChild : 'Menu';
		_children = !!children ? children : [
			(<a key='1' className='dropdown-item' href="">Item 1</a>),
			(<a key='2' className='dropdown-item' href="">Item 2</a>),
			(<a key='3' className='dropdown-item' href="">Item 3</a>),
		];

		if (show) {
			_menuClass += ' show ';
		} else {
			_menuClass = _menuClass.replace('show','');
		}

		return (
			<div className="dropdown show" onMouseLeave={this.onMouseLeave} onMouseMove={this.onMouseMove} onMouseEnter={this.onMouseEnter} >
				<a className={_toggleClass} href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.dropDownToggle} >
					{_toggleChild}
				</a>

				<div className={_menuClass} aria-labelledby="dropdownMenuLink" onClick={this.onClick} >
					{_children}
				</div>
			</div>
		);
	}
};

export default Dropdown;