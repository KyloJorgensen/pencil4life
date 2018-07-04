'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EventListItem from './event-list-item';

let wrapper: ShallowWrapper;

describe('Render EventListItem', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<EventListItem/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});