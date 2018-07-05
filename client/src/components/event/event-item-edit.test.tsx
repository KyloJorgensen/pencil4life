'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import EventItemEdit from './event-item-edit';
import { withRouter } from 'react-router';

let wrapper: ShallowWrapper;

describe('Render EventItemEdit', () => {
	it('matches the snapshot', () => {
		const EC = withRouter(EventItemEdit);
		wrapper = shallow(
			<EC/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});