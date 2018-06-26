'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Dropdown from './dropdown';

let wrapper: ShallowWrapper;

describe('Render Dropdown', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<Dropdown />
		);
		expect(wrapper).toMatchSnapshot();
	});
});