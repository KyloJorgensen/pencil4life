'use strict';

import * as React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe('Render <Main/> component', () => {	
	it('matches the snapshot', () => {
		const wrapper = shallow(<Main />);
		expect(wrapper).toMatchSnapshot();
	});	
	it('should have only one div element', () => {
		const wrapper = shallow(<Main />);
		const div = wrapper.find('div'); 
		expect(div).toHaveProperty('length', 1);
	});
	it('should have a div element with a main class', () => {
		const wrapper = shallow(<Main />);
		const mainClass = wrapper.find('div').hasClass('main'); 
		expect(mainClass).toBeTruthy();
	});
	it('should have only one p element', () => {
		const wrapper = shallow(<Main />);
		const p = wrapper.find('p');
		expect(p).toHaveProperty('length', 1);
	});
	it('should have a p element with text', () => {
		const wrapper = shallow(<Main/>);
		const p = wrapper.find('p');
		const text = p.text();
		expect(text).toEqual('Main page');
	});
});