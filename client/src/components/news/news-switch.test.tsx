'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NewsSwitch from './news-switch';

let wrapper: ShallowWrapper;

describe('Render NewsSwitch', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<NewsSwitch/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});