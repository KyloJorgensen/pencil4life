'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EventItem from './event-item';

let wrapper: ShallowWrapper;

describe('Render EventItem', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<EventItem/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});