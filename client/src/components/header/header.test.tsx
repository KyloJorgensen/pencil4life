'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from './header';

let wrapper: ShallowWrapper;

describe('Render Header', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<Header>
			</Header>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
