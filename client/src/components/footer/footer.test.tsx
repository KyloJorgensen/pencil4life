'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Footer from './footer';

let wrapper: ShallowWrapper;

describe('Render Footer', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<Footer>
			</Footer>
		);
		expect(wrapper).toMatchSnapshot();
	});
});