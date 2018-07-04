'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EventList from './event-list';

let wrapper: ShallowWrapper;

describe('Render EventList', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<EventList/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});