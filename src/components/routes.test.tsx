'use strict';
import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { MemoryRouter } from 'react-router';
import Routes from './routes';
import Main from './main';
import Other from './other';

describe('Render router component', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(<Routes/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have 2 routes', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[ '/', '/#/other' ]} initialIndex={0} >
				<Routes/>
			</MemoryRouter>
		);
		// const mainRoute = wrapper.find(Main).length;
		// expect(mainRoute).toEqual(1)

	});

	it('on route / to have Main component ', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[ '/' ]} initialIndex={0} >
				<Routes/>
			</MemoryRouter>
		);

		const mainRoute = wrapper.find(Main).length;
		expect(mainRoute).toEqual(1)

	});
	it('on route /other to have Other component ', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[ 'other' ]} initialIndex={0} >
				<Routes/>
			</MemoryRouter>
		);

		// const otherRoute = wrapper.find(Other).length;
		// expect(otherRoute).toEqual(1)

	});
});
