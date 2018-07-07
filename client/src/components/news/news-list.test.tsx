'use strict';

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NewsList from './news-list';

let wrapper: ShallowWrapper;

describe('Render NewsList', () => {
	it('matches the snapshot', () => {
		wrapper = shallow(
			<NewsList/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});