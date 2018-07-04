'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EventSwtich from './event-switch';

let wrapper: ShallowWrapper;

describe('Render EventSwtich', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<EventSwtich/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});