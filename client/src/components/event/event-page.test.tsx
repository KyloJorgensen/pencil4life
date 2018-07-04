'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EventPage from './event-page';

let wrapper: ShallowWrapper;

describe('Render EventPage', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<EventPage/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});